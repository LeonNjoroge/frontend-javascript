interface DirectorInterface{
    workFromHome(): string;
    getToWork() : string;
    workDirectorTasks() : string;
}

interface TeacherInterface{
    workFromHome(): string;
    getCoffeeBreak() : string;
    workTeacherTasks() : string;
}

class Director implements DirectorInterface{

    workFromHome(): string {
        return "Working from home";
    }

    getToWork(): string {
        return "Getting a coffee break";
    }

    workDirectorTasks(): string {
        return "Getting to director tasks";
    }
}

class Teacher implements TeacherInterface{

    workFromHome(): string {
        return "Cannot work from home";
    }

    getCoffeeBreak(): string {
        return "Cannot have a break";
    }

    workTeacherTasks(): string {
        return "Getting to work";
    }
}

const createEmployee = (salary: number | string ): Director | Teacher =>
    typeof salary === 'number' && salary < 500
        ?  new Teacher()
        : new Director();

const isDirector = (employee: Director | Teacher): employee is Director => {
    return (employee as Director).workDirectorTasks !== undefined;
}

const executeWork = (employee: Director | Teacher): void => {
    if(isDirector(employee)){
        console.log(employee.workDirectorTasks());
    }else{
        console.log((employee as Teacher).workTeacherTasks());
    }
}

type Subjects = "Math" | "History";

const teachClass = (todayClass: Subjects): string =>{
    if(todayClass === "Math" ){
        return "Teaching Math";
    }else{
        return "Teaching History";
    }
}
