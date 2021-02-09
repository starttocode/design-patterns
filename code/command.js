// 命令模式
function Sender() {
    this.receivers = [];
}
Sender.prototype = {
    addReceiver(receiver) {
        this.receivers.push(receiver);
    },
    send(command) {
        this.receivers.forEach(r => r.receive(command));
    }
};

function Receiver(name) {
    this.name = name;
}
Receiver.prototype = {
    receive(command) {
        console.log(`${this.name} receive command.`);
        command.exec();
    }
};

const commands = {
    log: {
        exec() {
            console.log('log cur info.');
        }
    },
    back: {
        exec() {
            console.log('back last step.');
        }
    },
    reset: {
        exec() {
            console.log('reset the env.');
        }
    }
}

const sender = new Sender();
const receiver1 = new Receiver('tom');
const receiver2 = new Receiver('bob');
sender.addReceiver(receiver1);
sender.addReceiver(receiver2);
sender.send(commands.log);
sender.send(commands.reset);