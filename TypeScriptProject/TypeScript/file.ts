let isDone: boolean = false;

let  decimal: number = 6;
let  hex: number = 0xf00d;
let  binary: number = 0b1010;
let  octal: number = 0o744;

let  color: string = 'blue';
color = 'red';

let fullName: string = `Bob Bobbington`;
let age: number = 37;
let sentence1: string = `Hello, my name is ${ fullName }. I'll be ${ age + 1 } years old next month.`;

let sentence2: string = `Hello, my name is " + fullName + .\n\n + "I'll be " + (age + 1) + " years old next month.`;

let list1: number[] = [1, 2, 3];

let list2: Array<number> = [1, 2, 3];

///Объявляем переменную типа кортеж
let x: [string, number];
///Инициализация
x = ["hello", 10]; //Всё верно
///Инициализируем неверно
//x = [10, "hello"]; //Ошибка

console.log(x[0].substr(1)); // OK
//console.log(x[1].substr(1)); // Ошибка,"property 'substr' does not exist on type 'number'";

enum Color {Red, Green, Blue}
        let a: Color = Color.Green;

enum Color {Black = 1, White, Yellow}
        let b: Color = Color.Green;

enum Color {Purple = 1, Pink = 2, Cyan = 4}
        let c: Color = Color.Green;

 enum Color {Magenta = 1, Violet, Orange}
        let colorName: string = Color[2];
        alert(colorName) //отображает &rsquo;Green&rsquo; поскольку это значение присвоено элементу с индексом 2

let notSure1: any = 4;
        notSure1 = "maybe a string instead";
        notSure1 = false;//Да, пусть будет булевый тип

let notSure2: any = 4;
            notSure2.ifItExists(); // Нет ошибки, ifItExists может существовать при запуске
            notSure2.toFixed(); // Нет ошибки, toFixed существует (компилятор не проверяет)
            let prettySure: Object = 4;
            //prettySure.toFixed(); // Ошибка: Property "toFixed" does not exist on type "Object";.

let list: any[] = [1, true, "free"];
        list[1] = 100;

function warnUser(): void {
           alert("This is my warning message");
        }

 let unusable: void = undefined

 // Этим переменным других значений не задать
            let u: undefined = undefined;
            let n: null = null;

// Функция, возвращающая never, должна иметь недостижимую точку окончания
        function error(message: string): never {
              throw new Error(message);
        }
        
        function infiniteLoop( ): never {
             while (true) {
             }
        }  

let someValue1: any = "this is a string";
            let strLength1: number = (<string>someValue1).length;     

let someValue2: any = "this is a string";
            let strLength2: number = (someValue2 as string).length;

let person = {name:"Tom", age:23};
            console.log(person.name);
            //альтернативное обращение к свойству
            console.log(person["name"])      

class User1 {
             id: number;
             name: string;
             getInfo(): string {
                 return "id:" + this.id + " name:" + this.name;
             }
        }

let tom1: User1 = new User1();
tom1.id = 1;
tom1.name = "Tom";
console.log(tom1.getInfo());

let alice1: User1 = new User1();
alice1.id = 2;
alice1.name = "Alice";
console.log(alice1.getInfo());

class User2 {
            id: number;
            name: string;
            constructor(userId: number, userName: string) {      
                this.id = userId;
                this.name = userName;
            }
            getInfo(): string {
                return "id:" + this.id + " name:" + this.name;
            }
    }
    let tom2: User2 = new User2(1, "Tom");
    console.log(tom2.getInfo());
    tom2.id = 4;
    
    let alice: User2 = new User2(1, "Alice");
    console.log(alice.getInfo());

class User5 {
            id: number;
            name: string;
            constructor(userId: number, userName: string);
            constructor(userId: string, userName: string);
            constructor(userId: any, userName: string) {
        
                this.id = userId;
                this.name = userName;
            }
            getInfo(): string {
                return "id: " + this.id + " name: " + this.name;
            }
    }
   
let tom3: User5 = new User5(1, "Tom");
console.log(tom3.getInfo());
tom3 = new User5(4, "Tom");
console.log(tom3.getInfo());

 class Operation {
                 static PI: number = 3.14;
                 static getSquare(radius: number): number {
                     return Operation.PI * radius * radius;
                 }
            }
            let result = Operation.getSquare(30);
            console.log("Площадь круга с радиусом 30 равна"  + result);
            let result2 = Operation.PI * 30 * 30;
            console.log(result2)

class Animal1 {
             name: string;
             constructor(theName: string) { this.name = theName; }
             move(distanceInMeters: number = 0) {
                 console.log(`${this.name } moved ${distanceInMeters } m.`);
             }
        }

class Snake extends Animal1 {
            constructor(name: string) { super(name); }
            move(distanceInMeters = 5) {
                console.log("Slithering...");
                super.move(distanceInMeters);
            }
        }

class Horse extends Animal1 {
             constructor(name: string) { super(name); }
             move(distanceInMeters = 45) {
                 console.log("Galloping...");
                 super.move(distanceInMeters);
             }
        }

let sam = new Snake("Sammy the Snake");
let tom4: Animal1 = new Horse("Tommy the Horse");

sam.move()
tom4.move(34)

 class Animal2 {
             private name: string;
             constructor(theName: string) { this.name = theName; }
        }
//new Animal2("Cat").name; //Ошибка: Propery "name" is private;

 
class Animal3 {
        private name: string;
        constructor(theName: string) { this.name = theName; }
        }

class Rhino extends Animal3 {
        constructor() { super("Rhino"); }
}

class Employee1 {
        private name: string;
        constructor(theName: string) { this.name = theName; }
        }

let animal = new Animal3("Goat");
let rhino = new Rhino();
let employee1 = new Employee1("Bob")

animal = rhino;
//animal = employee; //Ошибка: Type Employee1 is not assignable to type Animal3

class Person {
             protected  name: string;
             constructor(name: string) { this.name = name; }
        }

        class Employee3 extends Person {
             private department: string;

             constructor(name: string, department: string) {
                 super(name);
                 this.department = department;
             }
        public getElevatorPitch() {
                 return `Hello, my name is ${this.name} and I work in ${this.department}.`;
             }
        }
                 
            let howard1 = new Employee3("Howard",  "Sales");
            console.log(howard1.getElevatorPitch());
           //console.log(howard1.name); // ошибка: Property 'name' is protected

                 class Peson {
                     protected name: string;
                     protected constructor(theName: string) { this.name = theName; }
                 }

                 class Employee2 extends Person {
                     private department: string;

                     constructor(name: string, department: string) {
                         super(name);
                         this.department = department;
                     }
                 }

let howard = new Employee2("Howard", "Sales");
let john = new Person("John"); // Ошибка: Конструктор класса &rsquo;Person&rsquo; protected

        
    class Octopus1 {
        readonly name: string;
        readonly numberOfLegs: number = 8;
        constructor(theName: string) {
            this.name = theName;
        }
    }

        let rob = new Octopus1("Robert")
        //rob.name = "Bobert";//Ошибка: name is readonly  

        class Octopus {
            readonly numberOfLegs: number = 8;
            constructor(readonly name: string) {
            }
        }

        class Employee {
            private _fullName: string;

            get fullName(): string {
                return this._fullName;
            }

            set fullName(newName: string) {
                this._fullName = newName;
            }
        }

        let employee123 = new Employee();
        employee123.fullName =  "Bob Smith"; //Срабатывает set-метод
        console.log(employee123.fullName);//Срабатывает get-метод

        class Grid {
             static  origin = {x: 0, y: 0};
        calculateDistanceFromOrigin(point: { x: number; y: number;}) {
            let xDist = (point.x - Grid.origin.x);
            let yDist = (point.y - Grid.origin.y);
            return Math.sqrt(xDist * xDist + yDist * yDist) / this.scale;
        }
        constructor(public scale: number) { }
        }        

        let grid1 = new Grid(1.0);  // 1x scale
        console.log(grid1.calculateDistanceFromOrigin({ x: 10, y: 10 }));

        interface  IUser1 {
                id: number;
                name: string;
             }

        function getEmployeeInfo(user: IUser1): void {
            console.log("id: " + user.id);
            console.log("name: " + user.name)
        }

        function buildUser(userId: number, userName: string): IUser1 {
            return { id: userId, name: userName };
        }

        let employee0: IUser1 = {
            id: 1,
            name: "Tom"
        }

        console.log("id: " + employee0.id);
        console.log("name: " + employee0.name);

    interface IUser1 {
        id: number;
        name: string;
        age?: number;
            }

    interface IUser2 {
        id: number;
        name: string;
        getFullName(surname: string): string;
    }

    let employee: IUser2 = {
        id: 1,
        name: "Alice",
        getFullName: function (surname: string): string {
            return this.name + " " + surname;
        }
    }

let fullName1 = employee.getFullName("Tompson");
console.log(fullName); // Alice Tompson

interface StringArray {
    [index: number]: string;
}

let phones: StringArray;
phones = ["iPhone 7", "HTC 10", "Samsung 8"];

let myPhone: string = phones[0];
console.log(myPhone);

interface SearchFunc {
    (source: string, subString: string): boolean;
        }

let mySearch: SearchFunc;
mySearch = function (src: string, sub: string) {
    let result = src.search(sub);
    return result > -1;
}

interface ClockInterface {
    currentTime: Date;
    setTime(d: Date);
}

class Clock implements ClockInterface {
currentTime: Date;
setTime(d: Date) {        
    this.currentTime = d;
}
constructor(h: number, m: number) { }
        }

interface Shape {
    color: string;
}

interface Pen {
    penWidth: number;
}

interface Square extends Shape, Pen {
    sideLength: number;
}

let square = <Square>{};
square.color = "blue";
square.sideLength = 10;
square.penWidth = 5.0;

interface Counter {
    (start: number): string;
    interval: number;
    reset(): void;
}

function getCounter(): Counter {
    let counter = <Counter>function (start: number) { };
    counter.interval = 123;
    counter.reset = function () { };
    return counter;
}

let c1 = getCounter();
c1(10);
c1.reset();
c1.interval = 5.0;

class Control {
    private state: any;
}

interface SelectableControl extends Control {
    select(): void;
}

class Button extends Control implements SelectableControl {
    select() { }
}

//Ошибка: свойство "state" отсутствует в типе "Image".
/*class Image1 implements SelectableControl {
    select() { }
}*/

function identity<T>(arg: T): T {
    return arg;
}

let result1 = identity <number>(5);
console.log(result);

let result3 = identity(5);

function loggingIdentity<T>(arg: Array<T>): Array<T> {
    console.log(arg.length);  // Попытка вызова функции для простого аргумента вернет ошибку
    return arg;
}
    class User11<T> {
        private _id: T;
        constructor(id: T) {
            this._id = id;
        }
        getId(): T {
            return this._id;
        }
    }

    let tom5 = new User11<number>(3);
    console.log(tom5.getId());
    let alice5 = new User11<string>("vsf");
    console.log(alice5.getId());

    let tom = new User11<number>(3);
    //tom = new User11<string>("vsf"); // Ошибка: string is not assignable to type 'number'

    interface IUser<T> {
        getId(): T;
    }

    class User<T> implements IUser<T> {
        private _id: T;
        constructor(id: T) {
            this._id = id;
        }
        getId(): T {
            return this._id;
        }
    }

    interface Lengthwise {
        length: number;
    }

    function loggingIdentity1<T extends Lengthwise> (arg: T): T {
        console.log(arg.length);
        return arg;
    }

    //loggingIdentity1(3); //ошибка '3' нельзя присвоить к параметру типа Lenghtwise
    loggingIdentity1({ length: 10, value: 3 }); //вручную задали свойство – нет ошибки

    import { Smartphone as Superphone } from "./mobiles";
    let eyephone1: Superphone = new Superphone();
    eyephone1.model = "eyephone Pro";

    //Или для импорта модуля целиком
    import * as mobiles from "./mobiles";
    let eyephone: mobiles.Device = new mobiles.Smartphone();