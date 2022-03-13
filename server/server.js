const express = require("express");
const path = require("path");
const http = require("http");
const socketIO = require("socket.io");

const getPlayers = require("./player").getPlayers;

const app = express();
const server = http.Server(app);
const io = socketIO(server);

app.set("port", 5000);
app.use("/static", express.static(`${__dirname}/../static`));

app.get("/", function(request, response) {
    response.sendFile(path.join(`${__dirname}/../static`, "index.html"));
});

server.listen(5000, function() {
    console.log("Server is running on port 5000");
});

let players = null;

io.on("connection", (socket) => {
    players = getPlayers(socket);
    setTimeout(() => {
        console.log(players);
    }, 1000);
    socket.on("message", data => {
        console.log(data);
    });
});