import { Document } from "mongoose";
import {IUserModel} from "../../User/DL/user"
import { IJOB } from "../../Job/DL/IJOB";
export interface IContractPrefrences extends Document{
    _id:string,
    Quesation:string,
    Answer:string,
    JOBID:IJOB["_id"]
    createdAt:string
    updatedAt:string
    updateby:string
    createdby:string
}