import EventManager from "rabbitmq-event-manager";
//import fileupload from "express-fileupload";
import {DbMongo} from "./DL/Services/mongodb.conn";
import bodyParser from "body-parser";
import path from"path";
import cors from "cors";
import bcrypt from "bcrypt";
import { userBuss } from "./BL/User.Buss";
import { IUserModel } from "./DL/Models/IUser";
import  mongoose  from "mongoose";
function start() {
    const eventManager = new EventManager({
        url: 'amqp://localhost',
        application: 'User Registration Micro Services',
    })
    eventManager.on('SAVEUSER', async (payload: any) => {
        let newuser:IUserModel=payload.user;
         let userResponse=await new userBuss().singUpConsaltan(newuser);
          if(userResponse!='some thing went Wrong'){
              eventManager.emit('New_USER_Created',userResponse);
          }  
        console.log(`MICRO APP micro-user-registerede`);
        console.log('payload :', payload);
    });
    mongoose.connection.openUri('mongodb://localhost:27017/iaglitymicro',{useNewUrlParser: true });
mongoose.connection.on('connected', ()=>{
    console.log("Connected to DB");
});
mongoose.connection.on('error', (err)=>{
    if(err){
        console.log(`Error while connecting to DB ${err}`);
    }
});

}
start();