class Point{//.class
    x:number;
    y:number;
    constructor(x?:number,y?:number){//'?' makes the argument optional, Important *** if one of the arguments is optional all must be optional TS rule***
        this.x=x;
        this.y=y;

    }
    draw(){
        console.log("X: "+this.x+",Y :" +this.y);
    }
    getDistance(another:Point){
        console.log(this.x-this.y)
    }
}

let point = new Point(1,2);//object (instance of class)
point.draw();
