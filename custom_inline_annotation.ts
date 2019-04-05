class Point{//.class
    x:number;
    y:number;
    draw(){
        console.log("X: "+this.x+",Y :" +this.y);
    }
    getDistance(another:Point){
        console.log(this.x-this.y)
    }
}

let point = new Point();//object (instance of class)
point.x=1;
point.x=2;
point.draw();
