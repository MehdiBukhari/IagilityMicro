import express = require("express");
import { getEventManager, RoboConnecter} from "./eventManager";
import {RxStompRPC, RxStompConfig, RxStomp} from "@stomp/rx-stomp";
const rpcEndPoint = '/amq/queue/iaglity::login';
const rpcConsaltantSignupEndPoint = '/amq/queue/iaglity::ConsaltantSignup';
import  {UserPresention}  from "./User/PL/User";
Object.assign(global, { WebSocket: require('websocket').w3cwebsocket });
const userPre:UserPresention=new UserPresention;
export function initRoutes(app: express.Application) {
    login();
    signup();
 }
function randomInt(max:any)  {
    return Math.floor(Math.random() * max);
  }
  export function login() {
    let rxStomp = RoboConnecter();
    // This endpoint will wait for random period before responding to simulate real RPC servers
    rxStomp.watch(rpcEndPoint).subscribe(function (request:any) {
      console.log("RPC Server: Request: " + request.body);
      // The response needs to be sent back here, it can safely be inlined
      const replyTo = request.headers['reply-to'];
      // Same correlation id needs to be sent back as message header, it can safely be inlined
      const correlationId = request.headers['correlation-id'];
      // simulate a random delay while computing
      setTimeout(async function () {
        // Process the request, compute the response
        const operands = JSON.parse(request.body);
        const result = await userPre.login(operands.username,operands.password);
        // Completed processing
        const responseBody = JSON.stringify(result);
        console.log("RPC Server: Response: " + responseBody + " for " + request.body);
        // Send the response back to destination `replyTo` with `correlation-id` header
        rxStomp.publish({
          destination: replyTo,
          body: responseBody,
          headers: {'correlation-id': correlationId}
        });
      }, randomInt(100));
    });  
    
    

  };
  export function signup() {
    let rxStomp = RoboConnecter();
    // This endpoint will wait for random period before responding to simulate real RPC servers
    rxStomp.watch(rpcConsaltantSignupEndPoint).subscribe(function (request:any) {
      console.log("RPC Server: Request: " + request.body);
      // The response needs to be sent back here, it can safely be inlined
      const replyTo = request.headers['reply-to'];
      // Same correlation id needs to be sent back as message header, it can safely be inlined
      const correlationId = request.headers['correlation-id'];
      // simulate a random delay while computing
      setTimeout(async function () {
        // Process the request, compute the response
        const operands = JSON.parse(request.body);
        const result = await userPre.consaltantSignup(operands.consaltant,operands.user);
        // Completed processing
        const responseBody = JSON.stringify(result);
        console.log("RPC Server: Response: " + responseBody + " for " + request.body);
        // Send the response back to destination `replyTo` with `correlation-id` header
        rxStomp.publish({
          destination: replyTo,
          body: responseBody,
          headers: {'correlation-id': correlationId}
        });
      }, randomInt(100));
    });  
    
    

  };
