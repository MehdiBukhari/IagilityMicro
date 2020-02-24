"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
require("./routes/database");
const rabbitmq_event_manager_1 = __importDefault(require("rabbitmq-event-manager"));
const auth_controller_1 = require("./controllers/auth.controller");
function start() {
    const eventManager = new rabbitmq_event_manager_1.default({
        url: 'amqp://localhost',
        application: 'Login Micro Services',
    });
    eventManager.on('SIGNUP', (payload) => {
        auth_controller_1.signup(payload, payload);
        console.log('user saved');
    });
}
start();
//# sourceMappingURL=index.js.map