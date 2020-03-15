import  {subSchema}  from "../ML/Submission" 
import {ISUBMISSIONS} from "../DL/ISUBMISSIONS"
export class MainSubmisson{
    constructor(){

    }
    getSubmission(_id:string){
       return subSchema.findById(_id);
    }
    saveSubmission(submission:ISUBMISSIONS){
        return new subSchema(submission).save();
    }
    updateSubmission(submission:ISUBMISSIONS){
        return subSchema.findByIdAndUpdate(submission._id,submission,{new:true})
    }
    deletSubmission(_id:string){
        return subSchema.findByIdAndDelete(_id)
    }
    getSubmissionSKill(){
        return subSchema.find();
    }
    getSubmissionSKillbyjob(JOBID:string){
        return subSchema.find({JOBID:JOBID});
    }
}