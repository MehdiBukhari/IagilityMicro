import { Document } from "mongoose";
export interface IUserModel extends Document {
  _id: string
  username: string
  password: string
  loginAttempts: number
  lockUntil: number
  email: string
  permission: string
  activationCodes: [
    {
      code: string
    }
  ]
  userType: string
  status: string
  forgetpasswordstring: string
  lastlogin: string
  loginCount: any

}