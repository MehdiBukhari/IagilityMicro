import { Document } from "mongoose";
import {IUserModel} from "../../User/DL/user"
import { IJOB } from "../../Job/DL/IJOB";
import { IADMIN } from "../../admin/DL/IAdmin";
import { Iconsaltants } from "../../consaltant/DL/consaltants";
export interface ISUBMISSIONS extends Document{
    _id:string,
    ConsaltantId:Iconsaltants['_id']
    JOBID:IJOB["_id"]
    adminId:IUserModel['_id']
    createdAt:string
    updatedAt:string
    updateby:string
    createdby:string
}