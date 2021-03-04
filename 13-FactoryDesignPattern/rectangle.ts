import {Shape} from './shape';

export class Rectangle implements Shape{
    public draw():void{
        console.log(`rectangle : rectangle drawing`);
    }
}