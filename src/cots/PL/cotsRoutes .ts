import express from "express";
import {cotBuss} from "../../../BussniessLogicLayer/cots.buss"
import { Icots } from "../../../DataAccessLayer/Models/cots";
export class cotsPresention{
    router:express.Router
    constructor(){
            this.router=express.Router();
            this.routes();
    }
    routes(){
        this.router.get('/cots',async (req,res)=>{
                let cots=await new cotBuss().getcotsList();
                if(cots===null){
                    res.send("Some thing Went Wrong");
                 }else{
                    res.status(200).json({
                        cots
                    });
                 }
        });
        this.router.post('/cots',async (req,res)=>{
                let newcots:Icots=req.body.cots;
               
                 let response:Icots=await new cotBuss().savecots(newcots)
                 if(response===null){
                    res.send("Some thing Went Wrong");
                 }else{
                    res.status(200).json({
                        response
                    });
                 }
                
        });
        this.router.put('/Upadatcots',async(req,res)=>{
            let newcots:Icots=req.body.cots;
          
            let response=await new cotBuss().updatecots(newcots);
            if(response===null){
                res.send("Some thing Went Wrong");
             }else{
                res.status(200).json({
                    response
                });
             }
        });
        this.router.get('/findOnecots',async(req,res)=>{
                let id:string=req.body.cotId;
                if(id!=null){
                        let result:Icots=await new cotBuss().getcots(id);
                        if(result===null){
                                res.send('some thing went worng')
                        }else{
                                res.status(200).send(result)
                        }
                }else{

                }
        });
        this.router.post('/cotbyName',async(req,res)=>{
            let cotname:string=req.body.cotname;
            if(cotname!=null){
                    let result=await new cotBuss().getcotsListbyname(cotname);
                    if(result===null){
                            res.send('some thing went worng')
                    }else{
                            res.status(200).send(result)
                    }
            }else{

            }
    });
        this.router.delete('/Removecots',async(req,res)=>{
                let id:string=req.body.cotId
                if(id!=null){
                    let result:any=await new cotBuss().deletcots(id);
                    if(result===null){
                        res.send("Some thing Went Wrong");   
                    }else{
                        const response = {
                            message: "Cots Skill successfully deleted"
                        };
                        return res.status(200).send(response);
                    }
                }else{
                    const response = {
                        message: "cots skill Id Missing"
                    };
                    return res.status(200).send(response); 
                }
        });
    }

}
export const cotsRouts = new cotsPresention().router