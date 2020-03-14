import express from 'express';
import { ApplicationBuss } from '../BL/Application.Buss';
import { IAPPLICATIONS } from '../DL/IAPPLICATIONS';
export class ApplicationPresention {
    router: express.Router;
    constructor() {
        this.router = express.Router();
        this.routes();
    }
    routes() {
        this.router.get('/Applications', async (req, res) => {
            let Applications = await new ApplicationBuss().getApplicationList();
            if (Applications === null) {
                res.send('Some thing Went Wrong');
            } else {
                res.status(200).json({
                    Applications,
                });
            }
        });
        this.router.post('/Applications', async (req, res) => {
            let newApplication: IAPPLICATIONS = req.body.Application;

            let response: IAPPLICATIONS = await new ApplicationBuss().saveApplication(newApplication);
            if (response === null) {
                res.send('Some thing Went Wrong');
            } else {
                res.status(200).json({
                    response,
                });
            }
        });
        this.router.put('/UpadateApplication', async (req, res) => {
            let newApplication: IAPPLICATIONS = req.body.Application;

            let response = await new ApplicationBuss().updateApplication(newApplication);
            if (response === null) {
                res.send('Some thing Went Wrong');
            } else {
                res.status(200).json({
                    response,
                });
            }
        });
        this.router.get('/findOneApplication', async (req, res) => {
            let id: string = req.body.applicationId;
            if (id != null) {
                let result: IAPPLICATIONS = await new ApplicationBuss().getApplication(id);
                if (result === null) {
                    res.send('some thing went worng');
                } else {
                    res.status(200).send(result);
                }
            } else {
            }
        });
        this.router.delete('/RemoveApplication', async (req, res) => {
            let id: string = req.body.applicationId;
            if (id != null) {
                let result: any = await new ApplicationBuss().deleteApplication(id);
                if (result === null) {
                    res.send('Some thing Went Wrong');
                } else {
                    const response = {
                        message: 'Application successfully deleted',
                    };
                    return res.status(200).send(response);
                }
            } else {
                const response = {
                    message: 'Application Id Missing',
                };
                return res.status(200).send(response);
            }
        });
    }
}
export const ApplicationRoutes = new ApplicationPresention().router;
