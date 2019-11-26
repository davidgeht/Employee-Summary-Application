const employee = require("./class-employee");

class Engineer extends Employee{
    constructor(name,id,title,email,role,gitHub){
        this.name = name;
        this.id = id;
        this.title = title;
        this.email = email;
        this.role = role;
        this.gitHub = gitHub;
        super(name,id,title,email,role);
    }
    getGitHub(){
        return gitHub
    };
    getRole(){
        return this.role
    };

}

module.exports = Engineer;