const employee = require("./class-employee");

class Manager extends Employee {
    constructor(name,id,title,email,role,officeNumber){
        this.name = name;
        this.id = id;
        this.title = title;
        this.email = email;
        this.role = role;
        this.officeNumber = officeNumber;

        super(name,id,title,email,role);
    }
    getRole(){
        return role
    };
}


module.exports = Manager;