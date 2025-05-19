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
