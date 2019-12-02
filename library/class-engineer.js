const Employee = require("./class-employee");

class Engineer extends Employee{
    constructor(name,id,email,gitHub){
        super(name,id,email);
        this.gitHub = gitHub;
        this.role = `Engineer`;
        
    }
    getGitHub(){
        return gitHub
    }
    getRole(){
        return this.role
    };

}

module.exports = Engineer;