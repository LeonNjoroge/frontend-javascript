/// <reference path="./subjects/Subject.ts" />

export const cpp = new Subjects.Cpp();

export const cTeacher: Subjects.Teacher = {
    firstName: "John",
    lastName: "Doe",
    experienceTeachingC: 10
}

console.log("C++");

cpp.setTeacher(cTeacher);
console.log(cpp.getRequirements());
console.log(cpp.getAvailableTeacher());


export const java = new Subjects.Java();

console.log("Java");

java.setTeacher(cTeacher);
console.log(java.getRequirements());
console.log(java.getAvailableTeacher());


export const react = new Subjects.React();

console.log("React");

react.setTeacher(cTeacher);
console.log(react.getRequirements());
console.log(react.getAvailableTeacher());