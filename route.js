"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var app = (0, express_1.default)();
app.get('/hello', function (req, res) {
    res.send('Hello, world!');
});
var port = 3000;
app.listen(port, function () {
    console.log("Server is running at http://localhost:".concat(port));
});
