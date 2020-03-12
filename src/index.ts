import * as bodyParser from 'body-parser';
import * as cors from 'cors';
import * as express from 'express';
import { Server } from "http";
import { initEventManager, SetupQues,getEventManager } from "./eventManager";
import { initRoutes, login } from './routes';
import {DbMongo} from "./utills/mongodb.conn";
let server: Server | null = null;

function initApplication(): express.Application {
    const app = express();
    new DbMongo().connect(process.env.MONGO_DB_URL || 'localhost', parseInt(process.env.MONGO_DB_PORT || '27017') ,process.env.MONGO_DB_NAME || 'iaglity')
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
       const app = initApplication();
       //server = app.listen(process.env.PORT || 4000, () => {
        //console.log(`Server started`);
    //});
    
}

// Start the application
start();