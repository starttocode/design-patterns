// 备忘录模式
const memento = {
    stack: [],
    index: -1,
    _clearForward() {
        const i = this.index + 1;
        while(i < this.stack.length) {
            this.stack.pop();
        }
    },
    get() {
        if(this.index === -1) return;
        return this.stack[this.index];
    },
    add(data) {
        this._clearForward();
        this.index += 1;
        this.stack.push(data);
    },
    rollback() {
        if(this.index > -1) {
            this.index -= 1;
        }
        return this.get();
    },
    forward() {
        if(this.index < this.stack.length - 1) {
            this.index += 1;
        }
        return this.get();
    }
};

(function test(){
    console.log(memento.get());
    memento.add(1);
    memento.add('some food.');
    memento.add('money 100$');
    memento.add({ w: 1 });

    console.log(memento.rollback());
    console.log(memento.forward());
    memento.rollback();
    memento.rollback();
    memento.forward();
    memento.add('123');
})();