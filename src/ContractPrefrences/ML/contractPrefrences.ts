import  { Schema, model } from "mongoose";
import { IContractPrefrences } from "../DL/IContractPrefrences";
const ContractPrencesSchema=new Schema({
    Quesation:{type:String},
    Answer:{type:String},
    JOBID:{type:Schema.Types.ObjectId,ref:"job"},
    userId:{type:Schema.Types.ObjectId,ref:"User"},
    updateby:{type:Schema.Types.ObjectId,ref:"User"},
    createdby:{type:Schema.Types.ObjectId,ref:"User"},
},{timestamps:true})
export const ContractPrefrncesSchema=model<IContractPrefrences>('ContractPrencesSchema',ContractPrencesSchema)