import mongoose from "mongoose";
import { ITechSkilss } from "../DL/CTechnicalSkills";
const CTechSkillsShema=new mongoose.Schema({
    Tech_Function:{type:String,required:true},
    Tech_Sub_Function:{type:String,required:true}
},{timestamps:true})
export const TechSkillsSchema=mongoose.model<ITechSkilss>('CTechSkill',CTechSkillsShema)