// 原型模式 -- es5通过原型链实现了面向对象
function Proto(gender) {
    this.gender = gender;
}
Proto.prototype.getGender = function() {
    console.log("gender", this.gender);
}

function SubClass(name, age) {
    this.name = name;
    this.age = age;
}
SubClass.prototype = new Proto('male');
SubClass.prototype.getDesc = function() {
    console.log(this.name, this.age, this.gender);
};

(function test(){
    const tom = new SubClass('tom', 21);
    const mike = new SubClass('mike', 22);
    tom.getDesc();
    mike.getDesc();
    mike.getGender();
    console.log(SubClass.prototype === tom.__proto__);
})();
