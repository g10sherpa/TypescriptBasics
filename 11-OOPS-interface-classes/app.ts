interface IEmployee{
    firstName: string;
    lastName: string;
    age: number;
    designation : string;

    fullName :() => string;
    biography :() => void;
}

class Employee implements IEmployee{
    public firstName :string;
    public lastName : string;
    public age : number;
    public designation : string;

    constructor(firstName: string, lastName: string, age:number, designation:string){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.designation = designation;
    }
    public fullName():string{
        return `${this.firstName} ${this.lastName}`;
    }
    public biography():void{
        let bio:string = `Name : ${this.fullName()} \n Age: ${this.age} \n Designation : ${this.designation}`
        console.log(bio);
    }
}

let employee:Employee = new Employee("john", "fff", 59, "professor");
employee.biography();

