const employee = require("./class-employee");

class Intern extends Employee{
    constructor(name,id,title,email,role,school){
        this.school = school;
        super(name, id, title, email, role, school);

    }
    getSchool(){
        return school
    };
}

module.exports = Intern;