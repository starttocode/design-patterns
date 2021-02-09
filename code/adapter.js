// 适配器模式
const human1 = {
    run(speed) {
        console.log(`run speed ${speed} m/s.`);
    }
};
const bird1 = {
    fly(speed, high) {
        console.log(`fly on ${high} meters high sky, speed ${speed} m/s.`);
    }
};
const fish1 = {
    swim(speed, deep) {
        console.log(`swim in ${deep} meters deep speed ${speed} m/s.`);
    }
};
function playerAdapter(moveFn, ...args) {
    const player = {
        move() {
            if(typeof moveFn !== 'function') return;
            moveFn(...args);
        }
    };
    return player;
}

function startGame(players) {
    setTimeout(() => {
        players.forEach(player => player.move());
    }, 300);
}

const humanPlayer = playerAdapter(human1.run, 7 );
const birdPlayer = playerAdapter(bird1.fly, 10, 100);
const fishPlayer = playerAdapter(fish1.swim, 3, 3);
startGame([humanPlayer, birdPlayer, fishPlayer]);