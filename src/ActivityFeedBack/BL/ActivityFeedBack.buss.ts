import {IACTIVITYFEED} from "../DL/IACTIVITYFEED"
import {MainFeedBack} from "../DC/FeedBackController";
export class ActivityFeddBuss{
    constructor(){

    }
    async getActivityFeedBack(_id:string):Promise<IACTIVITYFEED>{
        let Ac=await new MainFeedBack().getActivity(_id);
         if(Ac===null)
         throw 'cots doest not exits'
         return Ac;
    }
    async saveActivityFeed(ActivityFeed:IACTIVITYFEED):Promise<IACTIVITYFEED>{
        let new_Activity:IACTIVITYFEED=await new MainFeedBack().saveActivity(ActivityFeed);
        return new_Activity
    }
    async updateActivityFeed(ActivityFeed:IACTIVITYFEED):Promise<IACTIVITYFEED>{
        let update_Activity=await new MainFeedBack().updateActivity(ActivityFeed);
        if(update_Activity===null)
         throw 'category not updated g'+ActivityFeed._id;
          return update_Activity
    }
    async deletActivityFeed(_id:string){
        return await new MainFeedBack().deletActivity(_id);
    }
    async getActivityFeedList():Promise<IACTIVITYFEED[]>{
        let ActivityFeed:IACTIVITYFEED[]=await new MainFeedBack().getActivityList();
        return ActivityFeed
    }
   
}