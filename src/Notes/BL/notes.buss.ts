import {INOTES} from "../DL/INOTES"
import {MainNOtes} from "../DC/NotesController";
export class NotesBuss{
    constructor(){

    }
    async getnote(_id:string):Promise<INOTES>{
        let note=await new MainNOtes().getNotes(_id);
         if(note===null)
         throw 'cots doest not exits'
         return note;
    }
    async savenote(note:INOTES):Promise<INOTES>{
        let new_note:INOTES=await new MainNOtes().saveNotes(note);
        return new_note
    }
    async updanote(note:INOTES):Promise<INOTES>{
        let update_new=await new MainNOtes().updatenotes(note);
        if(update_new===null)
         throw 'category not updated g'+note._id;
          return update_new
    }
    async deleteNOte(_id:string){
        return await new MainNOtes().deleteNotes(_id);
    }
    async getNoteList():Promise<INOTES[]>{
        let notes:INOTES[]=await new MainNOtes().getNotesList();
        return notes
    }
    
}