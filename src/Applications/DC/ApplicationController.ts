import  {IAPPLICATIONSSchema}  from "../ML/application" 
import {IAPPLICATIONS} from "../DL/IAPPLICATIONS"
export class MainApplication{
    constructor(){

    }
    getApplication(_id:string){
       return IAPPLICATIONSSchema.findById(_id);
    }
    saveApplication(application:IAPPLICATIONS){
        return new IAPPLICATIONSSchema(application).save();
    }
    updateApplication(application:IAPPLICATIONS){
        return IAPPLICATIONSSchema.findByIdAndUpdate(application._id,application,{new:true})
    }
    deletApplication(_id:string){
        return IAPPLICATIONSSchema.findByIdAndDelete(_id)
    }
    getApplicationlist(){
        return IAPPLICATIONSSchema.find();
    }
    getApplicationByJobID(JOBID:string){
        return IAPPLICATIONSSchema.find({JOBID:JOBID});
    }
}