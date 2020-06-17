export class Point {
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
