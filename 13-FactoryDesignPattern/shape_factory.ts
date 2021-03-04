import { Circle } from "./circle";
import { Rectangle } from "./rectangle";
import { Shape } from "./shape";
import { Square } from "./square";

export class ShapeFactory {

    public getShape(str:String):Shape{
        switch(str){
            case 'CIRCLE':
                return new Circle();

            case 'SQUARE':
                return new Square();

            case 'RECTANGLE':
                return new Rectangle();
                
            default : return null;
        }
    }

}