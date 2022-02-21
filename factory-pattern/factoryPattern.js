class Developer {
    constructor(type,name) {
        this.type = type;
        this.name = name;
    }
}

class Tester {
    constructor(type,name) {
        this.type = type;
        this.name = name;
    }
}

class EmployeeFactory {
    // can call whit out making instance.
    static create(type,name) {
        if(type === 'Developer') return new Developer(type,name);
        if(type === 'Tester') return new Tester(type,name);
    }
}
let Persons = [
    EmployeeFactory.create('Developer', 'Mohammad'),
    EmployeeFactory.create('Tester', 'Reza'),
    EmployeeFactory.create('Developer', 'Zahra'),
    EmployeeFactory.create('Developer', 'Ali'),
    EmployeeFactory.create('Tester', 'Roya')
]

for (const Person of Persons) {
    console.log(Person.type , Person.name);
}