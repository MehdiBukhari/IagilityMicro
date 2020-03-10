import {ITechSkilss} from "../DL/CTechnicalSkills"
import {MainTechnicaleSkill} from "../DC/TechnicaleSkillController";
export class techBuss{
    constructor(){

    }
    async getTechskills(_id:string):Promise<ITechSkilss>{
        let technicalskill=await new MainTechnicaleSkill().getTechnicaleSkill(_id);
         if(technicalskill===null)
         throw 'cots doest not exits'
         return technicalskill;
    }
    async savetechnicalskill(technicalskill:ITechSkilss):Promise<ITechSkilss>{
        let new_technicalskill:ITechSkilss=await new MainTechnicaleSkill().savetechnicaleSkill(technicalskill);
        return new_technicalskill
    }
    async updateITechSkilss(technicalskill:ITechSkilss):Promise<ITechSkilss>{
        let update_technicalskill=await new MainTechnicaleSkill().updateTechnicaleSkills(technicalskill);
        if(update_technicalskill===null)
         throw 'category not updated g'+ technicalskill._id;
          return update_technicalskill
    }
    async delettechnicalskill(_id:string){
        return await new MainTechnicaleSkill().deletTechnicaleSKill(_id);
    }
    async gettechnicalskillList():Promise<ITechSkilss[]>{
        let cots:ITechSkilss[]=await new MainTechnicaleSkill().getcotsTechnicalelist();
        return cots
    }
    async getcotsListbyname(cotMain:string):Promise<ITechSkilss[]>{
        let cots:ITechSkilss[]=await new MainTechnicaleSkill().getcotstechnicallistByName(cotMain);
        return cots
    }
}