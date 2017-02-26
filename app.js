'use strict';

const express = require("express");

let app = express();

app.get('/', function (req, res) {
    let langs = req.acceptsLanguages();
    let response = {
        ip_address: req.ip,
        language: langs && langs[0] || null,
        software: /\(([^\)]+)\)/.exec(req.get('User-Agent'))[1]
    };
    res.send(response);
});

let defaultAddress = "0.0.0.0";
let defaultPort = 8080;
let server = app.listen(process.env.PORT || defaultPort, process.env.IP || defaultAddress, function () {
    let addr = server.address();
    console.log("Server is listening at", addr.address + ":" + addr.port);
});