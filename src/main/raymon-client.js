"use strict";

const io = require('socket.io-client');

class raymonClient {
    static socket;

    static connect(ip, port) {
        this.socket = io('http://' + ip + ':' + port);
        this.socket.on('connect', () => {
            console.log("Connected. Id: " + this.socket.id);
        });
    }

    static send(cmd, params) {
        this.socket.emit(cmd, params);
    }

    static listen(cmd, func) {
        this.socket.on(cmd, func);
    }
}

module.exports = raymonClient;