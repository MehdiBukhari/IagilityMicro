import {createTransport} from "nodemailer";
//import "./config";
import { IUserModel } from "../User/DL/user";
export class Mail{
    transporter:any
    mailOptions:any 
    constructor(to:string,subject:string,text?:string,html?:string){
        this.transporter = createTransport({
          host: 'mail.maservices-ltd.com',
          port: 587,
            auth: {
              user: "development@maservices-ltd.com",
              pass: "Agile@ad"
            },
            tls: {rejectUnauthorized: false},
            debug:true
    });
      this.mailOptions ={
        from: "development@maservices-ltd.com",
        to: to,
        subject: subject,
        text: text,
        attachments: [
          {
            filename: 'image001.png',
            path: './src/Public/mailtemp/activationCode/activationCode_files/image001.png',
            cid: '001'
          },
          {
            filename: 'image002.png',
            path: './src/Public/mailtemp/activationCode/activationCode_files/image002.jpg',
            cid: '002'
          },
          {
            filename: 'image003.png',
            path: './src/Public/mailtemp/activationCode/activationCode_files/image003.png',
            cid: '003'
          },
          {
            filename: 'image004.png',
            path: './src/Public/mailtemp/activationCode/activationCode_files/image004.png',
            cid: '004'
          },
          {
            filename: 'image005.png',
            path: './src/Public/mailtemp/activationCode/activationCode_files/image005.png',
            cid: '005'
          },
          {
            filename: 'image006.png',
            path: './src/Public/mailtemp/activationCode/activationCode_files/image006.png',
            cid: '006'
          },
          {
            filename: 'image007.png',
            path: './src/Public/mailtemp/activationCode/activationCode_files/image007.png',
            cid: '007'
          }
        ],
        html: html
      }

  } 
  sendMail(){
      this.transporter.sendMail(this.mailOptions);
  }
}