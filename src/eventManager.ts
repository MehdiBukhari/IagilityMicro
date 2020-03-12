import EventManager from "rabbitmq-event-manager";
import {RxStomp} from "@stomp/rx-stomp";
let manager: EventManager | null = null
export function initEventManager(): EventManager {
    manager = new EventManager({
        url: 'amqp://localhost',
        application: 'iaglity',
    }) 
    return manager;
}
export function getEventManager(): EventManager {
    if (manager) {
        return manager;
    }
    throw new Error('EventManager have not been initialized')
}
export function SetupQues():any{      
    Eventgenrator('login','login Que Setup');
    Eventgenrator('ConsaltantSignup','ConsaltantSignup Qur Setup');
    Eventgenrator('ChangePassword','Change Password Que');
    Eventgenrator('ConsaltantActivation','Consaltant Activation Que');
}
export function RoboConnecter():RxStomp{
    let rxStomp = new RxStomp();
    const stompConfig = {
   connectHeaders: {
        login: "guest",
        passcode: "guest"
      },
      // Broker URL, should start with ws:// or wss:// - adjust for your broker setup
      brokerURL: "ws://127.0.0.1:15674/ws",
      reconnectDelay: 200,
    };
    rxStomp.configure(stompConfig);
     try {
        rxStomp.activate(); 
    } catch (error) {
        return error;
    }
    return rxStomp;
}
export function Eventgenrator(eventName:string,message:string){
    getEventManager().emit(eventName,{"message":message})
    getEventManager().on(eventName,async (playload:any)=>{
        console.log(playload);
});
}
