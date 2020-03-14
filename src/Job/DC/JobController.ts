import  {JOBSchema}  from "../ML/Job" 
import {IJOB} from "../DL/IJOB"
export class MainJOB{
    constructor(){

    }
    getJob(_id:string){
       return JOBSchema.findById(_id);
    }
    saveJOb(job:IJOB){
        return new JOBSchema(job).save();
    }
    updateJob(job:IJOB){
        return JOBSchema.findByIdAndUpdate(job._id,job,{new:true})
    }
    deletjob(_id:string){
        return JOBSchema.findByIdAndDelete(_id)
    }
    getjoblist(){
        return JOBSchema.find();
    }
    getClientsJob(ClientID:string){
        return JOBSchema.find({ClientID:ClientID});
    }
}