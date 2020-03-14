import  { Schema, model } from "mongoose";
import { IACTIVITYFEED } from "../DL/IACTIVITYFEED";
const ActivitySchema=new Schema({
    EventName:{type:String},
    EventExcutorId:{type:Schema.Types.ObjectId,ref:"User"},
    userId:{type:Schema.Types.ObjectId,ref:"User"},
    updateby:{type:Schema.Types.ObjectId,ref:"User"},
    createdby:{type:Schema.Types.ObjectId,ref:"User"},
},{timestamps:true})
export const IActivitySchema=model<IACTIVITYFEED>('ActivitySchema',ActivitySchema)