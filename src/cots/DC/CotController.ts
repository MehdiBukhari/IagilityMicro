import  {CotsSchema}  from "../ML/cots" 
import {Icots} from "../DL/cots"
export class Maincots{
    constructor(){

    }
    getcots(_id:string){
       return CotsSchema.findById(_id);
    }
    savecots(cots:Icots){
        return new CotsSchema(cots).save();
    }
    updatecots(cots:Icots){
        return CotsSchema.findByIdAndUpdate(cots._id,cots,{new:true})
    }
    deletcots(_id:string){
        return CotsSchema.findByIdAndDelete(_id)
    }
    getcotsskilllist(){
        return CotsSchema.find();
    }
    getcotsskilllistByName(Cots_Function:string){
        return CotsSchema.find({Cots_Function:Cots_Function});
    }
}