/**
 * RECAP:
 * > Classes are blueprints that when created make objects known as instances
 * > Classes are created with the 'new' keyword
 * > The constructor function is a special function that gets run when the class
 * is instantiated
 * > Instance methods can be added to classes similar to methods in objects
 * > Class methods can be added using the 'static' keyword
 */


class Student {
    constructor(firstName, lastName, age, year) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.year = year;
        this.age = age;
        this.suspensions = 0
        this.warnings = 0;
    }
    // these are instance methods; methods that can be called by an instance of this class
    info() {
        return `Name: ${this.firstName} ${this.lastName}\nAge: ${this.age}\nYear: ${this.year}\nWarnings: ${this.warnings}\nSuspensions: ${this.suspensions}`;
    }
    warn() {
        this.warnings++;
        if (this.warnings >= 3) {
            this.suspensions++;
            return `Maximum number of warnings exceeded! Suspended 1 week.`;
        }
        return `Warning received. Currently at ${this.warnings} warning(s)`;
    }
    showGrades() {
        for (const key in this.grades) {
            console.log(`${key}: ${this.grades[key]}`);
        }
    }

    // this is a class method (using the keyword 'static'), these type of methods are called
    // without instantiating their class and cannot be called through an class instance; they
    // are often used to create utility functions for an application
    static enrollStudents(...students) {
        // send an email to every student that has been enrolled notifying him
    }

}

let firstStudent = new Student('Mihai', 'Badoiu', 23, 1);
