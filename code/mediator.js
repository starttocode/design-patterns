// 中介者模式
const mediator = {
    dataCenter: {},
    randomStr(len) {
        const s = 'abcdefghijklmnopqrstuvwxyz0123456789';
        const arr = new Array(len).fill(0).map(() => {
            const i = Math.round(Math.random() * s.length);
            return s[i];
        });
        return arr.join('');
    },
    async genID() {
        const len = 16;
        const id = this.randomStr(len);
        let idx = 0;
        let nid = id;
        while(nid in this.dataCenter) {
            nid = id + idx;
            idx += 1;
        }
        return nid;
    },
    async registor(member) {
        if(typeof member !== 'object') return new Error('注册成员的类型错误！');
        const id = await this.genID();
        this.dataCenter[id] = member;
        return id;
    },
    getInfo(id) {
        return this.dataCenter[id];
    }
};

function Person(name, tel, address) {
    this.name = name;
    this.tel = tel;
    this.address = address;
}
Person.prototype = {
    modifyInfo(info) {
        console.log(`${this.name} modified personal info.`)
        Object.assign(this, info);
    }
}

const tom = new Person('tom', 'aabbcc123', 'usa');
const mike = new Person('mike', '12345', 'europe');
const alice = new Person('alice', '0123213', 'some where');

(async function test() {
    const nikenameTom = await mediator.registor(tom);
    const nikenameMike = await mediator.registor(mike);
    const nikenameAlice = await mediator.registor(alice);

    console.log('info of alice before modified:', mediator.getInfo(nikenameAlice));
    alice.modifyInfo({ tel: '123***', address: 'china' });
    console.log('info of alice after modified:', mediator.getInfo(nikenameAlice));
})();