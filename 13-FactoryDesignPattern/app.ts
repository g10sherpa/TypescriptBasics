import { Shape } from "./shape";
import { ShapeFactory } from "./shape_factory";

class App{
    public static main():void{
        let shapeFactory:ShapeFactory = new ShapeFactory();
        
        //circle
        let circle:Shape = shapeFactory.getShape('CIRCLE');
        circle.draw();

        //rectangle
        let rectangle:Shape = shapeFactory.getShape('RECTANGLE');
        rectangle.draw();

        //square
        let square:Shape = shapeFactory.getShape('SQUARE');
        square.draw();
    }
}

App.main();