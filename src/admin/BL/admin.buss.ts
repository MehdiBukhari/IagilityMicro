import {IADMIN} from "../DL/IAdmin"
import {MainAdmin} from "../DC/AdminController";
export class AdminBuss{
    constructor(){

    }
    async getadmin(_id:string):Promise<IADMIN>{
        let admin=await new MainAdmin().getAdmin(_id);
         if(admin===null)
         throw 'cots doest not exits'
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
    
}