import { Document } from "mongoose";
import {IUserModel} from "../../User/DL/user"
export interface IJOB extends Document{
    _id:string,
    title:string,
    JobType:string,
    Duration:string,
    careerLevel:string,
    NoofPostions:string,
    JobCategory:string,
    industry:string,
    Projecttype:string,
    JobResponsibilites:string,
    ApprovelStatus:string
    DisArrovalStatus:{
        DisapprovalReasone:string,
        DisapprovingPersonId:IUserModel["_id"]
        DisapprovalTime:string,
    }
    ClientID:IUserModel["_id"]
    createdAt:string
    updatedAt:string
    updateby:string
    createdby:string
}