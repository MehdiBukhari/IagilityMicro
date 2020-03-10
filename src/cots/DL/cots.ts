import {Document} from "mongoose";
export interface Icots extends Document{
    _id:string
    Cots_Function:string
    Cots_Sub_Function:string
    createdAt:string
    updatedAt:string
}