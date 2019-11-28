const employee = require("./class-employee");

class Engineer extends Employee{
    constructor(name,id,title,email,role,gitHub){
        super(name,id,title,email,role);
        this.gitHub = gitHub;
        
    }
    getGitHub(){
        return gitHub
    };
    getRole(){
        return this.role
    };

}

module.exports = Engineer;