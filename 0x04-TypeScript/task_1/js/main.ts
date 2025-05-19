 interface Teacher{
    readonly firstName: string;
    readonly lastName: string;
    fullTimeEmployer: boolean;
    yearsOfExperience?: boolean;
    location: string;
    [key: string]: any;
}
