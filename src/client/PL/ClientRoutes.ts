import express from 'express';
import { ClientBuss } from '../BL/client.buss';
import { Iclient } from '../DL/Iclient';
export class ClientPresention {
    router: express.Router;
    constructor() {
        this.router = express.Router();
        this.routes();
    }
    routes() {
        this.router.get('/Client', async (req, res) => {
            let client = await new ClientBuss().getClientList();
            if (client === null) {
                res.send('Some thing Went Wrong');
            } else {
                res.status(200).json({
                    client,
                });
            }
        });
        this.router.post('/Client', async (req, res) => {
            let newClient: Iclient = req.body.client;

            let response: Iclient = await new ClientBuss().saveclient(newClient);
            if (response === null) {
                res.send('Some thing Went Wrong');
            } else {
                res.status(200).json({
                    response,
                });
            }
        });
        this.router.put('/UpadateClient', async (req, res) => {
            let newClient: Iclient = req.body.Client;

            let response = await new ClientBuss().updateCleint(newClient);
            if (response === null) {
                res.send('Some thing Went Wrong');
            } else {
                res.status(200).json({
                    response,
                });
            }
        });
        this.router.get('/findOneClient', async (req, res) => {
            let id: string = req.body.clientId;
            if (id != null) {
                let result: Iclient = await new ClientBuss().getClient(id);
                if (result === null) {
                    res.send('some thing went worng');
                } else {
                    res.status(200).send(result);
                }
            } else {
            }
        });
        this.router.delete('/RemoveClient', async (req, res) => {
            let id: string = req.body.clientId;
            if (id != null) {
                let result: any = await new ClientBuss().deleteClient(id);
                if (result === null) {
                    res.send('Some thing Went Wrong');
                } else {
                    const response = {
                        message: 'Client successfully deleted',
                    };
                    return res.status(200).send(response);
                }
            } else {
                const response = {
                    message: 'Client Id Missing',
                };
                return res.status(200).send(response);
            }
        });
    }
}
export const ClientRoutes = new ClientPresention().router;
