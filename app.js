const express = require("express");
const app = express();
const port = normalizePort(process.env.PORT || '3000');


function normalizePort(val) {
    var port = parseInt(val, 10);

    if (isNaN(port)) {
        // named pipe
        return val;
    }

    if (port >= 0) {
        // port number
        return port;
    }

    return false;
}

app.get("/", function (req, res) {
    res.send("Express Active Directory test");
});

app.get("/admin", function (req, res) {
    res.send("Admin section...");
});

app.get("/login", function (req, res) {
    res.send("Login page...");
});

app.listen(port, function () {
    console.log(`Example app listening on port ${port}!`);
});


