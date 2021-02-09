// 访问者模式
function TouristAttraction(name, type, price) {
    this.name = name;
    this.types = type;
    this.price = price;
}
TouristAttraction.prototype = {
    toString() {
        return this.name;
    }
};

function Visitor(name) {
    this.name = name;
};
Visitor.prototype = {
    visit(place, activity) {
        console.log(`${this.name} visit the place named ${place}, the way of visit ${activity}, cost ${place.price}`);
    },
    evaluate(place, eval) {
        console.log(`${this.name} evaluate ${place} as ${eval}`);
    }
};

(function test() {
    const tour1 = new TouristAttraction('景点1', '风景区', 30);
    const tour2 = new TouristAttraction('游乐园', '游乐区', 50);

    const visitor1 = new Visitor('tom');
    const visitor2 = new Visitor('alice');
    visitor1.visit(tour1, 'look');
    visitor1.evaluate(tour1, 'good');
    visitor2.visit(tour2, 'play game');
    visitor2.evaluate(tour2, 'fun');
})();
