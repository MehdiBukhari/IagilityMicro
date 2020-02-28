
import {userSchema} from "../MongoCollection/UserCollection";
import {IUserModel} from "../Models/IUser";
import {Encrpation} from "../../utils/encrpation"

export class MainUser{
    constructor(){

    }
    getUser(username:string){
        return userSchema.findOne({username:username});    
   }

   Saveuser(user:IUserModel){
       return new userSchema(user).save();
   }
   Updateuser(user:IUserModel){
       return userSchema.findByIdAndUpdate(user._id,user,{new:true})
   }
   getOneUser(_id:string){
       return userSchema.findById(_id);
   }
   updatepassword(_id:string,password:string){
       return userSchema.updateOne({_id:_id},{$set:{'password':password}})
   }
   consaltantActivation(_id:string){
       return userSchema.updateOne({_id:_id},{$set:{'status':'Active','activationCodes':[]}})
   }
   consaltantNewCode(_id:string,code:string){  
       return userSchema.updateOne({_id:_id},{$push:{'activationCodes':{'code':code}}})    
   }
   forgetPassword(_id:string,hash:string){
    return userSchema.updateOne({_id:_id},{$set:{'forgetpasswordstring':hash}})
   } 
   IncreementLogin(_id:string,logInTime:string){
       return userSchema.updateOne({_id:_id},{$set:{'lastlogin':logInTime},$inc:{'loginCount':1}})
   }
}

  
