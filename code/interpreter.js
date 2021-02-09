// 解释器模式
const optInterpretor = {
    interpret(str) {
        if(typeof str !== 'string') return new Error('参数类型错误！');
        let arr = str.split(/[\+\-\*\/]/g);
        if(!Array.isArray(arr) || arr.length !== 2 ) {
            return new Error('解释器仅支持二元的+、-、*、/运算！');
        }
        
        return {
            num1: Number(arr[0]),
            num2: Number(arr[1]),
            opt: str[arr[0].length]
        };
    }
};
const context = {
    setInterpretor(interpretor) {
        this.interpretor = interpretor;
    },
    add: (a, b) => a + b,
    sub: (a, b) => a - b,
    mul: (a, b) => a * b,
    divide: (a, b) => a / b,
    isNum: x => typeof x === 'number' && !isNaN(x),
    operate(str) {
        const { add, sub, mul, divide } = this;
        const opts = { '+': add, '-': sub, '*': mul, '/': divide };
        const exp = this.interpretor.interpret(str);
        if(!this.isNum(exp.num1) || !this.isNum(exp.num2)) return new Error('操作数类型错误！');
        if(!opts[exp.opt]) return new Error('不支持的操作符类型！');

        return opts[exp.opt](exp.num1, exp.num2);
    }
}

context.setInterpretor(optInterpretor);
const s1 = '1 + 1';
const s2 = '5 * 7';
const r1 = context.operate(s1);
const r2 = context.operate(s2);
console.log(s1, '=', r1);
console.log(s2, '=', r2);