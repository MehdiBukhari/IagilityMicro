import express from "express";
import {techBuss} from "../BL/TechnicaleSkill.buss"
import { ITechSkilss } from "../DL/CTechnicalSkills";
export class TechnicalSkillPresention{
    router:express.Router
    constructor(){
            this.router=express.Router();
            this.routes();
    }
    routes(){
        this.router.get('/technicalskills',async (req,res)=>{
                let Technicalllist=await new techBuss().gettechnicalskillList();
                if(Technicalllist===null){
                    res.send("Some thing Went Wrong");
                 }else{
                    res.status(200).json({
                        Technicalllist
                    });
                 }
        });
        this.router.post('/tecnicalskilss',async (req,res)=>{
                let newcots:ITechSkilss=req.body.tech;
               
                 let response:ITechSkilss=await new techBuss().savetechnicalskill(newcots)
                 if(response===null){
                    res.send("Some thing Went Wrong");
                 }else{
                    res.status(200).json({
                        response
                    });
                 }
                
        });
        this.router.put('/UpdateTechskills',async(req,res)=>{
            let newcots:ITechSkilss=req.body.tech;
          
            let response=await new techBuss().updateITechSkilss(newcots);
            if(response===null){
                res.send("Some thing Went Wrong");
             }else{
                res.status(200).json({
                    response
                });
             }
        });
        this.router.post('/findOnetecskill',async(req,res)=>{
                let id:string=req.body.techId;
                if(id!=null){
                        let result:ITechSkilss=await new techBuss().getTechskills(id);
                        if(result===null){
                                res.send('some thing went worng')
                        }else{
                                res.status(200).send(result)
                        }
                }else{

                }
        });
        this.router.post('/skilssbyName',async(req,res)=>{
            let cotname:string=req.body.skillname;
            if(cotname!=null){
                    let result=await new techBuss().getcotsListbyname(cotname);
                    if(result===null){
                            res.send('some thing went worng')
                    }else{
                            res.status(200).send(result)
                    }
            }else{

            }
    });
        this.router.delete('/RemoveSkills',async(req,res)=>{
                let id:string=req.body.skillid
                if(id!=null){
                    let result:any=await new techBuss().delettechnicalskill(id);
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
export const techRouts = new TechnicalSkillPresention().router