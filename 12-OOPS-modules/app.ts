import {Employee} from './Employee';
class App{
    public static main():void{
        let employee:Employee = new Employee("john", "fff", 59, "professor");
        employee.biography();
    }
}
App.main();
