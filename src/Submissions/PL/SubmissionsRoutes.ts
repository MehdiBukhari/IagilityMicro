import express from 'express';
import { SubmissionBuss } from '../BL/submission.buss';
import { ISUBMISSIONS } from '../DL/ISUBMISSIONS';
export class SubmissionPresention {
    router: express.Router;
    constructor() {
        this.router = express.Router();
        this.routes();
    }
    routes() {
        this.router.get('/SubmissionList', async (req, res) => {
            let SubmissionList = await new SubmissionBuss().getSubmissionList();
            if (SubmissionList === null) {
                res.send('Some thing Went Wrong');
            } else {
                res.status(200).json({
                    SubmissionList,
                });
            }
        });
        this.router.post('/SaveSubmission', async (req, res) => {
            let newSubmission: ISUBMISSIONS = req.body.Submission;

            let response: ISUBMISSIONS = await new SubmissionBuss().savesubmission(newSubmission);
            if (response === null) {
                res.send('Some thing Went Wrong');
            } else {
                res.status(200).json({
                    response,
                });
            }
        });
        this.router.put('/UpadateSubmission', async (req, res) => {
            let newSubmission: ISUBMISSIONS = req.body.Submission;

            let response = await new SubmissionBuss().updatesubmission(newSubmission);
            if (response === null) {
                res.send('Some thing Went Wrong');
            } else {
                res.status(200).json({
                    response,
                });
            }
        });
        this.router.get('/findOneSubmission', async (req, res) => {
            let id: string = req.body.SubmissionId;
            if (id != null) {
                let result: ISUBMISSIONS = await new SubmissionBuss().getSubmission(id);
                if (result === null) {
                    res.send('some thing went worng');
                } else {
                    res.status(200).send(result);
                }
            } else {
            }
        });
        this.router.delete('/RemoveSubmission', async (req, res) => {
            let id: string = req.body.SubmissionId;
            if (id != null) {
                let result: any = await new SubmissionBuss().deleteSubmission(id);
                if (result === null) {
                    res.send('Some thing Went Wrong');
                } else {
                    const response = {
                        message: 'Submission successfully deleted',
                    };
                    return res.status(200).send(response);
                }
            } else {
                const response = {
                    message: 'submission Id Missing',
                };
                return res.status(200).send(response);
            }
        });
    }
}
export const SubmissionRoutes = new SubmissionPresention().router;
