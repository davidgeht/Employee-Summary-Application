// importing all the question fields
const  {managerQuestion, internQuestion, engineerQuestion, addMember } = require("./questions")
//  importing all employee classes 
const Manager = require("./class-manager");
const Engineer = require("./class-engineer");
const Intern = require("./class-intern");

const fs = require("fs");
const inquirer = require("inquirer");
const util = require("util");
const writeFileAsync = util.promisify(fs.writeFile);

var teamARR=[];
async function teamInfo(){
inquirer.prompt(managerQuestion)
.then(function(managerQuestion){
    let managerData = new Manager(managerQuestion.name,managerQuestion.ID,managerQuestion.Email,managerQuestion.officeNum);
    console.log(managerData);
    teamARR.push(managerData);
})
.then(newMember)
};

 function newMember(){
    inquirer.prompt(addMember)
    .then(function(addMember){
        if (addMember.choice === "Engineer"){
             newEngineer()
        }else if (addMember.choice === "Intern"){
             newIntern()
        }else {
            console.log('You have created your team!')
            console.log(teamARR[1]);
        }
    })
};

 function newEngineer(){
    inquirer.prompt(engineerQuestion)
    .then( function(engineerQuestion){
      let engineerData  = new Engineer(engineerQuestion.name,engineerQuestion.id,engineerQuestion.email,engineerQuestion.github);
    teamARR.push(engineerData);
    })
    .then(newMember)
};

async function newIntern(){
    inquirer.prompt(internQuestion)
    .then(await function(internQuestion){
        let internData = new Intern(internQuestion.name,internQuestion.ID,internQuestion.email,internQuestion.school);
        console.log(internData);
        teamARR.push(internData);
    })
    .then(newMember)
};


module.exports = teamInfo;