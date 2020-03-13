import { Document } from "mongoose";
import {IUserModel} from "../../User/DL/user"
import { IJOB } from "../../Job/DL/IJOB";
import { IADMIN } from "../../admin/DL/IAdmin";
import { Iconsaltants } from "src/consaltant/DL/consaltants";
export interface INOTES extends Document{
    _id:string,
    CommentText:string,
    displayingId:IUserModel["_id"]
    CommetingPersonId:IUserModel["_id"]
    createdAt:string
    updatedAt:string
    updateby:string
    createdby:string
}