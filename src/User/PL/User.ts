import express, { response } from 'express';
import { userBuss } from "../../User/BL/User.Buss";
import { IUserModel } from '../../User/DL/user';
import { Iconsaltants } from "../../consaltant/DL/consaltants";
import { ConsaltantBuss } from "../../consaltant/BL/consaltant.buss";
import { readFileSync } from 'fs';
import handlebars from "handlebars";
import { compare, compareSync, genSalt, hash } from "bcrypt";
import { sign, verify } from "jsonwebtoken";
//import "../../utils/config"
import { Mail } from "../../utills/mail";
import { Filters } from "../../utills/Filters";
import auth from "../../utills/auth/Authenticate";
import e from 'express';

export class UserPresention {
    async login(username: string, password: string) {
        if (username != null && password != null) {
            // attempt to authenticate user
            let user = await new userBuss().getAuthenticated(username);
            // login was successful if we have a user
            if (user != null) {
                if (user.status == "Not Active") {
                    return JSON.stringify({ messege: "Please Active Your Account" });
                } else {
                    //   return JSON.stringify({messege: user});
                    let passwordcompare = compareSync(password, user.password);
                    if (passwordcompare) {
                        let currentTime = new Date().toString();
                        let UserUpdate = await new userBuss().IncreementLogin(user._id, currentTime);
                        user = await new userBuss().getOneUser(user._id);
                        // handle login success
                        const authData = {
                            id: user._id,
                            permission: user.permission,
                            userType: user.userType,
                            LoginCount: user.loginCount,
                            LastLogin: user.lastlogin
                        }
                        let _token = sign({ authData }, 'secretkey', { expiresIn: '30000s' })
                        return JSON.stringify({
                            authData,
                            _token
                        });
                    } else {
                        return JSON.stringify({ messege: "Not Valid User" });
                    }
                }
            } else {
                return JSON.stringify({
                    messege: "User Name and Password dose not exists"
                });
            }
        } else {
            return JSON.stringify({
                messege: "User Name and Password can't be empty"
            });
        }
    }
    async consaltantSignup(consaltant: Iconsaltants, user: IUserModel) {

        user.status = "Not Active"
        user.activationCodes = [
            {
                code: Math.floor(100000 + Math.random() * 900000) + ''
            }
        ]
        let newuser = await new userBuss().singUpConsaltan(user, consaltant)
        if (newuser != {}) {
            let html = readFileSync('./src/Public/mailtemp/activationCode/activationCode.html', 'utf8');
            let template = handlebars.compile(html)
            let replacments = {
                username: consaltant.C_First_Name,
                Activationcode: user.activationCodes[0].code
            }
            let htmltosend = template(replacments)
            let newMail = await new Mail(user.email, "Activation Code", user.activationCodes[0].code, htmltosend);
            newMail.sendMail();
            return JSON.stringify({
                messege: "new User Created Succssfully Cheack Email for Activation Code",
                newuser
            });
        } else {
            return JSON.stringify({
                messege: "user Not Created"
            })
        }
    }
    async changePassword(_token: string, OldPassword: string, NewPassword: string) {
        try {
            let responseData = JSON.parse(JSON.stringify(verify(_token, 'secretkey')));
            let userId = responseData.authData.id;
            let user: IUserModel = await new userBuss().getOneUser(userId);
            //res.send(user);
            if (user == null) {
                return JSON.stringify({
                    message: "you are not allowed to change password"
                })
            } else {
                let ismatch = compare(OldPassword, user.password)
                if (!ismatch) {
                    return JSON.stringify({
                        messege: "Wrong Old Password"
                    })
                } else {
                    // query to handle password update
                    let newsalt = (await genSalt(10))
                    let newhash = (await hash(NewPassword, newsalt))
                    let response = new userBuss().updatePassword(user._id, newhash);
                    if (response) {
                        let newMail = new Mail(user.email, "New Password Genrated", "some One has recently changed your Password");
                        newMail.sendMail();
                        return JSON.stringify({
                            message: "password Updated"
                        });
                    }
                }
            }
        } catch (error) {
            return JSON.stringify({
                error: error
            })
        }


    }
    async consaltantActivation(_id:string,activationCode:string){          
            let user = await new userBuss().getOneUser(_id)
            if (user != null && user.status == "Not Active") {
                if (user.activationCodes.filter(acode => (acode.code === activationCode)).length > 0) {
                    let response = await new userBuss().UpdateStatus(_id);
                    let consaltant: Iconsaltants = await new ConsaltantBuss().getOneConsaltantByUserId(user._id);
                    let html = readFileSync('./src/Public/mailtemp/activationCode/AfterActivation.html', 'utf8');
                    let template = handlebars.compile(html)
                    let replacments = {
                        username: consaltant.C_First_Name
                    }
                    let htmltosend = template(replacments)
                    let newMail = new Mail(user.email, "Account Is Activated", ' ', htmltosend);
                    newMail.sendMail();
                    return JSON.stringify({
                        message: "User Activated"
                    })
                } else {
                    return JSON.stringify({
                        messege: "wrong activation code"
                    })
                }
            } else {
                return JSON.stringify({
                    messege: "No user Found or user already activated"
                })
            }
    }
    /* routes() {
      
          
        
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
                    let consaltant: Iconsaltants = await new ConsaltantBuss().getOneConsaltantByUserId(user._id);
                    let code = Math.floor(100000 + Math.random() * 900000) + ''
                    let newCode = await new userBuss().reGenrateCode(_id, code);
                    let html = fs.readFileSync('./Public/mailtemp/activationCode/activationCode.html', 'utf8');
                    let template = handlebars.compile(html)
                    let replacments = {
                        username: consaltant.C_First_Name,
                        Activationcode: code
                    }
                    let htmltosend = template(replacments)
                      let newMail = new Mail(user.email, "Activation Code", code, htmltosend);
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
                            forgetLink: forgetLink
                        }
                        let htmltosend = template(replacments)
                        let newMail = new Mail(user.email, "Password Reset Link", '', htmltosend);
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
            let NewPassword = req.body.NewPassword
            let tokenarry = token.split("|jaboo|||")
            let user = await new userBuss().getOneUser(tokenarry[1])
            if (user == null) {
                res.status(200).json({
                    message: "wrong user with token"
                })
            } else {
                if (tokenarry[0] == user.forgetpasswordstring) {
                    bcrypt.genSalt(10, (err, salt) => {
                        if (err) throw err
                        bcrypt.hash(NewPassword, salt, (err, hash) => {
                            let response = new userBuss().updatePassword(user._id, hash)
                            let forget = new userBuss().forgotpasswordLinkgenration(user._id, '');
                            res.status(200).json({
                                message: "New Password Updated"
                            });
                        });
                    })

                }
            }
        })
    } */
}
//export const UserRoutes = new UserPresention()
