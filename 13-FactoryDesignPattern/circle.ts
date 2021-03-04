import {Shape} from './shape';

export class Circle implements Shape{
    public draw():void{
        console.log(`circle : drawing circle`);
    }
}