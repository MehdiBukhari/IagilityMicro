import  {TechSkillsSchema}  from "../ML/CTechnicalSkills" 
import {ITechSkilss} from "../DL/CTechnicalSkills"
export class MainTechnicaleSkill{
    constructor(){

    }
    getTechnicalSkill(_id:string){
       return TechSkillsSchema.findById(_id);
    }
    savetechnicalSkill(tecskill:ITechSkilss){
        return new TechSkillsSchema(tecskill).save();
    }
    updateTechnicalSkills(tecskill:ITechSkilss){
        return TechSkillsSchema.findByIdAndUpdate(tecskill._id,tecskill,{new:true})
    }
    deletTechnicalSKill(_id:string){
        return TechSkillsSchema.findByIdAndDelete(_id)
    }
    getTechnicalSkillList(){
        return TechSkillsSchema.find();
    }
    getTechnicalSkillByName(Cots_Function:string){
        return TechSkillsSchema.find({Tech_Function:Cots_Function});
    }
}