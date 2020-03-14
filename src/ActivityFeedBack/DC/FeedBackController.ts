import  {IActivitySchema}  from "../ML/AFeedBack" 
import {IACTIVITYFEED} from "../DL/IACTIVITYFEED"
export class MainFeedBack{
    constructor(){

    }
    getActivity(_id:string){
       return IActivitySchema.findById(_id);
    }
    saveActivity(AcvtivityFeedBack:IACTIVITYFEED){
        return new IActivitySchema(AcvtivityFeedBack).save();
    }
    updateActivity(AcvtivityFeedBack:IACTIVITYFEED){
        return IActivitySchema.findByIdAndUpdate(AcvtivityFeedBack._id,AcvtivityFeedBack,{new:true})
    }
    deletActivity(_id:string){
        return IActivitySchema.findByIdAndDelete(_id)
    }
    getActivityList(){
        return IActivitySchema.find();
    }
}