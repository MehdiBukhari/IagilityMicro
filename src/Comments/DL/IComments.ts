import { Document } from "mongoose";
import {IUserModel} from "../../User/DL/user"
export interface IComments extends Document{
    _id:string,
    CommentText:string,
    displayingId:IUserModel["_id"]
    CommetingPersonId:IUserModel["_id"]
    createdAt:string
    updatedAt:string
    updateby:string
    createdby:string
}