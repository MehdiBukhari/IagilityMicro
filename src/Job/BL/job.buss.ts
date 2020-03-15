import {IJOB} from "../DL/IJOB"
import {MainJOB} from "../DC/JobController";
export class JobBuss{
    constructor(){

    }
    async getJob(_id:string):Promise<IJOB>{
        let jobs=await new MainJOB().getJob(_id);
         if(jobs===null)
         throw 'cots doest not exits'
         return jobs;
    }
    async saveJob(jobs:IJOB):Promise<IJOB>{
        let new_Job:IJOB=await new MainJOB().saveJOb(jobs);
        return new_Job
    }
    async updateJob(job:IJOB):Promise<IJOB>{
        let update_job=await new MainJOB().updateJob(job);
        if(update_job===null)
         throw 'category not updated g'+job._id;
          return update_job
    }
    async deleteJob(_id:string){
        return await new MainJOB().deletjob(_id);
    }
    async getJobList():Promise<IJOB[]>{
        let jobs:IJOB[]=await new MainJOB().getjoblist();
        return jobs
    }
    async getclientJobs(ClientID:string):Promise<IJOB[]>{
        let jobs:IJOB[]=await new MainJOB().getClientsJob(ClientID);
        return jobs
    }
}