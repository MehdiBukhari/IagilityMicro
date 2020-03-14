import  { Schema, model } from "mongoose";
import { INOTES } from "../DL/INOTES";
const NOTEsSchema=new Schema({
    CommentText:{type:String},
    displayingId:{type:Schema.Types.ObjectId,ref:"User"},
    CommetingPersonId:{type:Schema.Types.ObjectId,ref:"User"},
    updateby:{type:Schema.Types.ObjectId,ref:"User"},
    createdby:{type:Schema.Types.ObjectId,ref:"User"},
},{timestamps:true})
export const NoteSchema=model<INOTES>('Notes',NOTEsSchema)