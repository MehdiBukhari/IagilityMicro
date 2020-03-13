import { Document } from "mongoose";
import {IUserModel} from "../../User/DL/user"
export interface IACTIVITYFEED extends Document{
    _id:string,
    EventName:string,
    EventExcutorId:IUserModel["_id"]
    createdAt:string
    updatedAt:string
    updateby:string
    createdby:string
}