import {IADMIN} from "../DL/IAdmin"
import {MainAdmin} from "../DC/AdminController";
import { IUserModel } from "../../User/DL/user";
import { MainUser } from "../../User/DC/userController";
export class AdminBuss{
    constructor(){

    }
    async getadmin(_id:string):Promise<IADMIN>{
        let admin=await new MainAdmin().getAdmin(_id);
         if(admin===null)
         throw 'Admin doest not exits'
         return admin;
    }
    async saveadmin(admin:IADMIN):Promise<IADMIN>{
        let new_admin:IADMIN=await new MainAdmin().saveAdmin(admin);
        return new_admin
    }
    async updateAdmin(admin:IADMIN):Promise<IADMIN>{
        let update_admin=await new MainAdmin().updateAdmin(admin);
        if(update_admin===null)
         throw 'category not updated g'+admin._id;
          return update_admin
    }
    async deletadmin(_id:string){
        return await new MainAdmin().deletAdmin(_id);
    }
    async getadminList():Promise<IADMIN[]>{
        let admin:IADMIN[]=await new MainAdmin().getAdminslist();
        return admin
    }
    async CreateAdmin(user:IUserModel,admin:IADMIN):Promise<any>{
        let userReponse=await new MainUser().Saveuser(user);
        console.log(user);
        if(userReponse!==null){
            admin.userId=userReponse._id
            let adminResponse=await new MainAdmin().saveAdmin(admin);
            if(adminResponse!=null){
                let response={
                    userReponse,
                    adminResponse
                }
                return response
            }else{
                    return "some thing went wrong"
            }
        }else{
            return "some thing went wrong";
        }
      
    }
}