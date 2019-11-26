const employee = require("./class-employee");

class Manager extends Employee {
    constructor(name,id,title,email,role,officeNumber){
        this.officeNumber = officeNumber;

        super(name,id,title,email,role);
    }
    getRole(){
        return role
    };
}


module.exports = Manager;