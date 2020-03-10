import * as bodyParser from 'body-parser';
import * as cors from 'cors';
import * as express from 'express';
import { Server } from "http";
import { initEventManager, SetupQues,getEventManager } from "./eventManager";
import { initRoutes, login } from './routes';

let server: Server | null = null;

function initApplication(): express.Application {
    const app = express();
    app.use(cors());
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));
    initRoutes(app);
    return app;
}
function start() {
    // Create eventManager Instance (only one for all  applciation)
       initEventManager();
       //intilize all the quese
       //SetupQues();
       //initilizing web socket
       login();
       //const app = initApplication();
       //server = app.listen(process.env.PORT || 4000, () => {
        //console.log(`Server started`);
    //});
    
}

// Start the application
start();