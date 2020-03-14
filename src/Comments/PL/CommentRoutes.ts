import express from 'express';
import { CommentBuss } from '../BL/comment.buss';
import { IComments } from '../DL/IComments';
export class CommentPresention {
    router: express.Router;
    constructor() {
        this.router = express.Router();
        this.routes();
    }
    routes() {
        this.router.get('/Comment', async (req, res) => {
            let CommentList = await new CommentBuss().getCommentList();
            if (CommentList === null) {
                res.send('Some thing Went Wrong');
            } else {
                res.status(200).json({
                    CommentList,
                });
            }
        });
        this.router.post('/Comment', async (req, res) => {
            let newComment: IComments = req.body.Comment;

            let response: IComments = await new CommentBuss().saveComment(newComment);
            if (response === null) {
                res.send('Some thing Went Wrong');
            } else {
                res.status(200).json({
                    response,
                });
            }
        });
        this.router.put('/UpadateComment', async (req, res) => {
            let newComment: IComments = req.body.Comment;

            let response = await new CommentBuss().updateComment(newComment);
            if (response === null) {
                res.send('Some thing Went Wrong');
            } else {
                res.status(200).json({
                    response,
                });
            }
        });
        this.router.get('/findOneComment', async (req, res) => {
            let id: string = req.body.commentId;
            if (id != null) {
                let result: IComments = await new CommentBuss().getComment(id);
                if (result === null) {
                    res.send('some thing went worng');
                } else {
                    res.status(200).send(result);
                }
            } else {
            }
        });
        this.router.delete('/RemoveComment', async (req, res) => {
            let id: string = req.body.bussId;
            if (id != null) {
                let result: any = await new CommentBuss().deleteComment(id);
                if (result === null) {
                    res.send('Some thing Went Wrong');
                } else {
                    const response = {
                        message: 'Comment successfully deleted',
                    };
                    return res.status(200).send(response);
                }
            } else {
                const response = {
                    message: 'Comment Id Missing',
                };
                return res.status(200).send(response);
            }
        });
    }
}
export const CommentRoutes = new CommentPresention().router;
