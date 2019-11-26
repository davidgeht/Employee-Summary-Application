const employee = require("./class-employee");

class Intern extends Employee{
    constructor(name,id,title,email,role,school){
        this.name = name;
        this.id = id;
        this.title = title;
        this.email = email;
        this.role = role;
        this.school = school;

    }
    getSchool(){
        return school
    };
}

module.exports = Intern;