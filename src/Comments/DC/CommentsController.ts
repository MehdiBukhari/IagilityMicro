import  {ICommentsSchema}  from "../ML/Comments" 
import {IComments} from "../DL/IComments"
export class MainTechnicaleSkill{
    constructor(){

    }
    /*getComment(_id:string){
       return ICommentsSchema.findById(_id);
    }*/
    saveComment(Comment:IComments){
        return new ICommentsSchema(Comment).save();
    }
    updateComment(Comment:IComments){
        return ICommentsSchema.findByIdAndUpdate(Comment._id,Comment,{new:true})
    }
    deleteComment(_id:string){
        return ICommentsSchema.findByIdAndDelete(_id)
    }

    getcotsCommentlist(){
        return ICommentsSchema.find();
    }

    getcotsCommentlistByJob(Cots_Function:string){
        return ICommentsSchema.find({Comment_Function:Cots_Function});
    }
    
    /*
    
    getcotstechnicallistByName(Cots_Function:string){
        return ICommentsSchema.find({Tech_Function:Cots_Function});
    }*/
}