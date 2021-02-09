// 抽象工厂模式
function BMW() {
    console.log('bmw car');
}
function Mercedes() {
    console.log('mercedes car');
}
const carDict = {
    'bmw': BMW,
    'mercedes': Mercedes,
};

function Toy1() {
    console.log('toy 1');
}
function Toy2() {
    console.log('toy 2');
}
const toyDict = {
    'toy1': Toy1,
    'toy2': Toy2
};

function abstractFactory(productDict) {
    return {
        produce(productName) {
            const Proto = productDict[productName];
            if(typeof Proto === 'function') return new Proto();
        }
    }
}

const factory = abstractFactory({ ...carDict, ...toyDict });
factory.produce('bmw');
factory.produce('toy1');