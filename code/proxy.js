// 代理模式 -- es6标准提供了Proxy对象实现代理模式
function getProxy(target, methods) {
    if(typeof target !== 'object' || target === null) return new Error('不支持的代理类型！');
    if(typeof methods !== 'object') return new Error('错误地设置了代理方法！');

    const proxy = {};
    for(const key in methods) {
        if(typeof methods[key] !== 'function') continue;
        proxy[key] = (...args) => {
            if(typeof target[key] === 'function') target[key](...args);
            return methods[key].apply(target, [...args]);
        }
    }

    return proxy;
}

const obj = {
    a: 1,
    b: 2,
    c: 3,
    set() {
        console.log('original set function of obj.');
    }
};
const proxy = getProxy(obj, {
    set(key, val) {
        console.log(`proxy set ${key} for current object.`);
        this[key] = val;
    },
    get(key) {
        console.log(`proxy get ${key} from current object.`);
        return this[key];
    },
    toString() {
        console.log('toString:', this);
    }
});

const a = proxy.get('a');
console.log(a);
proxy.set('b', 'attribute named b.');
proxy.set('name', 'obj');
proxy.toString();