// 责任链模式
const chain = {
    firstHandler: null,
    lastHandler: null,
    addHandler(handler) {
        if(!this.lastHandler) {
            this.firstHandler = handler;
            this.lastHandler = handler;
        } else {
            this.lastHandler.next = handler;
            this.lastHandler = this.lastHandler.next;
        }
    }
};

function Handler(name, th) {
    this.name = name;
    this.th = th;
    this.next = null;
};
Handler.prototype = {
    exec(day) {
        if(day < this.th) {
            console.log(`${this.name} exec.`)
        } else if(this.next) {
            this.next.exec(day);
        }
    }
};

const handler1 = new Handler('M1', 2);
const handler2 = new Handler('M2', 10);
const handler3 = new Handler('M3', 30);

(function test() {
    chain.addHandler(handler1);
    chain.addHandler(handler2);
    chain.addHandler(handler3);
    chain.firstHandler.exec(20);
    chain.firstHandler.exec(7);
})();