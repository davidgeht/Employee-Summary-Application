const Employee = require("./class-employee");

class Manager extends Employee {
    constructor(name,id,title,email,role,officeNumber){
        super (name,id,title,email,role);
        this.officeNumber = officeNumber;
        
    }
    getRole(){
        return role
    };
}

 
module.exports = Manager;