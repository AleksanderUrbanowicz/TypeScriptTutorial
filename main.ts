export {};

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

class Point{
    //TS compiler generates fields from constructor
    // private x: number;
    // private y: number;
    // private z: number;

    //only one constructor in TS,
    constructor(private _x?: number, private _y?: number, private _z?: number)
    {
        //Assigments done automatically by access modifiers above
        // this.x=x;
        // this.y=y;
        // this.z=z;
    }

    //in TS default modifier is public
    renderPoint() {
        return this._x*this._y*this._z;
        }

    calculateDistance (from: Point){

    }

    //Properties
    get x()
    {
        return this._x;
    }
    set x(value){
        this._x=value;
    }

    get y()
    {
        return this._y;
    }
    set y(value){
        this._y=value;
    }

    get z()
    {
        return this._z;
    }
    set z(value){
        this._z=value;
    }
}

let point1: Point = new Point(2,4,6);
let point2: Point = new Point(1,2,3);
let point3: Point = new Point();
log (point1.renderPoint());