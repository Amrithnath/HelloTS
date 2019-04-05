class Point{//.class
    // private x:number;
    // private y:number;//private cant be accessed outside class unless through constructor(default is Public) Public Protected and private
    constructor(private x?:number,private y?:number){
        //'?' makes the argument optional, Important *** if one of the arguments is optional all must be optional TS rule***
    }
    draw(){
        console.log("X: "+this.x+",Y :" +this.y);
    }
    private getDistance(another:Point){
        console.log(this.x-this.y)
    }
    get X(){
        return this.x;
    }
    get Y(){
        return this.y;
    }
    set X(value){
        if(value <0){
            throw new Error('value cannot be less than 0.');
        }
        else{
            this.x=value;
        }
    }
}
let point = new Point(1,2);//object (instance of class)
let x = point.X;
let y = point.Y;
point.X=10;
point.draw();
