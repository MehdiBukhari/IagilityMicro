import { IComments } from '../DL/IComments';
import { MainComment } from '../DC/CommentsController';
export class CommentBuss {
    constructor() {}
    async getComment(_id: string): Promise<IComments> {
        let Comment = await new MainComment().getComment(_id);
        if (Comment === null) throw 'comment doest not exits';
        return Comment;
    }
    async saveComment(Comment: IComments): Promise<IComments> {
        let new_comment: IComments = await new MainComment().saveComment(Comment);
        return new_comment;
    }
    async updateComment(Comment: IComments): Promise<IComments> {
        let update_comment = await new MainComment().updateComment(Comment);
        if (update_comment === null) throw 'comment not updated' + Comment._id;
        return update_comment;
    }
    async deleteComment(_id: string) {
        return await new MainComment().deleteComment(_id);
    }
    async getCommentList(): Promise<IComments[]> {
        let Comment: IComments[] = await new MainComment().getcotsCommentlist();
        return Comment;
    }
}
