import {Document} from "mongoose";
export interface ITechSkilss extends Document{
    _id:string
    Tech_Function:string
    Tech_Sub_Function:string
    createdAt:string
    updatedAt:string
}