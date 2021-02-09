// 策略模式
const walkStrategy = {
    go() {
        console.log('walk.')
    }
};
const driveStrategy = {
    go() {
        console.log('drive car.');
    }
};
const busStrategy = {
    go() {
        console.log('by bus.');
    }
};
const strategies = {
    walk: walkStrategy,
    drive: driveStrategy,
    bus: busStrategy
};

function goOut(strategy) {
    console.log('go out.');
    strategy.go();
}
goOut(strategies.walk);
goOut(strategies.drive);
goOut(strategies.bus);