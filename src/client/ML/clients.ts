import  { Schema, model } from "mongoose";
import { Iclient } from "../DL/Iclient";
const ICleintSchema=new Schema({
    name:{type:String},
    Desgination:{type:String},
    bussniessEmail:{type:String},
    cell:{type:String},
    officePhone:{type:String},
    JoinDate:{type:String},
    adress:{type:String},
    ApprovelStatus:{type:String},
    DisArrovalStatus:{
        DisapprovalReasone:{type:String},
        DisapprovingPersonId:{type:Schema.Types.ObjectId,ref:"User"},
        DisapprovalTime:{type:String},
    },
    userId:{type:Schema.Types.ObjectId,ref:"User"},
    updateby:{type:Schema.Types.ObjectId,ref:"User"},
    createdby:{type:Schema.Types.ObjectId,ref:"User"},
},{timestamps:true})
export const CleintSchema=model<Iclient>('CleintSchema',ICleintSchema)