import EventManager from "rabbitmq-event-manager";
import mongoose from "mongoose";
function start() {
    const eventManager = new EventManager({
        url: 'amqp://localhost',
        application: 'User Registration Micro Services',
    })














    mongoose.connection.openUri('mongodb://localhost:27017/iaglitymicro', { useNewUrlParser: true });
    mongoose.connection.on('connected', () => {
        console.log("Connected to DB");
    });
    mongoose.connection.on('error', (err) => {
        if (err) {
            console.log(`Error while connecting to DB ${err}`);
        }
    });
}

start();