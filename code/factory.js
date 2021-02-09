// 工厂模式
function BMW() {
    this.name = 'bmw';
    this.product = 'bmw car 1'
}
function Mercedes() {
    this.name = 'mercedes';
    this.product = 'mercedes car 1';
}
function carFactory(carDict) {
    return {
        getProduct(carName) {
            const Proto = carDict[carName];
            if(typeof Proto === 'function') return new Proto();
        }
    };
}
const carDict = {
    'bmw': BMW,
    'mercedes': Mercedes
};

const f1 = carFactory(carDict);
const product1 =  f1.getProduct('bmw');
const product2 = f1.getProduct('mercedes');
console.log(product1);
console.log(product2);