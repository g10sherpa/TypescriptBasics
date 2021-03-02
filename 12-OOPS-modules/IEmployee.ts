export interface IEmployee{
    firstName: string;
    lastName: string;
    age: number;
    designation : string;

    fullName :() => string;
    biography :() => void;
}