// 装饰模式
function player(name, level) {
    return {
        name, level,
        info() {
            console.log(`player ${name} level ${level}.`);
        }
    };
}

function decorator(src, extend) {
    console.log('decorate the player.');
    return Object.assign(src, extend);
}

const player1 = player('TOM', '10');
player1.info();
const player2 = player('MIKE', '10');
player2.info();

decorator(player2, {
    preName: 'VIP',
    level: 20,
    info() {
        const { preName, name, level } = this;
        console.log(`${preName} player ${name} level ${level}.`);
    }
});
player2.info();
