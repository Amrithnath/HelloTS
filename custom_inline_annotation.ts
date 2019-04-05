export class Point{//.class
    // private x:number;
    // private y:number;//private cant be accessed outside class unless through constructor(default is Public) Public Protected and private
    constructor(private _x?:number,private _y?:number){
        //'?' makes the argument optional, Important *** if one of the arguments is optional all must be optional TS rule***
    }
    draw(){
        console.log("X: "+this._x+",Y :" +this._y);
    }
    private getDistance(another:Point){
        console.log(this._x-this._y)
    }
    get x(){
        //getter method
        //this is a property example to get a private field's value from a class
        return this._x;
    }
    get y(){
        //getter method
        return this._y;
    }
    set x(value){
        //setter method
        //this is a property example to set a private field's value in a calss
        if(value <0){
            throw new Error('value cannot be less than 0.');
        }
        else{
            this._x=value;
        }
    }
}
// let point = new Point(1,2);//object (instance of class)
// let x = point.x;
// let y = point.y;
// point.x=10;
// point.draw();
