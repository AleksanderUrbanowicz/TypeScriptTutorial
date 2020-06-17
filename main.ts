
import { Point } from './point';

function log(message){

    console.log(message);
}


function doSth(){
    for (let i=0;i<5;i++)
    {
        console.log(i);
    }
    
}

doSth();

//Variables
let count = 5;
let n: number;
let b: boolean;
let a: any;
let u: undefined;
let aN: Array<number> = [1,2,3];
let aA: any[] = [1,2,3];
const ColorRed = 0;
enum Color {Red = 0, Green, Blue};
let color = Color.Red;

//Type assertions
let messageString = 'messageString';
let messageAny;
messageAny = 'messageAny';
//ES6
let endsWith = messageString.endsWith('ing');
let endsWith2 = (<string>messageAny).endsWith('Any');

log(endsWith);
log(endsWith2);

//Arrow functions( lambda expresions )
let log2 = (message) =>{
    console.log(message)
}

//log2(messageString);

//Custom types
// interface IPoint{
//     x: number,
//     y: number,
//     z: number
// }



let point1: Point = new Point(2,4,6);
let point2: Point = new Point(1,2,3);
let point3: Point = new Point();
log (point1.renderPoint());