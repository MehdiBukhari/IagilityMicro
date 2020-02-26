import {IUserModel} from "../DL/Models/IUser";
//import { Iconsaltants } from "../DL/Models/consaltants";
import { MainUser } from "../DL/DC/userController";
//import { MainConsaltant } from "../DataAccessLayer/DataAccessController/consaltantController";
export class userBuss{
    constructor(){

    }
    async getAuthenticated(username:string): Promise <IUserModel> {
             let user=await new MainUser().getUser(username);
             if(user === null)
             throw 'User does not exist';
             
             return user;       
        }
    async singUpConsaltant(user:IUserModel):Promise<any>{
        try {
            let userReponse=await new MainUser().Saveuser(user);
        console.log(user);
       // console.log(consaltant);
        if(userReponse!==null){
        /*    consaltant.userId=userReponse._id
            consaltant.Email=userReponse.email
            let consaltantResponse=await new MainConsaltant().SaveOneConsaltantInformation(consaltant);
            if(consaltantResponse!=null){
                let response={
                    userReponse,
                    consaltantResponse
                }
                return response
            }else{
                    return "some thing went wrong"
            }*/
            return user;
        }else{
            return "some thing went wrong";
        }
        } catch (error) {
            return error
        }
        
    
    }

    async loginConsultant (payload:any):Promise<any>{
    
    let username= payload.username;
    let password= payload.password;
    
    if (username != null && password != null) {
        let user = await new userBuss().getAuthenticated(username);
        if(!user) return 'email or password is wrong';
    }

     }

    async getOneUser(_id:string):Promise<IUserModel>{
        let user=await new MainUser().getOneUser(_id);
        if(user==null){
            throw "some thing went Wrong"
        }
        return user;
    }
    async updatePassword(_id:string,password:string):Promise<any>{
        return await new MainUser().updatepassword(_id,password)
    }
    async UpdateStatus(_id:string):Promise<any>{
        return await new MainUser().consaltantActivation(_id);
    }
    async reGenrateCode(_id:string,code:string){
            return await new MainUser().consaltantNewCode(_id,code);
    }
    async forgotpasswordLinkgenration(_id:string,hash:string){
        return await new MainUser().forgetPassword(_id,hash);
    }
    async IncreementLogin(_id:string,logInTime:string){
        return await new MainUser().IncreementLogin(_id,logInTime);
    }
        
}
