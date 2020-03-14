import {Iclient} from "../DL/Iclient"
import {MainClient} from "../DC/ClientController";
export class ClientBuss{
    constructor(){

    }
    async getClient(_id:string):Promise<Iclient>{
        let cleint=await new MainClient().getCleint(_id);
         if(cleint===null)
         throw 'cots doest not exits'
         return cleint;
    }
    async saveclient(client:Iclient):Promise<Iclient>{
        let new_cleint:Iclient=await new MainClient().saveClient(client);
        return new_cleint
    }
    async updateCleint(client:Iclient):Promise<Iclient>{
        let update_client=await new MainClient().updateClient(client);
        if(update_client===null)
         throw 'category not updated g'+client._id;
          return update_client
    }
    async deleteClient(_id:string){
        return await new MainClient().deletcleint(_id);
    }
    async getClientList():Promise<Iclient[]>{
        let clients:Iclient[]=await new MainClient().getclientlist();
        return clients
    }
   
}