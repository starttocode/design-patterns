// 单例模式
function singleton(creator) {
    let instance = null;
    return function(...args) {
        if(!instance && typeof creator !== 'function') {
            return new Error('未导入创建函数，对象初始化失败！');
        }
        if(!instance) instance = creator.apply(this, args);
        return instance;
    }
};

(function test() {
    const getPerson = singleton((name, age) => {
        return { name, age };
    });
    const tom = getPerson('tom', 12);
    const mike = getPerson('mike', 11);
    const alice = getPerson();
    console.log(tom, mike, alice);
    
    const getCar = singleton((name, color, price) => {
        return { name, color, price };
    });
    const car1 = getCar('car', 'red', '12万');
    const car2 = getCar();
    const car3 = getCar('car3', 'blue', '10万');
    console.log(car1, car2, car3);
})();