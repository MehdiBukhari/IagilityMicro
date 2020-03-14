import  { Schema, model } from "mongoose";
import { IADMIN } from "../DL/IAdmin";
const IADMINSchema=new Schema({
    FirstName:{type:String},
    LastName:{type:String},
    Desgination:{type:String},
    cell:{type:String},
    JoinDate:{type:String},
    adress:{type:String},
    userId:{type:Schema.Types.ObjectId,ref:"User"},
    updateby:{type:Schema.Types.ObjectId,ref:"User"},
    createdby:{type:Schema.Types.ObjectId,ref:"User"},
},{timestamps:true})
export const ADMINSchema=model<IADMIN>('IADMINSchema',IADMINSchema)