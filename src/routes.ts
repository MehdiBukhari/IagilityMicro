import express = require('express');
import { getEventManager, RoboConnecter } from './eventManager';
import { RxStompRPC, RxStompConfig, RxStomp } from '@stomp/rx-stomp';
const rpcEndPoint = '/amq/queue/iaglity::login';
const rpcConsaltantSignupEndPoint = '/amq/queue/iaglity::ConsaltantSignup';
const rpcPasswordchangeEndPoint = '/amq/queue/iaglity::ChangePassword';
const rpcConsaltantActivationEndPoint = '/amq/queue/iaglity::ConsaltantActivation';
const rpcregenrateCodeEndPoint = '/amq/queue/iaglity::regenrateCode';
const rpcforgetPasswordPoint = '/amq/queue/iaglity::forgetPassword';
const rpcchangePasswordFromTokenPoint = '/amq/queue/iaglity::changePasswordFromToken';
const rpcgetadminListEndPoint = '/amq/queue/iaglity::getadminList';
const rpcsaveadminEndPoint = '/amq/queue/iaglity::saveadmin';
const rpcupdateAdminEndPoint = '/amq/queue/iaglity::updateAdmin';
const rpcgetadminEndPoint = '/amq/queue/iaglity::getadmin';
const rpcdeletadminEndPoint = '/amq/queue/iaglity::deletadmin';
import { UserPresention } from './User/PL/User';
import { AdminPresention } from './admin/PL/AdminRoutes';
Object.assign(global, { WebSocket: require('websocket').w3cwebsocket });
const userPre: UserPresention = new UserPresention();
const adminPre: AdminPresention = new AdminPresention();
export function initRoutes(app: express.Application) {
    login();
    signup();
    ChangePassword();
    ConsaltantActivation();
    regenrateCode();
    forgetPassword();
    changePasswordFromToken();
    getadminList();
    saveadmin();
    updateAdmin();
    getadmin();
    deletadmin();
}
function randomInt(max: any) {
    return Math.floor(Math.random() * max);
}
export function login() {
    let rxStomp = RoboConnecter();
    // This endpoint will wait for random period before responding to simulate real RPC servers
    rxStomp.watch(rpcEndPoint).subscribe(function(request: any) {
        console.log('RPC Server: Request: ' + request.body);
        // The response needs to be sent back here, it can safely be inlined
        const replyTo = request.headers['reply-to'];
        // Same correlation id needs to be sent back as message header, it can safely be inlined
        const correlationId = request.headers['correlation-id'];
        // simulate a random delay while computing
        setTimeout(async function() {
            // Process the request, compute the response
            const operands = JSON.parse(request.body);
            const result = await userPre.login(operands.username, operands.password);
            // Completed processing
            const responseBody = JSON.stringify(result);
            console.log('RPC Server: Response: ' + responseBody + ' for ' + request.body);
            // Send the response back to destination `replyTo` with `correlation-id` header
            rxStomp.publish({
                destination: replyTo,
                body: responseBody,
                headers: { 'correlation-id': correlationId },
            });
        }, randomInt(100));
    });
}
export function signup() {
    let rxStomp = RoboConnecter();
    // This endpoint will wait for random period before responding to simulate real RPC servers
    rxStomp.watch(rpcConsaltantSignupEndPoint).subscribe(function(request: any) {
        console.log('RPC Server: Request: ' + request.body);
        // The response needs to be sent back here, it can safely be inlined
        const replyTo = request.headers['reply-to'];
        // Same correlation id needs to be sent back as message header, it can safely be inlined
        const correlationId = request.headers['correlation-id'];
        // simulate a random delay while computing
        setTimeout(async function() {
            // Process the request, compute the response
            const operands = JSON.parse(request.body);
            const result = await userPre.consaltantSignup(operands.consaltant, operands.user);
            // Completed processing
            const responseBody = JSON.stringify(result);
            console.log('RPC Server: Response: ' + responseBody + ' for ' + request.body);
            // Send the response back to destination `replyTo` with `correlation-id` header
            rxStomp.publish({
                destination: replyTo,
                body: responseBody,
                headers: { 'correlation-id': correlationId },
            });
        }, randomInt(100));
    });
}
export function ChangePassword() {
    let rxStomp = RoboConnecter();
    // This endpoint will wait for random period before responding to simulate real RPC servers
    rxStomp.watch(rpcPasswordchangeEndPoint).subscribe(function(request: any) {
        console.log('RPC Server: Request: ' + request.body);
        // The response needs to be sent back here, it can safely be inlined
        const replyTo = request.headers['reply-to'];
        // Same correlation id needs to be sent back as message header, it can safely be inlined
        const correlationId = request.headers['correlation-id'];
        // simulate a random delay while computing
        setTimeout(async function() {
            // Process the request, compute the response
            const operands = JSON.parse(request.body);
            const result = await userPre.changePassword(operands._token, operands.oldPassword, operands.newPassword);
            // Completed processing
            const responseBody = JSON.stringify(result);
            console.log('RPC Server: Response: ' + responseBody + ' for ' + request.body);
            // Send the response back to destination `replyTo` with `correlation-id` header
            rxStomp.publish({
                destination: replyTo,
                body: responseBody,
                headers: { 'correlation-id': correlationId },
            });
        }, randomInt(100));
    });
}
export function ConsaltantActivation() {
    let rxStomp = RoboConnecter();
    // This endpoint will wait for random period before responding to simulate real RPC servers
    rxStomp.watch(rpcConsaltantActivationEndPoint).subscribe(function(request: any) {
        console.log('RPC Server: Request: ' + request.body);
        // The response needs to be sent back here, it can safely be inlined
        const replyTo = request.headers['reply-to'];
        // Same correlation id needs to be sent back as message header, it can safely be inlined
        const correlationId = request.headers['correlation-id'];
        // simulate a random delay while computing
        setTimeout(async function() {
            // Process the request, compute the response
            const operands = JSON.parse(request.body);
            const result = await userPre.consaltantActivation(operands.id, operands.activationCode);
            // Completed processing
            const responseBody = JSON.stringify(result);
            console.log('RPC Server: Response: ' + responseBody + ' for ' + request.body);
            // Send the response back to destination `replyTo` with `correlation-id` header
            rxStomp.publish({
                destination: replyTo,
                body: responseBody,
                headers: { 'correlation-id': correlationId },
            });
        }, randomInt(100));
    });
}
export function regenrateCode() {
    let rxStomp = RoboConnecter();
    // This endpoint will wait for random period before responding to simulate real RPC servers
    rxStomp.watch(rpcregenrateCodeEndPoint).subscribe(function(request: any) {
        console.log('RPC Server: Request: ' + request.body);
        // The response needs to be sent back here, it can safely be inlined
        const replyTo = request.headers['reply-to'];
        // Same correlation id needs to be sent back as message header, it can safely be inlined
        const correlationId = request.headers['correlation-id'];
        // simulate a random delay while computing
        setTimeout(async function() {
            // Process the request, compute the response
            const operands = JSON.parse(request.body);
            const result = await userPre.regenrateCode(operands.id);
            // Completed processing
            const responseBody = JSON.stringify(result);
            console.log('RPC Server: Response: ' + responseBody + ' for ' + request.body);
            // Send the response back to destination `replyTo` with `correlation-id` header
            rxStomp.publish({
                destination: replyTo,
                body: responseBody,
                headers: { 'correlation-id': correlationId },
            });
        }, randomInt(100));
    });
}
export function forgetPassword() {
    let rxStomp = RoboConnecter();
    // This endpoint will wait for random period before responding to simulate real RPC servers
    rxStomp.watch(rpcforgetPasswordPoint).subscribe(function(request: any) {
        console.log('RPC Server: Request: ' + request.body);
        // The response needs to be sent back here, it can safely be inlined
        const replyTo = request.headers['reply-to'];
        // Same correlation id needs to be sent back as message header, it can safely be inlined
        const correlationId = request.headers['correlation-id'];
        // simulate a random delay while computing
        setTimeout(async function() {
            // Process the request, compute the response
            const operands = JSON.parse(request.body);
            const result = await userPre.forgetPassword(operands.email);
            // Completed processing
            const responseBody = JSON.stringify(result);
            console.log('RPC Server: Response: ' + responseBody + ' for ' + request.body);
            // Send the response back to destination `replyTo` with `correlation-id` header
            rxStomp.publish({
                destination: replyTo,
                body: responseBody,
                headers: { 'correlation-id': correlationId },
            });
        }, randomInt(100));
    });
}
export function changePasswordFromToken() {
    let rxStomp = RoboConnecter();
    // This endpoint will wait for random period before responding to simulate real RPC servers
    rxStomp.watch(rpcchangePasswordFromTokenPoint).subscribe(function(request: any) {
        console.log('RPC Server: Request: ' + request.body);
        // The response needs to be sent back here, it can safely be inlined
        const replyTo = request.headers['reply-to'];
        // Same correlation id needs to be sent back as message header, it can safely be inlined
        const correlationId = request.headers['correlation-id'];
        // simulate a random delay while computing
        setTimeout(async function() {
            // Process the request, compute the response
            const operands = JSON.parse(request.body);
            const result = await userPre.changePasswordFromToken(operands.token, operands.NewPassword);
            // Completed processing
            const responseBody = JSON.stringify(result);
            console.log('RPC Server: Response: ' + responseBody + ' for ' + request.body);
            // Send the response back to destination `replyTo` with `correlation-id` header
            rxStomp.publish({
                destination: replyTo,
                body: responseBody,
                headers: { 'correlation-id': correlationId },
            });
        }, randomInt(100));
    });
}

export function getadminList() {
    let rxStomp = RoboConnecter();
    // This endpoint will wait for random period before responding to simulate real RPC servers
    rxStomp.watch(rpcgetadminListEndPoint).subscribe(function(request: any) {
        console.log('RPC Server: Request: ' + request.body);
        // The response needs to be sent back here, it can safely be inlined
        const replyTo = request.headers['reply-to'];
        // Same correlation id needs to be sent back as message header, it can safely be inlined
        const correlationId = request.headers['correlation-id'];
        // simulate a random delay while computing
        setTimeout(async function() {
            // Process the request, compute the response
            const operands = JSON.parse(request.body);
            const result = await adminPre.GetAdminList(operands.token);
            // Completed processing
            const responseBody = JSON.stringify(result);
            console.log('RPC Server: Response: ' + responseBody + ' for ' + request.body);
            // Send the response back to destination `replyTo` with `correlation-id` header
            rxStomp.publish({
                destination: replyTo,
                body: responseBody,
                headers: { 'correlation-id': correlationId },
            });
        }, randomInt(100));
    });
}

export function saveadmin() {
    let rxStomp = RoboConnecter();
    // This endpoint will wait for random period before responding to simulate real RPC servers
    rxStomp.watch(rpcgetadminEndPoint).subscribe(function(request: any) {
        console.log('RPC Server: Request: ' + request.body);
        // The response needs to be sent back here, it can safely be inlined
        const replyTo = request.headers['reply-to'];
        // Same correlation id needs to be sent back as message header, it can safely be inlined
        const correlationId = request.headers['correlation-id'];
        // simulate a random delay while computing
        setTimeout(async function() {
            // Process the request, compute the response
            const operands = JSON.parse(request.body);
            const result = await adminPre.saveAdmin(operands.token,operands.admin);
            // Completed processing
            const responseBody = JSON.stringify(result);
            console.log('RPC Server: Response: ' + responseBody + ' for ' + request.body);
            // Send the response back to destination `replyTo` with `correlation-id` header
            rxStomp.publish({
                destination: replyTo,
                body: responseBody,
                headers: { 'correlation-id': correlationId },
            });
        }, randomInt(100));
    });
}

export function updateAdmin() {
    let rxStomp = RoboConnecter();
    // This endpoint will wait for random period before responding to simulate real RPC servers
    rxStomp.watch(rpcupdateAdminEndPoint).subscribe(function(request: any) {
        console.log('RPC Server: Request: ' + request.body);
        // The response needs to be sent back here, it can safely be inlined
        const replyTo = request.headers['reply-to'];
        // Same correlation id needs to be sent back as message header, it can safely be inlined
        const correlationId = request.headers['correlation-id'];
        // simulate a random delay while computing
        setTimeout(async function() {
            // Process the request, compute the response
            const operands = JSON.parse(request.body);
            const result = await adminPre.UpdateAdmin(operands.token,operands.admin);
            // Completed processing
            const responseBody = JSON.stringify(result);
            console.log('RPC Server: Response: ' + responseBody + ' for ' + request.body);
            // Send the response back to destination `replyTo` with `correlation-id` header
            rxStomp.publish({
                destination: replyTo,
                body: responseBody,
                headers: { 'correlation-id': correlationId },
            });
        }, randomInt(100));
    });
}

export function getadmin() {
    let rxStomp = RoboConnecter();
    // This endpoint will wait for random period before responding to simulate real RPC servers
    rxStomp.watch(rpcgetadminEndPoint).subscribe(function(request: any) {
        console.log('RPC Server: Request: ' + request.body);
        // The response needs to be sent back here, it can safely be inlined
        const replyTo = request.headers['reply-to'];
        // Same correlation id needs to be sent back as message header, it can safely be inlined
        const correlationId = request.headers['correlation-id'];
        // simulate a random delay while computing
        setTimeout(async function() {
            // Process the request, compute the response
            const operands = JSON.parse(request.body);
            const result = await adminPre.getAdmin(operands.token,operands.id);
            // Completed processing
            const responseBody = JSON.stringify(result);
            console.log('RPC Server: Response: ' + responseBody + ' for ' + request.body);
            // Send the response back to destination `replyTo` with `correlation-id` header
            rxStomp.publish({
                destination: replyTo,
                body: responseBody,
                headers: { 'correlation-id': correlationId },
            });
        }, randomInt(100));
    });
}

export function deletadmin() {
    let rxStomp = RoboConnecter();
    // This endpoint will wait for random period before responding to simulate real RPC servers
    rxStomp.watch(rpcdeletadminEndPoint).subscribe(function(request: any) {
        console.log('RPC Server: Request: ' + request.body);
        // The response needs to be sent back here, it can safely be inlined
        const replyTo = request.headers['reply-to'];
        // Same correlation id needs to be sent back as message header, it can safely be inlined
        const correlationId = request.headers['correlation-id'];
        // simulate a random delay while computing
        setTimeout(async function() {
            // Process the request, compute the response
            const operands = JSON.parse(request.body);
            const result = await adminPre.deleteAdmin(operands.token,operands.id);
            // Completed processing
            const responseBody = JSON.stringify(result);
            console.log('RPC Server: Response: ' + responseBody + ' for ' + request.body);
            // Send the response back to destination `replyTo` with `correlation-id` header
            rxStomp.publish({
                destination: replyTo,
                body: responseBody,
                headers: { 'correlation-id': correlationId },
            });
        }, randomInt(100));
    });
}
