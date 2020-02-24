import app from './app';
import dotenve from 'dotenv';
dotenve.config();


import './routes/database';
import EventManager from "rabbitmq-event-manager";

import { TokenValidation } from './libs/verifyToken'
import {signup,signin,profile} from './controllers/auth.controller'
import User from 'models/User';
import { json } from 'express';

function start() {
    const eventManager = new EventManager({
        url: 'amqp://localhost',
        application: 'Login Micro Services',
    })
    eventManager.on('SIGNUP', (payload: any) => {
        signup(payload,payload);
        console.log('user saved')
    });


}
start();