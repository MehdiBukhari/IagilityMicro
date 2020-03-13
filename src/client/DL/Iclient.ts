import { Document } from "mongoose";
import {IUserModel} from "../../User/DL/user"
import { Interface } from "readline";
export interface Iclient extends Document{
    _id:string
    name:string,
    Desgination:string,
    bussniessEmail:string,
    cell:string,
    officePhone:string,
    JoinDate:string,
    adress:string,
    ApprovelStatus:string,
    DisArrovalStatus:{
        DisapprovalReasone:string,
        DisapprovingPersonId:IUserModel["_id"]
        DisapprovalTime:string,
    },
    userId:IUserModel["_id"]
    createdAt:string
    updatedAt:string
    updateby:string
    createdby:string
}