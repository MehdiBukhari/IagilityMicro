import {IBussniessSkils} from "../DL/CBussniessSkills"
import {MainBussniessSkill} from "../DC/BussniesSklissController";
export class BussniessBuss{
    constructor(){

    }
    async getbussniesskill(_id:string):Promise<IBussniessSkils>{
        let bussniesskill=await new MainBussniessSkill().getBuniessSkill(_id);
         if(bussniesskill===null)
         throw 'bussnies skill doest not exits'
         return bussniesskill;
    }
    async savebussniesskill(bussniesskill:IBussniessSkils):Promise<IBussniessSkils>{
        let new_bussniesskill:IBussniessSkils=await new MainBussniessSkill().saveBussniessSkill(bussniesskill);
        return new_bussniesskill
    }
    async updatebussniesskill(bussniesskill:IBussniessSkils):Promise<IBussniessSkils>{
        let update_Busnies_Skill=await new MainBussniessSkill().updateBussniessSkill(bussniesskill);
        if(update_Busnies_Skill===null)
         throw 'category not updated g'+bussniesskill._id;
          return update_Busnies_Skill
    }
    async deletebussniesskill(_id:string){
        return await new MainBussniessSkill().deleteBussniessSkill(_id);
    }
    async getbussniesskillList():Promise<IBussniessSkils[]>{
        let bussniesskill:IBussniessSkils[]=await new MainBussniessSkill().getBussniesskillList();
        return bussniesskill
    }
}