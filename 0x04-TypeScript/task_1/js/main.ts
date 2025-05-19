export interface Teacher{
    readonly firstName: string;
    readonly lastName: string;
    fullTimeEmployer: boolean;
    yearsOfExperience?: boolean;
    location: string;
    [key: string]: any;
}

export interface Directors extends Teacher{
    numberOfReports: number;
}

export interface printTeacherFunction{
    (firstName: string, lastName: string): string;
}

export const printTeacher: printTeacherFunction = (firstName, lastName) =>{
    let firstLetter: string = firstName.split('')[0];
    return firstLetter + ". " + lastName;
}

interface StudentConstructor{
    firstName: string;
    lastName: string;
}

interface StudentClassInterface{
    workOnHomework(): string;
    displayName(): string;
}

class StudentClass implements StudentClassInterface{
    private firstName: string;
    private lastName: string;

    constructor({firstName, lastName}: StudentConstructor) {
        this.firstName = firstName;
        this.lastName = lastName;
    }


     workOnHomework(): string {
        return "Currently working";
    }

    displayName(): string{
        return this.firstName;
    }
}
