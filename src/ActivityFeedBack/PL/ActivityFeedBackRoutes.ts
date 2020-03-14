import express from "express";
import {ActivityFeddBuss} from "../BL/ActivityFeedBack.buss"
import { IACTIVITYFEED } from "../DL/IACTIVITYFEED";
export class ActivityFeedPresentation{
    router:express.Router
    constructor(){
            this.router=express.Router();
            this.routes();
    }
    routes(){
        this.router.get('/ActivityFeedBack',async (req,res)=>{
                let ActivityFeedBack=await new ActivityFeddBuss().getActivityFeedList();
                if(ActivityFeedBack===null){
                    res.send("Some thing Went Wrong");
                 }else{
                    res.status(200).json({
                        ActivityFeedBack
                    });
                 }
        });
        this.router.post('/ActivityFeed',async (req,res)=>{
                let newActivityFeed:IACTIVITYFEED=req.body.ActivityFeedBack;
               
                 let response:IACTIVITYFEED=await new ActivityFeddBuss().saveActivityFeed(newActivityFeed)
                 if(response===null){
                    res.send("Some thing Went Wrong");
                 }else{
                    res.status(200).json({
                        response
                    });
                 }
                
        });
        this.router.put('/UpadateActivityFeed',async(req,res)=>{
            let newActivityFeed:IACTIVITYFEED=req.body.ActivityFeedBack;
          
            let response=await new ActivityFeddBuss().updateActivityFeed(newActivityFeed);
            if(response===null){
                res.send("Some thing Went Wrong");
             }else{
                res.status(200).json({
                    response
                });
             }
        });
        this.router.get('/findOneActivityFeed',async(req,res)=>{
                let id:string=req.body.ActivityFeedId;
                if(id!=null){
                        let result:IACTIVITYFEED=await new ActivityFeddBuss().getActivityFeedBack(id);
                        if(result===null){
                                res.send('some thing went worng')
                        }else{
                                res.status(200).send(result)
                        }
                }else{

                }
        });
        this.router.delete('/RemoveActivityFeed',async(req,res)=>{
                let id:string=req.body.ActivityFeedId
                if(id!=null){
                    let result:any=await new ActivityFeddBuss().deletActivityFeed(id);
                    if(result===null){
                        res.send("Some thing Went Wrong");   
                    }else{
                        const response = {
                            message: "Activity FeedBack successfully deleted"
                        };
                        return res.status(200).send(response);
                    }
                }else{
                    const response = {
                        message: "Activity FeedBack Id Missing"
                    };
                    return res.status(200).send(response); 
                }
        });
    }

}
export const ActivityFeedRoutes = new ActivityFeedPresentation().router