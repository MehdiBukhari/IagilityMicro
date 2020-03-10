import mongoose from "mongoose"
import { Icots } from "../DL/cots";
const cotsSchema=new mongoose.Schema({
    Cots_Function:{type:String,required:true},
    Cots_Sub_Function:{type:String,required:true}
},{timestamps:true})
export const CotsSchema=mongoose.model<Icots>('cots',cotsSchema);