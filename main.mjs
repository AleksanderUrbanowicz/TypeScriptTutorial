import { Point } from './point';
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
let point1 = new Point(2, 4, 6);
let point2 = new Point(1, 2, 3);
let point3 = new Point();
log(point1.renderPoint());
