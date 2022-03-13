let players = {};

const send = require("../static/client").send;


class Player {
    constructor(props) {
        this._name = props.name;
        this._id = props.id;
    }
}

module.exports.getPlayers = (socket) => {
    socket.on("new player", () => {
        players[socket.id] = new Player({
            id: socket.id,
            name: send,
        });
    });
    socket.on("disconnect", () => {
        delete players[socket.id];
    });
    return players;
}