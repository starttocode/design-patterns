// 迭代器模式 -- JavaScript内置了迭代器模式
const arr = {
    data: [],
    push(...args) {
        this.data.push(...args);
    },
    concat(ar) {
        this.data.concat(ar);
    },
    pop() {
        return this.data.pop();
    },
    iterator(fn) {
        if(typeof fn !== 'function') return new Error('传入参数的类型错误！');
        for(let i = 0; i < this.data.length; i++) {
            fn(this.data[i], i, this.data);
        }
    }
};

arr.push(100, 200, 300, 400, 500);

arr.iterator((v, i) => console.log(`the index ${i} value of arr is ${v}`));