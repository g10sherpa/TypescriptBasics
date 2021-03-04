import {Shape} from './shape';

export class Square implements Shape{
    public draw():void{
        console.log(`square : drawing square`);
    }
}