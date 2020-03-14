import  { Schema, model } from "mongoose";
import { IJOB } from "../DL/IJOB";
const JOBSSchema=new Schema({
    title:{type:String},
    JobType:{type:String},
    Duration:{type:String},
    careerLevel:{type:String},
    NoofPostions:{type:String},
    JobCategory:{type:String},
    industry:{type:String},
    Projecttype:{type:String},
    JobResponsibilites:{type:String},
    ApprovelStatus:{type:String},
    DisArrovalStatus:{
        DisapprovalReasone:{type:String},
        DisapprovingPersonId:{type:Schema.Types.ObjectId,ref:"User"},
        DisapprovalTime:{type:String},
    },
    ClientID:{type:Schema.Types.ObjectId,ref:"User"},
    updateby:{type:Schema.Types.ObjectId,ref:"User"},
    createdby:{type:Schema.Types.ObjectId,ref:"User"},
},{timestamps:true})
export const JOBSchema=model<IJOB>('job',JOBSSchema)