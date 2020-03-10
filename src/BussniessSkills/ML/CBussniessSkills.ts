import mongoose from "mongoose";
import { IBussniessSkils } from "../DL/CBussniessSkills";
const CBussniessSkillsSchema=new mongoose.Schema({
    Bussniess_skill_title:{type:String,required:true,unique:true}
},{timestamps:true})
export const BussniessSkills=mongoose.model<IBussniessSkils>('Cbussniessskill',CBussniessSkillsSchema)