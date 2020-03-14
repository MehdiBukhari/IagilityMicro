import  {CleintSchema}  from "../ML/clients" 
import {Iclient} from "../DL/Iclient"
export class MainClient{
    constructor(){

    }
    getCleint(_id:string){
       return CleintSchema.findById(_id);
    }
    saveClient(client:Iclient){
        return new CleintSchema(client).save();
    }
    updateClient(client:Iclient){
        return CleintSchema.findByIdAndUpdate(client._id,client,{new:true})
    }
    deletcleint(_id:string){
        return CleintSchema.findByIdAndDelete(_id)
    }
    getclientlist(){
        return CleintSchema.find();
    }
}