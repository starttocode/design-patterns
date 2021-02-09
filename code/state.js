// 状态模式
function Person(moodActions) {
    this.actions = moodActions;
}
Person.prototype = {
    setMoodActions(moodActions) {
        this.actions = moodActions;
    },
    work() {
        this.actions.work();
    },
    eat() {
        this.actions.eat();
    },
    chat() {
        this.actions.chat();
    }
};
const MOOD_STATUS = {
    peace: 'peace',
    happy: 'happy',
    bad: 'bad'
};
const peaceMoodAction = {
    state: MOOD_STATUS.peace,
    work() {
        console.log(`work in ${this.state} state, 100% produce per day.`);
    },
    eat() {
        console.log(`eat in ${this.state} state, normally.`);
    },
    chat() {
        console.log(`chat in ${this.state} state, talk a lot.`);
    }
};
const happyMoodAction = {
    state: MOOD_STATUS.happy,
    work() {
        console.log(`work in ${this.state} state, 120% produce per day.`);
    },
    eat() {
        console.log(`eat in ${this.state} state, good.`);
    },
    chat() {
        console.log(`chat in ${this.state} state, talk more.`);
    }
};
const badMoodAction = {
    state: MOOD_STATUS.bad,
    work() {
        console.log(`work in ${this.state} state, 80% produce per day.`);
    },
    eat() {
        console.log(`eat in ${this.state} state, no good.`);
    },
    chat() {
        console.log(`chat in ${this.state} state, talk less.`);
    }
};

(function test() {
    const person = new Person(peaceMoodAction);
    person.work();
    person.eat();
    person.chat();
    person.setMoodActions(happyMoodAction);
    person.work();
    person.setMoodActions(badMoodAction);
    person.chat();
})();