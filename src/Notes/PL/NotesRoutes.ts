import express from 'express';
import { NotesBuss } from '../BL/notes.buss';
import { INOTES } from '../DL/INOTES';
export class NotesPresention {
    router: express.Router;
    constructor() {
        this.router = express.Router();
        this.routes();
    }
    routes() {
        this.router.get('/NoteList', async (req, res) => {
            let Notes = await new NotesBuss().getNoteList();
            if (Notes === null) {
                res.send('Some thing Went Wrong');
            } else {
                res.status(200).json({
                    Notes,
                });
            }
        });
        this.router.post('/SaveNotes', async (req, res) => {
            let newNotes: INOTES = req.body.Notes;

            let response: INOTES = await new NotesBuss().savenote(newNotes);
            if (response === null) {
                res.send('Some thing Went Wrong');
            } else {
                res.status(200).json({
                    response,
                });
            }
        });
        this.router.put('/UpadateNotes', async (req, res) => {
            let newNotes: INOTES = req.body.Notes;

            let response = await new NotesBuss().updatenote(newNotes);
            if (response === null) {
                res.send('Some thing Went Wrong');
            } else {
                res.status(200).json({
                    response,
                });
            }
        });
        this.router.get('/findOneNotes', async (req, res) => {
            let id: string = req.body.notesId;
            if (id != null) {
                let result: INOTES = await new NotesBuss().getnote(id);
                if (result === null) {
                    res.send('some thing went worng');
                } else {
                    res.status(200).send(result);
                }
            } else {
            }
        });
        this.router.delete('/RemoveNotes', async (req, res) => {
            let id: string = req.body.notesId;
            if (id != null) {
                let result: any = await new NotesBuss().deleteNote(id);
                if (result === null) {
                    res.send('Some thing Went Wrong');
                } else {
                    const response = {
                        message: 'Notes successfully deleted',
                    };
                    return res.status(200).send(response);
                }
            } else {
                const response = {
                    message: 'Notes Id Missing',
                };
                return res.status(200).send(response);
            }
        });
    }
}
export const NotesRoutes = new NotesPresention().router;
