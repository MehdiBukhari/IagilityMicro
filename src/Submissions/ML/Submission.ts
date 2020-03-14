import  { Schema, model } from "mongoose";
import { ISUBMISSIONS } from "../DL/ISUBMISSIONS";
const SubmissionSchema=new Schema({
    ConsaltantId:{type:Schema.Types.ObjectId,ref:"consultant"},
    JOBID:{type:Schema.Types.ObjectId,ref:"job"},
    adminId:{type:Schema.Types.ObjectId,ref:"User"},
    updateby:{type:Schema.Types.ObjectId,ref:"User"},
    createdby:{type:Schema.Types.ObjectId,ref:"User"},
},{timestamps:true})
export const subSchema=model<ISUBMISSIONS>('Notes',SubmissionSchema)