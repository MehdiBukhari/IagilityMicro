import {Icots} from "../DL/cots"
import {Maincots} from "../DC/CotController";
export class cotBuss{
    constructor(){

    }
    async getcots(_id:string):Promise<Icots>{
        let cots=await new Maincots().getcots(_id);
         if(cots===null)
         throw 'cots doest not exits'
         return cots;
    }
    async savecots(cots:Icots):Promise<Icots>{
        let new_cots:Icots=await new Maincots().savecots(cots);
        return new_cots
    }
    async updatecots(cots:Icots):Promise<Icots>{
        let update_cots=await new Maincots().updatecots(cots);
        if(update_cots===null)
         throw 'category not updated g'+cots._id;
          return update_cots
    }
    async deletcots(_id:string){
        return await new Maincots().deletcots(_id);
    }
    async getcotsList():Promise<Icots[]>{
        let cots:Icots[]=await new Maincots().getcotsskilllist();
        return cots
    }
    async getcotsListbyname(cotMain:string):Promise<Icots[]>{
        let cots:Icots[]=await new Maincots().getcotsskilllistByName(cotMain);
        return cots
    }
}