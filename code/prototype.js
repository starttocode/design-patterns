// 原型模式 -- es5通过原型链实现了面向对象
function Proto(gender) {
    this.gender = gender;
}
Proto.prototype.getGender = function() {
    console.log("gender", this.gender);
}

function Sub(name, age) {
    this.name = name;
    this.age = age;
}
Sub.prototype = new Proto('male');
Sub.prototype.getDesc = function() {
    console.log(this.name, this.age, this.gender);
};

const tom = new Sub('tom', 21);
const mike = new Sub('mike', 22);

tom.getDesc();
mike.getDesc();
mike.getGender();

console.log(Sub.prototype === tom.__proto__);