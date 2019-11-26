class Employee {
    constructor(name,id,title,email,role){
        this.name = name;
        this.id = id;
        this.title = title;
        this.email = email;
        this.role = role;
    }
    getName(){
        return this.name
    };
    getId(){
        return this.id
    };
    getEmail(){
        return this.email
    };
}


module.exports = Employee;