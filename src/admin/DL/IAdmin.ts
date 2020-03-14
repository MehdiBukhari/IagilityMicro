import { Document } from "mongoose";
import {IUserModel} from "../../User/DL/user"
import { Interface } from "readline";
export interface IADMIN extends Document{
    _id:string
    FirstName:string,
    LastName:string,
    Desgination:string,
    cell:string,
    JoinDate:string,
    adress:string,
    userId:IUserModel["_id"]
    createdAt:string
    updatedAt:string
    updateby:string
    createdby:string
}