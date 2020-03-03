import express = require("express");
import { getEventManager } from "./eventManager";

export function initRoutes(app: express.Application) {
    app.post('/event', (req, res, next) => {
        const { EventName, payload } = req.body;
        if (EventName && payload) {
            getEventManager().emit(EventName, payload);
          console.log('playLoad',payload);
            res.sendStatus(204);
        } else {
            res.sendStatus(400)
        }
    });
    getEventManager().on('New_USER_Created', (payload: any) => {
        console.log(`New user Created`);
        console.log('payloadSignup Route :', payload);
        
        
    }
    
    );

    getEventManager().on('USER_LOGIN', (payload: any) => {
        console.log(`USER LOGGED IN`);
        console.log('payloadRoutes :', payload);
        
        
    }
    
    );

}