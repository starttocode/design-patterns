// 策略模式
// 1.单选策略
const walkStrategy = {
    go() {
        console.log('walk.')
    }
};
const driveStrategy = {
    go() {
        console.log('drive car.');
    }
};
const busStrategy = {
    go() {
        console.log('by bus.');
    }
};
const strategies = {
    walk: walkStrategy,
    drive: driveStrategy,
    bus: busStrategy
};

function goOut(strategy) {
    console.log('go out.');
    strategy.go();
}
goOut(strategies.walk);
goOut(strategies.drive);
goOut(strategies.bus);

// 2.多选策略
const usernameValidator = {
    validate(str) {
        const MIN_LEN = 8;
        return typeof str !== 'string' || str.length < MIN_LEN;
    }
};
const passwordValidator = {
    validate(str) {
        return typeof str !== 'string' || (/[a-z]+/g.test(str) && /[A-Z]+/g.test(str) && /[0-9]+/g.test(str));
    }
};

const registerValidator = {
    strategies: [],
    add(strategy, ele) {
        this.strategies.push({ strategy, ele });
    },
    validate() {
        this.strategies.forEach(({ strategy, ele }) => {
            strategy.validate(ele.value);
        });
    }
};
/*
** 示例代码，需要html的dom节点才能运行
registerValidator.add(usernameValidator, document.getElementById('user_name'));
registerValidator.add(passwordValidator, document.getElementById('pass_word'));
registerValidator.validate();
*/