import express from "express";
import {BussniessBuss} from "../BL/bussniesskill.buss"
import { IBussniessSkils } from "../DL/CBussniessSkills";
export class BuniessPresention{
    router:express.Router
    constructor(){
            this.router=express.Router();
            this.routes();
    }
    routes(){
        this.router.get('/BussniesSkilss',async (req,res)=>{
                let BussniessSkills=await new BussniessBuss().getbussniesskillList();
                if(BussniessSkills===null){
                    res.send("Some thing Went Wrong");
                 }else{
                    res.status(200).json({
                        BussniessSkills
                    });
                 }
        });
        this.router.post('/BussniesSkill',async (req,res)=>{
                let newBussniesSkil:IBussniessSkils=req.body.BussniesSkill;
               
                 let response:IBussniessSkils=await new BussniessBuss().savebussniesskill(newBussniesSkil)
                 if(response===null){
                    res.send("Some thing Went Wrong");
                 }else{
                    res.status(200).json({
                        response
                    });
                 }
                
        });
        this.router.put('/UpadateBusniessSkill',async(req,res)=>{
            let newBussniesSkil:IBussniessSkils=req.body.BussniesSkill;
          
            let response=await new BussniessBuss().updatebussniesskill(newBussniesSkil);
            if(response===null){
                res.send("Some thing Went Wrong");
             }else{
                res.status(200).json({
                    response
                });
             }
        });
        this.router.get('/findOneBuniessSkill',async(req,res)=>{
                let id:string=req.body.bussId;
                if(id!=null){
                        let result:IBussniessSkils=await new BussniessBuss().getbussniesskill(id);
                        if(result===null){
                                res.send('some thing went worng')
                        }else{
                                res.status(200).send(result)
                        }
                }else{

                }
        });
        this.router.delete('/RemoveBuniessSkill',async(req,res)=>{
                let id:string=req.body.bussId
                if(id!=null){
                    let result:any=await new BussniessBuss().deletebussniesskill(id);
                    if(result===null){
                        res.send("Some thing Went Wrong");   
                    }else{
                        const response = {
                            message: "Buniess Skill successfully deleted"
                        };
                        return res.status(200).send(response);
                    }
                }else{
                    const response = {
                        message: "Buniess skill Id Missing"
                    };
                    return res.status(200).send(response); 
                }
        });
    }

}
export const BuniessRoutes = new BuniessPresention().router