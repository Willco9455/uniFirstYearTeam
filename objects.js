// quiz object
class Game {
     
    constructor(pin) {
        this.title = 'Game Title';
        this.pin = pin;
        this.hostId = undefined
        this.players = []
    }

    addPlayer(uname) {
      this.players.push(new User(uname))
    }

    remPlayer(uname) {
        this.players = this.players.filter( obj => {
            return obj.uname != uname;
        });
    }

    setHost(uname) {
        this.hostId = uname
    }

    clearPlayers() {
        this.players = []
    }
}

class User {
    constructor(uname) {
        this.uname = uname
    }
}

module.exports = Game