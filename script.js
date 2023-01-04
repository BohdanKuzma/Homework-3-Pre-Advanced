function CoffeeMake() {}

CoffeeMake.prototype.on = function () {
    console.log('Кавоварка працює');
}

CoffeeMake.prototype.off = function () {
    console.log('Кавоварка вимкнена');
}

function DripCoffeeMaker() {}

function HornCoffeeMaker() {}

DripCoffeeMaker.prototype = Object.create(CoffeeMake.prototype);
HornCoffeeMaker.prototype = Object.create(CoffeeMake.prototype);

DripCoffeeMaker.prototype.make_late = function () {
    console.log('Приготовлена Лате');
}
HornCoffeeMaker.prototype.make_espresso = function () {
    console.log('Приготовлена Еспресо');
}

let FirstCoffeMaker = new DripCoffeeMaker();
let SecondCoffeMaker = new HornCoffeeMaker();

FirstCoffeMaker.off()
FirstCoffeMaker.on()
FirstCoffeMaker.make_late()
SecondCoffeMaker.off()
SecondCoffeMaker.on()
SecondCoffeMaker.make_espresso()





