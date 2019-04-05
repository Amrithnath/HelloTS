import {Point} from './custom_inline_annotation';

let point = new Point(1,2);//object (instance of class)
let x = point.x;
let y = point.y;
point.x=10;
point.draw();