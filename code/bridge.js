// 桥接模式 -- 手机产品和商品维度的桥接
function Phone(name) {
    this.name = name;
}
Phone.prototype = {
    init(family, identifier) {
        this.family = family;
        this.identifier = identifier;
    },
    toString() {
        const { name, family='', identifier='' } = this;
        const series = family + (identifier? ` ${identifier}` : identifier);
        return `${name} ${series}`;
    }
}

function Iphone() {}
Iphone.prototype = new Phone('iphone');

function XiaoMi() {}
XiaoMi.prototype = new Phone('xiaomi');

function HuaWei() {}
HuaWei.prototype = new Phone('huawei');

function Goods(product, price) {
    this.product = product;
    this.price = price;
}
Goods.prototype.display = function() {
    const { product, price } = this;
    console.log(`the price of ${product} is ${price}`);
}

const goodsCreator = (Product, price, ...params) => {
    const product = new Product();
    product.init(...params);
    return new Goods(product, price);
}
const iphoneGoods = new Array(100).fill(0).map(() => goodsCreator(Iphone, 7000, '11'));
const redmiGoods = new Array(50).fill(0).map(() => goodsCreator(XiaoMi, 2000, 'redmi', '10'));
const huaweiGoods = new Array(100).fill(0).map(() => goodsCreator(HuaWei, 6000, 'p40', 'pro'));

iphoneGoods[0].display();
redmiGoods[0].display();
huaweiGoods[0].display();