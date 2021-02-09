# 23种常用的设计模式及其JavaScript实现
## 引言
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;软件开发领域的设计模式是开发者对代码设计经验的总结。使用设计模式是为了提高代码的可复用性和可维护性。将设计模式具体运用于代码设计时，需要注意分离代码中“容易变化的部分”和“不容易变化的部分”。代码中，“不容易变化的部分”可能具有复用价值，“容易变化的部分”则是需要经常维护的。<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;此仓库由JavaScript语言实现了23种经典的设计模式，即GoF合作出版的《设计模式：可复用面向对象软件的基础》（Design Patterns: Elements of Reusable Object-Oriented Software）一书中收录的23种设计模式。<br/>
```
本仓库代码中没有单独对每种设计模式进行介绍，阅读代码时需要预先对设计模式有一定程度的了解。
由于个人能力有限，作者对设计模式的理解以及JavaScript实现有不足之处，烦请指教。
```

## 设计模式的原则
1. 开闭原则    -- 软件实体应该对扩展开放，对修改关闭。
2. 里氏替换原则 -- 继承必须确保超类所拥有的性质在子类中仍然成立。
3. 依赖倒置原则 -- 高层模块不应该依赖低层模块，两者都应该依赖其抽象。抽象不应该依赖细节，细节应该依赖抽象。
4. 单一职责原则 -- 一个类应该有且仅有一个引起它变化的原因。（一个类不应该承担过多的职责，否则它应该被拆分。）
5. 接口隔离原则 -- 一个类对另一个类对依赖应该建立在最小的接口上。（过于庞大的接口，对于其调用者可能存在功能上的冗余。）
6. 迪米特法则  -- 如果两个软件实体无须直接通信，它们就不应该发生直接的相互调用。
7. 合成复用原则 -- 优先使用组合，其次才考虑使用继承。

## 本仓库实现的23种设计模式简介
### 分类
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;23种设计模式根据使用场景可分为创建型、结构型和行为型。其中，创建型模式将对象的创建与使用分离；结构型模式着力于利用布局使各个对象形成更有效的合作结构；行为型模式用于设计对象的协同关系，使软件完成更复杂的任务。
### 创建型模式
1. 单例模式 -- 在创建对象时仅生成一个唯一的实例。
2. 原型模式 -- 通过复制或扩展原型对象来生成新的对象。
3. 工厂模式 -- 由统一的工厂类生成产品对象。
4. 抽象工厂模式 -- 由抽象工厂类或其子类生成多种属性、多种类型的产品。
5. 建造者模式 -- 创建复杂对象时，将其分为多个部分分别创建，再分部创建完整对象。
### 结构型模式
1. 代理模式 -- 提供原对象的代理对象，对原对象的访问行为或修改行为由代理对象封装。
2. 适配器模式 -- 将不同对象的不同接口适配到相同的目标接口，以解决接口不适配的问题。
3. 桥接模式 -- 将原设计中具有两种不同维度属性的类，改变成两种不同的类，并使用组合关系建立两者之间沟通的“桥梁”。
4. 装饰模式 -- 不改动原对象的结构，动态地为该对象增加新的职责。
5. 外观模式 -- 为多个复杂的子系统提供一个统一的接口。
6. 享元模式 -- 将公共的对象、属性或值，抽取成为共享的数据。
7. 组合模式 -- 将单个复杂的模块变为由多个子模块组合而成的模块。
### 行为型模式
1. 模版方法模式 -- 将同一系列的抽象过程封装为抽象类中统一的具体接口，然后由具体类实现上述抽象过程并继承上述统一接口。
2. 策略模式 -- 同一个任务可能有多种实现方式，将这些实现方式封装成不同策略对象，并对外提供相同接口可以减少原代码中分支语句的使用。
3. 命令模式 -- 将命令封装为对象，使命令的发出行为与执行行为分离。
4. 责任链模式 -- 将一类任务的执行者组成责任链条，任务在发布后在责任链上传递，由责任链上相应的执行者执行。
5. 状态模式 -- 程序中某些对象可能会根据不同的状态做出不同的行为，将不同的状态及对应行为分离成单独的对象可以减少原代码中分支语句的使用。
6. 观察者模式（发布-订阅模式） -- 通过状态的发布和订阅，减少对象之间行为的直接关联。
7. 中介者模式 -- 在对象之间建立中介对象，由中介对象传递对象间的信息。应用场景例如：微信作为中介者提供了朋友间信息获取，消息传递等。
8. 迭代器模式 -- 将迭代行为和对迭代对象中具体元素的操作分离。
9. 访问者模式 -- 将访问行为和被访问对象分离。
10. 备忘录模式 -- 将数据的每个状态进行备份，提供状态回退、前进和对应状态数据恢复的接口。
11. 解释器模式 -- 对某种语法规则进行解释。应用场景例如：xml语法解析器等。
