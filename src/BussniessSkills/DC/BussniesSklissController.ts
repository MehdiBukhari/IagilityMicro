import  {BussniessSkills}  from "../ML/CBussniessSkills" 
import {IBussniessSkils} from "../DL/CBussniessSkills"
export class MainBussniessSkill{
    constructor(){

    }
    getBuniessSkill(_id:string){
       return BussniessSkills.findById(_id);
    }
    saveBussniessSkill(bussniessSkill:IBussniessSkils){
        return new BussniessSkills(bussniessSkill).save();
    }
    updateBussniessSkill(bussniessSkill:IBussniessSkils){
        return BussniessSkills.findByIdAndUpdate(bussniessSkill._id,bussniessSkill,{new:true})
    }
    deleteBussniessSkill(_id:string){
        return BussniessSkills.findByIdAndDelete(_id)
    }
    getBussniesskillList(){
        return BussniessSkills.find();
    }
}