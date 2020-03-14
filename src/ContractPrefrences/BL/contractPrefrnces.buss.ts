import {IContractPrefrences} from "../DL/IContractPrefrences"
import {MainContract} from "../DC/ContractPrefrences";
export class ContractPrefrencesBuss{
    constructor(){

    }
    async getContract(_id:string):Promise<IContractPrefrences>{
        let contractpre=await new MainContract().getContract(_id);
         if(contractpre===null)
         throw 'cots doest not exits'
         return contractpre;
    }
    async savecontract(contractpre:IContractPrefrences):Promise<IContractPrefrences>{
        let new_contractpre:IContractPrefrences=await new MainContract().saveCOntract(contractpre);
        return new_contractpre
    }
    async updateContract(contractpre:IContractPrefrences):Promise<IContractPrefrences>{
        let update_contract=await new MainContract().updateContract(contractpre);
        if(update_contract===null)
         throw 'category not updated g'+contractpre._id;
          return update_contract
    }
    async deletcontract(_id:string){
        return await new MainContract().deletContractPrefrnces(_id);
    }
    
}