import  { Schema, model } from "mongoose";
import { IAPPLICATIONS } from "../DL/IAPPLICATIONS";
const ApplicationSchema=new Schema({
    ConsaltantId:{type:Schema.Types.ObjectId,ref:"consultant"},
    JOBID:{type:Schema.Types.ObjectId,ref:"job"},
    userId:{type:Schema.Types.ObjectId,ref:"User"},
    updateby:{type:Schema.Types.ObjectId,ref:"User"},
    createdby:{type:Schema.Types.ObjectId,ref:"User"},
},{timestamps:true})
export const IAPPLICATIONSSchema=model<IAPPLICATIONS>('Application',ApplicationSchema)