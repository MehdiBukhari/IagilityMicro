import {IAPPLICATIONS} from "../DL/IAPPLICATIONS"
import {MainApplication} from "../DC/ApplicationController";
export class ApplicationBuss{
    constructor(){

    }
    async getApplication(_id:string):Promise<IAPPLICATIONS>{
        let application=await new MainApplication().getApplication(_id);
         if(application===null)
         throw 'cots doest not exits'
         return application;
    }
    async saveApplication(application:IAPPLICATIONS):Promise<IAPPLICATIONS>{
        let new_Application:IAPPLICATIONS=await new MainApplication().saveApplication(application);
        return new_Application
    }
    async updateApplication(application:IAPPLICATIONS):Promise<IAPPLICATIONS>{
        let Update_application=await new MainApplication().updateApplication(application);
        if(Update_application===null)
         throw 'Application not updated g'+application._id;
          return Update_application
    }
    async deleteApplication(_id:string){
        return await new MainApplication().deletApplication(_id);
    }
    async getcotsList():Promise<IAPPLICATIONS[]>{
        let application:IAPPLICATIONS[]=await new MainApplication().getApplicationlist();
        return application
    }
    async getApplicationByJobId(JOBID:string):Promise<IAPPLICATIONS[]>{
        let Applications:IAPPLICATIONS[]=await new MainApplication().getApplicationByJobID(JOBID);
        return Applications
    }
}