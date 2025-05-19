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


