import express from 'express';
import { AdminBuss } from '../BL/admin.buss';
import { IADMIN } from '../DL/IAdmin';
import { MainAdmin } from '../DC/AdminController';
import { sign, verify } from "jsonwebtoken";
import { IUserModel } from '../../User/DL/user';
import { userBuss } from "../../User/BL/User.Buss";

export class AdminPresention {


    async getAdmin(_token: string, id: string) {

        try {

            let responseData = JSON.parse(JSON.stringify(verify(_token, 'secretkey')));
            let userId = responseData.authData.id;
            let user: IUserModel = await new userBuss().getOneUser(userId);
            if (user == null) {
                return JSON.stringify({
                    message: "you are not allowed to get Admin Information"
                })
            }

            else {

                let admin = await new AdminBuss().getadmin(id);
                if (admin === null)
                    return JSON.stringify({
                        message: 'Admin does not exist',
                    });
                else {
                    return admin;
                }

            }

        } catch (error) {
            return JSON.stringify({
                error: error
            })
        }


    }

    async saveAdmin(_token: string, admin: IADMIN) {

        try {

            let responseData = JSON.parse(JSON.stringify(verify(_token, 'secretkey')));
            let userId = responseData.authData.id;
            let user: IUserModel = await new userBuss().getOneUser(userId);
            if (user == null) {
                return JSON.stringify({
                    message: "you are not allowed to save Admin"
                })
            }

            else {

                let New_admin = await new AdminBuss().saveadmin(admin);

                return JSON.stringify({
                    message: "Admin information saved"
                })
            }

        } catch (error) {

            return JSON.stringify({
                error: error
            })

        }

    }

    async UpdateAdmin(_token: string, admin: IADMIN) {

        try {

            let responseData = JSON.parse(JSON.stringify(verify(_token, 'secretkey')));
            let userId = responseData.authData.id;
            let user: IUserModel = await new userBuss().getOneUser(userId);
            if (user == null) {
                return JSON.stringify({
                    message: "you are not allowed to update Admin information"
                })
            }
            else {

                let Upadated_admin = await new AdminBuss().updateAdmin(admin);

                return JSON.stringify({
                    message: "Admin information updated"
                })

            }

        } catch (error) {

            return JSON.stringify({
                error: error
            })

        }

    }

    async deleteAdmin(_token: string, id: string) {

        try {

            let responseData = JSON.parse(JSON.stringify(verify(_token, 'secretkey')));
            let userId = responseData.authData.id;
            let user: IUserModel = await new userBuss().getOneUser(userId);
            if (user == null) {
                return JSON.stringify({
                    message: "you are not allowed to delete Admin "
                })
            }
            else {

                let Deleted_admin = await new AdminBuss().deletadmin(id);
                return JSON.stringify({
                    message: "admin sucessfully deleted "
                })

            }

        } catch (error) {
            return JSON.stringify({
                error: error
            })
        }

    }

    async GetAdminList(_token: string){

        try {
            let responseData = JSON.parse(JSON.stringify(verify(_token, 'secretkey')));
            let userId = responseData.authData.id;
            let user: IUserModel = await new userBuss().getOneUser(userId);

            if (user === null) {
                return JSON.stringify({
                    message: "you are not allowed to get admin list "
                })
            }

            else {

            let adminList: IADMIN[] = await new AdminBuss().getadminList();
            return adminList;

            }
            




        } catch (error) {

            

        }

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
