import express from 'express';
import { ContractPrefrencesBuss } from '../BL/contractPrefrnces.buss';
import { IContractPrefrences } from '../DL/IContractPrefrences';
export class ContractPreferencePresention {
    router: express.Router;
    constructor() {
        this.router = express.Router();
        this.routes();
    }
    routes() {
        this.router.get('/ContactPreference', async (req, res) => {
            let ContactPreference = await new ContractPrefrencesBuss().getContractPreferenceList();
            if (ContactPreference === null) {
                res.send('Some thing Went Wrong');
            } else {
                res.status(200).json({
                    ContactPreference,
                });
            }
        });
        this.router.post('/ContractPreference', async (req, res) => {
            let newContractPreference: IContractPrefrences = req.body.ContractPreference;

            let response: IContractPrefrences = await new ContractPrefrencesBuss().savecontract(newContractPreference);
            if (response === null) {
                res.send('Some thing Went Wrong');
            } else {
                res.status(200).json({
                    response,
                });
            }
        });
        this.router.put('/UpadateContractPreference', async (req, res) => {
            let newContractPreference: IContractPrefrences = req.body.ContractPreference;

            let response = await new ContractPrefrencesBuss().updateContract(newContractPreference);
            if (response === null) {
                res.send('Some thing Went Wrong');
            } else {
                res.status(200).json({
                    response,
                });
            }
        });
        this.router.get('/findOneContractPreference', async (req, res) => {
            let id: string = req.body.ContractId;
            if (id != null) {
                let result: IContractPrefrences = await new ContractPrefrencesBuss().getContract(id);
                if (result === null) {
                    res.send('some thing went worng');
                } else {
                    res.status(200).send(result);
                }
            } else {
            }
        });
        this.router.delete('/RemoveContractPreference', async (req, res) => {
            let id: string = req.body.ConractId;
            if (id != null) {
                let result: any = await new ContractPrefrencesBuss().deletcontract(id);
                if (result === null) {
                    res.send('Some thing Went Wrong');
                } else {
                    const response = {
                        message: 'Contract Preference successfully deleted',
                    };
                    return res.status(200).send(response);
                }
            } else {
                const response = {
                    message: 'Contract Prefference Id Missing',
                };
                return res.status(200).send(response);
            }
        });
    }
}
export const ContractPreferenceRoutes = new ContractPreferencePresention().router;
