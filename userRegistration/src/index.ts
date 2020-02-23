import EventManager from "rabbitmq-event-manager";

function start() {
    const eventManager = new EventManager({
        url: 'amqp://localhost',
        application: 'User Registration Micro Services',
    })
    eventManager.on('USER_HAS_REGISTERED', (payload: any) => {
        console.log(`MICRO APP micro-user-registered`);
        console.log('payload :', payload);
    });


}
start();