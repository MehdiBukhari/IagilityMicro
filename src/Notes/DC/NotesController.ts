import  {NoteSchema}  from "../ML/Notes" 
import {INOTES} from "../DL/INOTES"
export class MainNOtes{
    constructor(){

    }
    getNotes(_id:string){
       return NoteSchema.findById(_id);
    }
    saveNotes(notes:INOTES){
        return new NoteSchema (notes).save();
    }
    updatenotes(notes:INOTES){
        return NoteSchema.findByIdAndUpdate(notes._id,notes,{new:true})
    }
    deleteNotes(_id:string){
        return NoteSchema.findByIdAndDelete(_id)
    }
    getNotesList(){
        return NoteSchema.find();
    }
    getcotsNotesByName(Cots_Function:string){
        return NoteSchema.find({Notes_Function:Cots_Function});
    }
}