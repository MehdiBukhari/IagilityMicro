import express, { response } from 'express';
import { userBuss } from "../../BussniessLogicLayer/User.Buss";
import { IUserModel } from '../../DataAccessLayer/Models/user';
import { Iconsaltants } from "../../DataAccessLayer/Models/consaltants";
import { ConsaltantBuss } from "../../BussniessLogicLayer/consaltant.buss";
import fs from 'fs';
import handlebars from "handlebars";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import "../../utils/config"
import { Mail } from "../../utils/mail";
import { Filters } from "../../utils/Filters";
import auth from "../../DataAccessLayer/Services/auth/Authenticate";
import e from 'express';

export class UserPresention {
    router: express.Router
    constructor() {
        this.router = express.Router();
        this.routes();

    }
    routes() { 
        this.router.post('/consaltantSignup', async (req, res) => {
            let user: IUserModel = JSON.parse(req.body.user)
            user.status = "Not Active"
            let consaltant: Iconsaltants = JSON.parse(req.body.consultant)
            let fileData = req.files
            if (user != null && consaltant != null) {
                    if(fileData != null){
                        let consaltant_pic = req.files.profile_picture;
                        if(consaltant_pic!=null){
                            consaltant.C_Picture_URL = Date.now() + consaltant_pic.name;
                            if (new Filters().ImageFilter(consaltant_pic.mimetype)) {
            
                                consaltant_pic.mv("./uploads/" + consaltant.C_Picture_URL);
                            }
                        } 
                        let consultant_profile = req.files.consultant_profile;
                        if(consultant_profile!=null){
                            let resume: string = Date.now() + consultant_profile.name + '';
                            consaltant.Resumes = [
                                {
                                    Resume_Title: consultant_profile.name,
                                    Resume_File_URL: resume
                                }
                            ]    
                            if (new Filters().ResumeFilter(consultant_profile.mimetype)) {
            
                                consultant_profile.mv("./Resumeuploads/" + consaltant.Resumes[0].Resume_Title);
                            } 
                        }
                        

                       
                    }
                    user.activationCodes = [
                        {
                            code: Math.floor(100000 + Math.random() * 900000) + ''
                        }
                    ]

                let newuser = await new userBuss().singUpConsaltan(user, consaltant)

                if (newuser != {}) {
                    let html=fs.readFileSync('./Public/mailtemp/activationCode/activationCode.html','utf8');
                    let template=handlebars.compile(html) 
                    let replacments={
                         username:consaltant.C_First_Name,
                         Activationcode:user.activationCodes[0].code
                     }
                     let htmltosend=template(replacments)
                    let newMail = await new Mail(user.email, "Activation Code", user.activationCodes[0].code,htmltosend);
                    newMail.sendMail();
                    res.status(200).json({
                        messege: "new User Created Succssfully Cheack Email for Activation Code",
                        newuser
                    });
                } else {
                    res.status(500).json({
                        messege: "user Not Created"
                    })
                }
            } else {
                res.status(200).json({
                    messege: "data is not complete"
                })
            }


        })
        this.router.post('/login', async (req, res) => {
            let username = req.body.username;
            let password = req.body.password;
            if (username != null && password != null) {
                // attempt to authenticate user
                let user = await new userBuss().getAuthenticated(username);
                // login was successful if we have a user
                if (user != null) {
                    if (user.status == "Not Active") {
                        res.json({
                            messege: "Please Active Your Account"
                        });
                    } else {


                        bcrypt.compare(password, user.password, async (err, isMatch) => {
                            if (err) throw err;
                            if (!isMatch) {
                                res.json({
                                    messege: "User Name and Password dose not exists"
                                });
                            } else {
                                let currentTime=new Date().toString();
                                
                                //update loginAttempt
                                let UserUpdate=await new userBuss().IncreementLogin(user._id,currentTime);
                                 user=await new userBuss().getOneUser(user._id);
                                // handle login success
                                const authData = {
                                    id: user._id,
                                    permission: user.permission,
                                    userType: user.userType,
                                    LoginCount:user.loginCount,
                                    LastLogin:user.lastlogin
                                }
                                jwt.sign({ authData }, 'secretkey', { expiresIn: '30000s' }, (err, token) => {

                                    res.json({
                                        authData,
                                        token
                                        
                                    });
                                });
                                console.log("working");
                            }
                        });
                    }
                } else {
                    res.json({
                        messege: "User Name and Password dose not exists"
                    });
                }
            } else {
                res.json({
                    messege: "User Name and Password can't be empty"
                });
            }
        });
        this.router.post('/changepassword', auth.verifyToken, async (req, res) => {
            let userId = req.authData.authData.id;
            let NewPassword = req.body.NewPassword
            let OldPassword = req.body.OldPassword
            let user: IUserModel = await new userBuss().getOneUser(userId);
            //res.send(user);
            if (user == null) {
                res.status(200).json({
                    message: "you are not allowed to change password"
                })
            } else {
                bcrypt.compare(OldPassword, user.password, (err, isMatch) => {
                    if (err) throw err
                    if (!isMatch) {
                        res.status(200).json({
                            messege: "Wrong Old Password"
                        })
                    } else {
                        // query to handle password update
                        let passwordhash
                        bcrypt.genSalt(10, (err, salt) => {
                            if (err) throw err
                            bcrypt.hash(NewPassword, salt, (err, hash) => {
                                if (err) throw err
                                let response = new userBuss().updatePassword(user._id, hash);
                                let newMail = new Mail(user.email, "New Password Genrated", "some One has recently changed your Password");
                                newMail.sendMail();
                                res.status(200).json({
                                    message: "password Updated"
                                });

                            })
                        })


                    }
                })
            }
        });
        this.router.post('/consaltantActivation', async (req, res) => {
            let _id = req.body._id
            let activationCode = req.body.activationCode
            let user = await new userBuss().getOneUser(_id)

            if (user != null && user.status == "Not Active") {
                if (user.activationCodes.filter(acode => (acode.code === activationCode)).length > 0) {
                    let response = await new userBuss().UpdateStatus(_id);
                    let consaltant:Iconsaltants=await new ConsaltantBuss().getOneConsaltantByUserId(user._id);
                    let html=fs.readFileSync('./Public/mailtemp/activationCode/AfterActivation.html','utf8');
                    let template=handlebars.compile(html) 
                    let replacments={
                        username:consaltant.C_First_Name
                    }
                     let htmltosend=template(replacments)
                    let newMail = new Mail(user.email, "Account Is Activated", ' ',htmltosend);
                    newMail.sendMail();
                    res.status(200).json({
                        message: "User Activated"
                    })
                } else {
                    res.status(200).json({
                        messege: "wrong activation code"
                    })
                }
            } else {
                res.status(200).json({
                    messege: "No user Found"
                })
            }
        });
        this.router.post('/regenrateCode', async (req, res) => {
            let _id = req.body._id;
            let user = await new userBuss().getOneUser(_id);
            if (user == null) {
                res.status(200).json({
                    message: "this user does not exits"
                })
            } else {
                if (user.status == 'Active') {
                    res.status(200).json({
                        message: "Account is already active"
                    })
                } else {
                    let consaltant:Iconsaltants=await new ConsaltantBuss().getOneConsaltantByUserId(user._id);
                    let code = Math.floor(100000 + Math.random() * 900000) + ''
                    let newCode = await new userBuss().reGenrateCode(_id, code);
                    let html=fs.readFileSync('./Public/mailtemp/activationCode/activationCode.html','utf8');
                    let template=handlebars.compile(html) 
                    let replacments={
                         username:consaltant.C_First_Name,
                         Activationcode:code
                     }
                     let htmltosend=template(replacments)
                    let newMail = new Mail(user.email, "Activation Code", code,htmltosend);
                    newMail.sendMail();
                    res.status(200).json({
                        message: "New Code Sent"
                    })
                }

            }

        })
        this.router.post('/forgetPassword', async (req, res) => {
            let email = req.body.email
            let user = await new userBuss().getAuthenticated(email);

            if (user == null) {
                message: "this email is not in our database"
            } else {
                let consaltant: Iconsaltants = await new ConsaltantBuss().getOneConsaltantByUserId(user._id);
                bcrypt.genSalt(10, (err, salt) => {
                    if (err) throw err
                    bcrypt.hash(email, salt, (err, hash) => {
                        if (err) throw err
                        let forget = new userBuss().forgotpasswordLinkgenration(user._id, hash);
                        let forgetLink = "http://69.16.200.12:8001/recover-password/" + hash + "|jaboo|||" + user._id
                        
                        let html = fs.readFileSync('./Public/mailtemp/activationCode/Forgetpassword.html', 'utf8');
                        let template = handlebars.compile(html)
                        let replacments = {
                            username: consaltant.C_First_Name,
                            forgetLink:forgetLink
                        }
                        let htmltosend = template(replacments)
                        let newMail = new Mail(user.email, "Password Reset Link", '',htmltosend);
                        newMail.sendMail();
                        res.status(200).json({
                            message: "Link Send to your registerd email"
                        })
                    })
                })
            }

        })
        this.router.post('/changePasswordFromToken', async (req, res) => {
            let token = req.body.rt
            let NewPassword=req.body.NewPassword
            let tokenarry = token.split("|jaboo|||")
            let user=await new userBuss().getOneUser(tokenarry[1])
            if(user==null){
                res.status(200).json({
                    message:"wrong user with token"
                })
            }else{
                if(tokenarry[0]==user.forgetpasswordstring){
                    bcrypt.genSalt(10,(err,salt)=>{
                        if(err) throw err
                        bcrypt.hash(NewPassword,salt,(err,hash)=>{
                            let response=new userBuss().updatePassword(user._id,hash)
                            let forget = new userBuss().forgotpasswordLinkgenration(user._id, '');
                            res.status(200).json({
                                 message:"New Password Updated"
                            });
                        });
                    })
                    
                }
            }
        })
    }
}
export const UserRoutes = new UserPresention().router
