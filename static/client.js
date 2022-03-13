let sendBtn = document.getElementById("send");
let nameFieldValue = document.querySelector("[name=name]");

sendBtn.onclick = function send() {
    return nameFieldValue;
}

module.exports = send;

const socket = io();

socket.emit("new player");

socket.on("state", (data) => {
    players = getPlayers(data);
    console.log(players);
});