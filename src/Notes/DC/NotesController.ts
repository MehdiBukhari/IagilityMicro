import  {InotesShema}  from "../ML/Notes" 
import {INOTES} from "../DL/INOTES"
export class MainBussniessSkill{
    constructor(){

    }
    getNotes(_id:string){
       return InotesShema.findById(_id);
    }
    saveNotes(notes:INOTES){
        return new InotesShema (notes).save();
    }
    updatenotes(notes:INOTES){
        return InotesShema.findByIdAndUpdate(notes._id,notes,{new:true})
    }
    deleteNotes(_id:string){
        return InotesShema.findByIdAndDelete(_id)
    }
    getNotesList(){
        return InotesShema.find();
    }
    getcotsNotesByName(Cots_Function:string){
        return InotesShema.find({Notes_Function:Cots_Function});
    }
}