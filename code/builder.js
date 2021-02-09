// 建造者模式
function builder(product) {
    return {
        build(attribute, buildFn) {
            if(typeof attribute === 'string' && typeof buildFn === 'function') {
                product[attribute] = buildFn();
            }
        }
    };
}

const house = {};
const houseBuilder = builder(house);
houseBuilder.build('地基', () => '使用钢筋混凝土建好地基！');
houseBuilder.build('房屋框架', () => '使用钢筋混凝土，砖块，水管等材料建好房屋框架！');
houseBuilder.build('窗户', () => '为房屋安装玻璃窗！');
houseBuilder.build('外墙', () => '使用高级涂装材料等装修好房屋外墙！');
houseBuilder.build('室内', () => '雇佣专业团队进行室内装修！');

console.log(house);