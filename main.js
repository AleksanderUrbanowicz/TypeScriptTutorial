function log(message) {
    console.log(message);
}
function doSth() {
    for (let i = 0; i < 5; i++) {
        console.log(i);
    }
}
doSth();
//Variables
let count = 5;
let n;
let b;
let a;
let u;
let aN = [1, 2, 3];
let aA = [1, 2, 3];
const ColorRed = 0;
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
;
let color = Color.Red;
//Type assertions
let messageString = 'messageString';
let messageAny;
messageAny = 'messageAny';
//ES6
let endsWith = messageString.endsWith('ing');
let endsWith2 = messageAny.endsWith('Any');
log(endsWith);
log(endsWith2);
//Arrow functions( lambda expresions )
let log2 = (message) => {
    console.log(message);
};
//log2(messageString);
//Custom types
// interface IPoint{
//     x: number,
//     y: number,
//     z: number
// }
class Point {
    //TS compiler generates fields from constructor
    // private x: number;
    // private y: number;
    // private z: number;
    //only one constructor in TS,
    constructor(_x, _y, _z) {
        this._x = _x;
        this._y = _y;
        this._z = _z;
        //Assigments done automatically by access modifiers above
        // this.x=x;
        // this.y=y;
        // this.z=z;
    }
    //in TS default modifier is public
    renderPoint() {
        return this._x * this._y * this._z;
    }
    calculateDistance(from) {
    }
    //Properties
    get x() {
        return this._x;
    }
    set x(value) {
        this._x = value;
    }
    get y() {
        return this._y;
    }
    set y(value) {
        this._y = value;
    }
    get z() {
        return this._z;
    }
    set z(value) {
        this._z = value;
    }
}
let point1 = new Point(2, 4, 6);
let point2 = new Point(1, 2, 3);
let point3 = new Point();
log(point1.renderPoint());
