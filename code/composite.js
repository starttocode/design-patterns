// 组合模式
const random = {
    randomBool() {
        return Math.random() > 0.5;
    },
    randomStr(len) {
        const s = 'abcdefghijklmnopqrstuvwxyz0123456789';
        const arr = new Array(len).fill(0).map(() => {
            const i = Math.round(Math.random() * s.length);
            return s[i];
        });
        return arr.join('');
    }
}
const system = {
    log: console.log,
    execTime(fn, ...args) {
        if(typeof fn !== 'function') return new Error('参数应该为函数类型！');
        console.time('函数执行时间');
        fn(...args);
        console.timeEnd('函数执行时间');
    }
}
const utils = { random, system };
const network = {
    request(url, method, data) {
        console.log(`request ${url} in ${method}, data: ${data}.`);
    },
    ws(url, params) {
        console.log(`websocket connect with ${url}, params: ${params}.`);
    }
}
const service = {
    utils, network
};

(function () {
    service.network.ws('https://www.test.com/test', JSON.stringify({ token: service.utils.random.randomStr(16) }));
    service.utils.system.execTime(service.utils.random.randomStr, 100);
})();