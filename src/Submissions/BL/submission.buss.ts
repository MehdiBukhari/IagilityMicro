import {ISUBMISSIONS} from "../DL/ISUBMISSIONS"
import {MainSubmisson} from "../DC/SubmissionCOntroller";
export class SubmissionBuss{
    constructor(){

    }
    async getSUbmission(_id:string):Promise<ISUBMISSIONS>{
        let submission=await new MainSubmisson().getSubmission(_id);
         if(submission===null)
         throw 'cots doest not exits'
         return submission;
    }
    async savesubmission(submission:ISUBMISSIONS):Promise<ISUBMISSIONS>{
        let new_submission:ISUBMISSIONS=await new MainSubmisson().saveSubmissionn(submission);
        return new_submission
    }
    async updatesubmission(submission:ISUBMISSIONS):Promise<ISUBMISSIONS>{
        let update_submisson=await new MainSubmisson().updateSubmission(submission);
        if(update_submisson===null)
         throw 'category not updated g'+submission._id;
          return update_submisson
    }
    async deleteSubmission(_id:string){
        return await new MainSubmisson().deletSubmission(_id);
    }
    async getSubmissionList():Promise<ISUBMISSIONS[]>{
        let submission:ISUBMISSIONS[]=await new MainSubmisson().getSubmissionSKill();
        return submission
    }
    async getSublistbyjob(JOBID:string):Promise<ISUBMISSIONS[]>{
        let submissions:ISUBMISSIONS[]=await new MainSubmisson().getSubmissionSKillbyjob(JOBID);
        return submissions
    }
}