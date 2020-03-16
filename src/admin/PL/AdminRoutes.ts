import express from 'express';
import { AdminBuss } from '../BL/admin.buss';
import { IADMIN } from '../DL/IAdmin';
import { MainAdmin } from '../DC/AdminController';

export class AdminPresention {


    async getAdmin(id: string) {
        let admin = await new AdminBuss().getadmin(id);
        if (admin === null)
            return JSON.stringify({
                message: 'Admin does not exist',
            });
        else {
            return admin;
        }
    }

    async saveAdmin(admin: IADMIN) {
        let New_admin = await new AdminBuss().saveadmin(admin);
        return New_admin;
    }

    async UpdateAdmin(admin: IADMIN) {
        let Upadated_admin = await new AdminBuss().updateAdmin(admin);
        return Upadated_admin;
    }

    async deleteAdmin(id: string) {
        return await new AdminBuss().deletadmin(id);
    }

    async GetAdminList(): Promise<IADMIN[]> {
        let adminList: IADMIN[] = await new AdminBuss().getadminList();
        return adminList;
    }
}

/* router: express.Router;
    constructor() {
        this.router = express.Router();
        this.routes();
    }
    routes() {
        this.router.get('/AdminList', async (req, res) => {
            let Adminlist = await new AdminBuss().getadminList();
            if (Adminlist === null) {
                res.send('Some thing Went Wrong');
            } else {
                res.status(200).json({
                    Adminlist,
                });
            }
        });
        this.router.post('/SaveAdmin', async (req, res) => {
            let newAdmin: IADMIN = req.body.admin;

            let response: IADMIN = await new AdminBuss().saveadmin(newAdmin);
            if (response === null) {
                res.send('Some thing Went Wrong');
            } else {
                res.status(200).json({
                    response,
                });
            }
        });
        this.router.put('/UpadateAdmin', async (req, res) => {
            let newAdmin: IADMIN = req.body.admin;

            let response = await new AdminBuss().updateAdmin(newAdmin);
            if (response === null) {
                res.send('Some thing Went Wrong');
            } else {
                res.status(200).json({
                    response,
                });
            }
        });
        this.router.get('/findOneAdmin', async (req, res) => {
            let id: string = req.body.adminId;
            if (id != null) {
                let result: IADMIN = await new AdminBuss().getadmin(id);
                if (result === null) {
                    res.send('some thing went worng');
                } else {
                    res.status(200).send(result);
                }
            } else {
            }
        });
        this.router.delete('/RemoveAdmin', async (req, res) => {
            let id: string = req.body.adminId;
            if (id != null) {
                let result: any = await new AdminBuss().deletadmin(id);
                if (result === null) {
                    res.send('Some thing Went Wrong');
                } else {
                    const response = {
                        message: 'Admin successfully deleted',
                    };
                    return res.status(200).send(response);
                }
            } else {
                const response = {
                    message: 'Admin Id Missing',
                };
                return res.status(200).send(response);
            }
        });
    }
}
export const AdminRoutes = new AdminPresention().router; */
