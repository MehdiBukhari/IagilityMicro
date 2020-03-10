import {Document} from "mongoose";
export interface IBussniessSkils extends Document{
    _id:string
    Bussniess_skill_title:string
    createdAt:string
    updatedAt:string
}