import  {TechSkillsSchema}  from "../ML/CTechnicalSkills" 
import {ITechSkilss} from "../DL/CTechnicalSkills"
export class MainTechnicaleSkill{
    constructor(){

    }
    getTechnicaleSkill(_id:string){
       return TechSkillsSchema.findById(_id);
    }
    savetechnicaleSkill(tecskill:ITechSkilss){
        return new TechSkillsSchema(tecskill).save();
    }
    updateTechnicaleSkills(tecskill:ITechSkilss){
        return TechSkillsSchema.findByIdAndUpdate(tecskill._id,tecskill,{new:true})
    }
    deletTechnicaleSKill(_id:string){
        return TechSkillsSchema.findByIdAndDelete(_id)
    }
    getcotsTechnicalelist(){
        return TechSkillsSchema.find();
    }
    getcotstechnicallistByName(Cots_Function:string){
        return TechSkillsSchema.find({Tech_Function:Cots_Function});
    }
}