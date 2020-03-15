import  {ContractPrefrncesSchema}  from "../ML/contractPrefrences" 
import {IContractPrefrences} from "../DL/IContractPrefrences"
export class MainContract{
    constructor(){

    }
    getContract(_id:string){
       return ContractPrefrncesSchema.findById(_id);
    }
    saveCOntract(contractPrefrences:IContractPrefrences){
        return new ContractPrefrncesSchema(contractPrefrences).save();
    }
    updateContract(contractPrefrences:IContractPrefrences){
        return ContractPrefrncesSchema.findByIdAndUpdate(contractPrefrences._id,contractPrefrences,{new:true})
    }
    deletContractPrefrnces(_id:string){
        return ContractPrefrncesSchema.findByIdAndDelete(_id)
    }
    getContractList(){
        return ContractPrefrncesSchema.find();
    }
    
}