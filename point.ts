export class Point{
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