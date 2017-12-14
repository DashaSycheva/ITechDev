"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var isDone = false;
var decimal = 6;
var hex = 0xf00d;
var binary = 10;
var octal = 484;
var color = 'blue';
color = 'red';
var fullName = "Bob Bobbington";
var age = 37;
var sentence1 = "Hello, my name is " + fullName + ". I'll be " + (age + 1) + " years old next month.";
var sentence2 = "Hello, my name is \" + fullName + .\n\n + \"I'll be \" + (age + 1) + \" years old next month.";
var list1 = [1, 2, 3];
var list2 = [1, 2, 3];
///Объявляем переменную типа кортеж
var x;
///Инициализация
x = ["hello", 10]; //Всё верно
///Инициализируем неверно
//x = [10, "hello"]; //Ошибка
console.log(x[0].substr(1)); // OK
//console.log(x[1].substr(1)); // Ошибка,"property 'substr' does not exist on type 'number'";
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
var a = Color.Green;
(function (Color) {
    Color[Color["Black"] = 1] = "Black";
    Color[Color["White"] = 2] = "White";
    Color[Color["Yellow"] = 3] = "Yellow";
})(Color || (Color = {}));
var b = Color.Green;
(function (Color) {
    Color[Color["Purple"] = 1] = "Purple";
    Color[Color["Pink"] = 2] = "Pink";
    Color[Color["Cyan"] = 4] = "Cyan";
})(Color || (Color = {}));
var c = Color.Green;
(function (Color) {
    Color[Color["Magenta"] = 1] = "Magenta";
    Color[Color["Violet"] = 2] = "Violet";
    Color[Color["Orange"] = 3] = "Orange";
})(Color || (Color = {}));
var colorName = Color[2];
alert(colorName); //отображает &rsquo;Green&rsquo; поскольку это значение присвоено элементу с индексом 2
var notSure1 = 4;
notSure1 = "maybe a string instead";
notSure1 = false; //Да, пусть будет булевый тип
var notSure2 = 4;
notSure2.ifItExists(); // Нет ошибки, ifItExists может существовать при запуске
notSure2.toFixed(); // Нет ошибки, toFixed существует (компилятор не проверяет)
var prettySure = 4;
//prettySure.toFixed(); // Ошибка: Property "toFixed" does not exist on type "Object";.
var list = [1, true, "free"];
list[1] = 100;
function warnUser() {
    alert("This is my warning message");
}
var unusable = undefined;
// Этим переменным других значений не задать
var u = undefined;
var n = null;
// Функция, возвращающая never, должна иметь недостижимую точку окончания
function error(message) {
    throw new Error(message);
}
function infiniteLoop() {
    while (true) {
    }
}
var someValue1 = "this is a string";
var strLength1 = someValue1.length;
var someValue2 = "this is a string";
var strLength2 = someValue2.length;
var person = { name: "Tom", age: 23 };
console.log(person.name);
//альтернативное обращение к свойству
console.log(person["name"]);
var User1 = (function () {
    function User1() {
    }
    User1.prototype.getInfo = function () {
        return "id:" + this.id + " name:" + this.name;
    };
    return User1;
}());
var tom1 = new User1();
tom1.id = 1;
tom1.name = "Tom";
console.log(tom1.getInfo());
var alice1 = new User1();
alice1.id = 2;
alice1.name = "Alice";
console.log(alice1.getInfo());
var User2 = (function () {
    function User2(userId, userName) {
        this.id = userId;
        this.name = userName;
    }
    User2.prototype.getInfo = function () {
        return "id:" + this.id + " name:" + this.name;
    };
    return User2;
}());
var tom2 = new User2(1, "Tom");
console.log(tom2.getInfo());
tom2.id = 4;
var alice = new User2(1, "Alice");
console.log(alice.getInfo());
var User5 = (function () {
    function User5(userId, userName) {
        this.id = userId;
        this.name = userName;
    }
    User5.prototype.getInfo = function () {
        return "id: " + this.id + " name: " + this.name;
    };
    return User5;
}());
var tom3 = new User5(1, "Tom");
console.log(tom3.getInfo());
tom3 = new User5(4, "Tom");
console.log(tom3.getInfo());
var Operation = (function () {
    function Operation() {
    }
    Operation.getSquare = function (radius) {
        return Operation.PI * radius * radius;
    };
    return Operation;
}());
Operation.PI = 3.14;
var result = Operation.getSquare(30);
console.log("Площадь круга с радиусом 30 равна" + result);
var result2 = Operation.PI * 30 * 30;
console.log(result2);
var Animal1 = (function () {
    function Animal1(theName) {
        this.name = theName;
    }
    Animal1.prototype.move = function (distanceInMeters) {
        if (distanceInMeters === void 0) { distanceInMeters = 0; }
        console.log(this.name + " moved " + distanceInMeters + " m.");
    };
    return Animal1;
}());
var Snake = (function (_super) {
    __extends(Snake, _super);
    function Snake(name) {
        return _super.call(this, name) || this;
    }
    Snake.prototype.move = function (distanceInMeters) {
        if (distanceInMeters === void 0) { distanceInMeters = 5; }
        console.log("Slithering...");
        _super.prototype.move.call(this, distanceInMeters);
    };
    return Snake;
}(Animal1));
var Horse = (function (_super) {
    __extends(Horse, _super);
    function Horse(name) {
        return _super.call(this, name) || this;
    }
    Horse.prototype.move = function (distanceInMeters) {
        if (distanceInMeters === void 0) { distanceInMeters = 45; }
        console.log("Galloping...");
        _super.prototype.move.call(this, distanceInMeters);
    };
    return Horse;
}(Animal1));
var sam = new Snake("Sammy the Snake");
var tom4 = new Horse("Tommy the Horse");
sam.move();
tom4.move(34);
var Animal2 = (function () {
    function Animal2(theName) {
        this.name = theName;
    }
    return Animal2;
}());
//new Animal2("Cat").name; //Ошибка: Propery "name" is private;
var Animal3 = (function () {
    function Animal3(theName) {
        this.name = theName;
    }
    return Animal3;
}());
var Rhino = (function (_super) {
    __extends(Rhino, _super);
    function Rhino() {
        return _super.call(this, "Rhino") || this;
    }
    return Rhino;
}(Animal3));
var Employee1 = (function () {
    function Employee1(theName) {
        this.name = theName;
    }
    return Employee1;
}());
var animal = new Animal3("Goat");
var rhino = new Rhino();
var employee1 = new Employee1("Bob");
animal = rhino;
//animal = employee; //Ошибка: Type Employee1 is not assignable to type Animal3
var Person = (function () {
    function Person(name) {
        this.name = name;
    }
    return Person;
}());
var Employee3 = (function (_super) {
    __extends(Employee3, _super);
    function Employee3(name, department) {
        var _this = _super.call(this, name) || this;
        _this.department = department;
        return _this;
    }
    Employee3.prototype.getElevatorPitch = function () {
        return "Hello, my name is " + this.name + " and I work in " + this.department + ".";
    };
    return Employee3;
}(Person));
var howard1 = new Employee3("Howard", "Sales");
console.log(howard1.getElevatorPitch());
//console.log(howard1.name); // ошибка: Property 'name' is protected
var Peson = (function () {
    function Peson(theName) {
        this.name = theName;
    }
    return Peson;
}());
var Employee2 = (function (_super) {
    __extends(Employee2, _super);
    function Employee2(name, department) {
        var _this = _super.call(this, name) || this;
        _this.department = department;
        return _this;
    }
    return Employee2;
}(Person));
var howard = new Employee2("Howard", "Sales");
var john = new Person("John"); // Ошибка: Конструктор класса &rsquo;Person&rsquo; protected
var Octopus1 = (function () {
    function Octopus1(theName) {
        this.numberOfLegs = 8;
        this.name = theName;
    }
    return Octopus1;
}());
var rob = new Octopus1("Robert");
//rob.name = "Bobert";//Ошибка: name is readonly  
var Octopus = (function () {
    function Octopus(name) {
        this.name = name;
        this.numberOfLegs = 8;
    }
    return Octopus;
}());
var Employee = (function () {
    function Employee() {
    }
    Object.defineProperty(Employee.prototype, "fullName", {
        get: function () {
            return this._fullName;
        },
        set: function (newName) {
            this._fullName = newName;
        },
        enumerable: true,
        configurable: true
    });
    return Employee;
}());
var employee123 = new Employee();
employee123.fullName = "Bob Smith"; //Срабатывает set-метод
console.log(employee123.fullName); //Срабатывает get-метод
var Grid = (function () {
    function Grid(scale) {
        this.scale = scale;
    }
    Grid.prototype.calculateDistanceFromOrigin = function (point) {
        var xDist = (point.x - Grid.origin.x);
        var yDist = (point.y - Grid.origin.y);
        return Math.sqrt(xDist * xDist + yDist * yDist) / this.scale;
    };
    return Grid;
}());
Grid.origin = { x: 0, y: 0 };
var grid1 = new Grid(1.0); // 1x scale
console.log(grid1.calculateDistanceFromOrigin({ x: 10, y: 10 }));
function getEmployeeInfo(user) {
    console.log("id: " + user.id);
    console.log("name: " + user.name);
}
function buildUser(userId, userName) {
    return { id: userId, name: userName };
}
var employee0 = {
    id: 1,
    name: "Tom"
};
console.log("id: " + employee0.id);
console.log("name: " + employee0.name);
var employee = {
    id: 1,
    name: "Alice",
    getFullName: function (surname) {
        return this.name + " " + surname;
    }
};
var fullName1 = employee.getFullName("Tompson");
console.log(fullName); // Alice Tompson
var phones;
phones = ["iPhone 7", "HTC 10", "Samsung 8"];
var myPhone = phones[0];
console.log(myPhone);
var mySearch;
mySearch = function (src, sub) {
    var result = src.search(sub);
    return result > -1;
};
var Clock = (function () {
    function Clock(h, m) {
    }
    Clock.prototype.setTime = function (d) {
        this.currentTime = d;
    };
    return Clock;
}());
var square = {};
square.color = "blue";
square.sideLength = 10;
square.penWidth = 5.0;
function getCounter() {
    var counter = function (start) { };
    counter.interval = 123;
    counter.reset = function () { };
    return counter;
}
var c1 = getCounter();
c1(10);
c1.reset();
c1.interval = 5.0;
var Control = (function () {
    function Control() {
    }
    return Control;
}());
var Button = (function (_super) {
    __extends(Button, _super);
    function Button() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Button.prototype.select = function () { };
    return Button;
}(Control));
//Ошибка: свойство "state" отсутствует в типе "Image".
/*class Image1 implements SelectableControl {
    select() { }
}*/
function identity(arg) {
    return arg;
}
var result1 = identity(5);
console.log(result);
var result3 = identity(5);
function loggingIdentity(arg) {
    console.log(arg.length); // Попытка вызова функции для простого аргумента вернет ошибку
    return arg;
}
var User11 = (function () {
    function User11(id) {
        this._id = id;
    }
    User11.prototype.getId = function () {
        return this._id;
    };
    return User11;
}());
var tom5 = new User11(3);
console.log(tom5.getId());
var alice5 = new User11("vsf");
console.log(alice5.getId());
var tom = new User11(3);
var User = (function () {
    function User(id) {
        this._id = id;
    }
    User.prototype.getId = function () {
        return this._id;
    };
    return User;
}());
function loggingIdentity1(arg) {
    console.log(arg.length);
    return arg;
}
//loggingIdentity1(3); //ошибка '3' нельзя присвоить к параметру типа Lenghtwise
loggingIdentity1({ length: 10, value: 3 }); //вручную задали свойство – нет ошибки
var mobiles_1 = require("./mobiles");
var eyephone1 = new mobiles_1.Smartphone();
eyephone1.model = "eyephone Pro";
//Или для импорта модуля целиком
var mobiles = require("./mobiles");
var eyephone = new mobiles.Smartphone();
//# sourceMappingURL=file.js.map