// 模板方法模式
function Template() {}
Template.prototype = {
    init() {
        console.log('template init.');
        this.check();
        this.doSomething();
        this.log();
    },
    check() {},
    doSomething() {},
    log() {}
};

function Work() {};
Work.prototype = new Template();
Work.prototype.check = function() {
    console.log('work check.');
};
Work.prototype.doSomething = function() {
    console.log('work doSomething.');
};
Work.prototype.log = function() {
    console.log('work log');
};

const work = new Work();
work.init();