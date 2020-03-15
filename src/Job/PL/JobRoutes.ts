import express from 'express';
import { JobBuss } from '../BL/job.buss';
import { IJOB } from '../DL/IJOB';
export class JobPresention {
    router: express.Router;
    constructor() {
        this.router = express.Router();
        this.routes();
    }
    routes() {
        this.router.get('/JobList', async (req, res) => {
            let Job = await new JobBuss().getJobList();
            if (Job === null) {
                res.send('Some thing Went Wrong');
            } else {
                res.status(200).json({
                    Job,
                });
            }
        });
        this.router.post('/SaveJob', async (req, res) => {
            let newJob: IJOB = req.body.Job;

            let response: IJOB = await new JobBuss().saveJob(newJob);
            if (response === null) {
                res.send('Some thing Went Wrong');
            } else {
                res.status(200).json({
                    response,
                });
            }
        });
        this.router.put('/UpadateJob', async (req, res) => {
            let newJob: IJOB = req.body.Job;

            let response = await new JobBuss().updateJob(newJob);
            if (response === null) {
                res.send('Some thing Went Wrong');
            } else {
                res.status(200).json({
                    response,
                });
            }
        });
        this.router.get('/findOneJob', async (req, res) => {
            let id: string = req.body.JobId;
            if (id != null) {
                let result: IJOB = await new JobBuss().getJob(id);
                if (result === null) {
                    res.send('some thing went worng');
                } else {
                    res.status(200).send(result);
                }
            } else {
            }
        });
        this.router.delete('/RemoveJob', async (req, res) => {
            let id: string = req.body.JobId;
            if (id != null) {
                let result: any = await new JobBuss().deleteJob(id);
                if (result === null) {
                    res.send('Some thing Went Wrong');
                } else {
                    const response = {
                        message: 'Buniess Skill successfully deleted',
                    };
                    return res.status(200).send(response);
                }
            } else {
                const response = {
                    message: 'Buniess skill Id Missing',
                };
                return res.status(200).send(response);
            }
        });
    }
}
export const JobRoutes = new JobPresention().router;
