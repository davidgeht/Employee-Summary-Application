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


async function teamInfo(){
inquirer.prompt(managerQuestion)
.then(function(managerQuestion){

    //creating a new manager from the manager constructor class 
    var newManager = new Manager(managerQuestion.name,managerQuestion.id,managerQuestion.email,managerQuestion.officeNumber);
              
    var initialContent = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Sample HTML OUTPUT</title>
    
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
        <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.4.1/jquery.js"></script>
        <script src="https://code.jquery.com/jquery-3.4.1.slim.min.js" integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n" crossorigin="anonymous"></script>
        <script src="https://kit.fontawesome.com/96719df605.js" crossorigin="anonymous"></script>
        <style>
        #employeesInfo{
            border: dotted 2px #FBBC05;
            padding:10px;
            margin:10px;
            background-color:#4285F4;
            color:#FBBC05;
            box-shadow: 2px #FBBC05;
        }
        #employeesInfo:hover{
            border:2px solid #EA4335;
            transition: 1s;
            border-radius: 10%;
        }
        .jumbotron{
            background-color:#FBBC05;
            color:#EA4335;
        }
        body{
            background-color: #34A853;
        }
        .container-fluid{
            width: 100%;
        }
        .row{
            margin:auto;
            justify-content:center;
        }
        </style>

    </head>
    <body>
    
    <div class="jumbotron jumbotron-fluid">
    <div class="container">
                <h1 class="display-4 text-center"><i class="fas fa-users"></i> &nbsp; TEAM ${managerQuestions.teamName} &nbsp; <i class="fas fa-users"></i></h1>
            </div>
        </div>
    
        <div class="container-fluid">
    
            <div class="row">
    
                <div class="col-lg-3 col-md-3 col-sm-6 col-xs-12" id="employeesInfo">
            
                    <div id="nameRole">
                        <h4>${newManager.getName()}</h4>
                        <div class="row"><i class="fas fa-user-secret"></i><p> &nbsp; ${newManager.getRole()}</p></div>
                    </div>
            
                    <div>
                        <ul class="list-group">
                            <li class="list-group-item">ID : ${newManager.getId()}</li>
                            <li class="list-group-item">Email : <a href="mailto:${newManager.getEmail()}">${newManager.getEmail()}</a></li>
                            <li class="list-group-item" >Office No : <a href="tel:${newManager.getOfficeNumber()}">${newManager.getOfficeNumber()}</a></li>
                        </ul>
                    </div>  
            
                </div>
`;
            // creating HTML Page for output
    writeFileAsync(`./output/Team_Roaster.html`,initialContent);
    
})
.then(newMember)
    newMember();
};

 async function newMember(){
    inquirer.prompt(addMember)
    .then(function(addMember){
        // if user chooses to add engineer in the prompt option
        if (addMember.choice === "Engineer"){
             newEngineer()
        // if user chooses to add intern in the prompt option
        }else if (addMember.choice === "Intern"){
             newIntern()
        
        }else {
            var lastContent = `
        </div>
        </div>
        
        
    </body>
</html>
            `;
            // end html output and open in default browser 
            fs.appendFileSync(`./output/Team_Roaster.html`, lastContent);
            open('./output/Team_Roaster.html');

        };
});
 };

 function newEngineer(){
    inquirer.prompt(engineerQuestion)
    .then( function(engineerQuestion){
      var newEngineer  = new Engineer(engineerQuestion.name,engineerQuestion.id,engineerQuestion.email,engineerQuestion.github);
    
      var engineerDiv = 
      `<div class="col-lg-3 col-md-3 col-sm-6 col-xs-12" id="employeesInfo">
                
            <div id="nameRole">
                    <h4>${newEngineer.getName()}</h4>
                    <div class="row"><i class="fas fa-glasses"></i><p> &nbsp; ${newEngineer.getRole()}</p></div>
                </div>
                <div>
                    <ul class="list-group">
                        <li class="list-group-item">ID : ${newEngineer.getId()}</li>
                        <li class="list-group-item">Email : <a href="mailto:${newEngineer.getEmail()}">${newEngineer.getEmail()}</a></li>
                        <li class="list-group-item">Github : <a href="https://github.com/${newEngineer.getGithub()}" target="_blank">${newEngineer.getGithub()}</a></li>
                    </ul>
            </div>  
    
        </div>`;
        // append elements to output HTML file
        fs.appendFileSync(`./output/Team_Roaster.html`, engineerDiv);
        
        // ask to add more members 
        newMember()
    })
}


async function newIntern(){
    inquirer.prompt(internQuestion)
    .then(function(internQuestion){
        var newIntern= new Intern(internQuestion.name,internQuestion.ID,internQuestion.email,internQuestion.school);
        var internDiv = `
        <div class="col-lg-3 col-md-3 col-sm-6 col-xs-12" id="employeesInfo">
            <div id="nameRole">
                <h4>${newIntern.getName()}</h4>
                <div class="row"><i class="fas fa-user-graduate"></i><p> &nbsp; ${newIntern.getRole()}</p></div>
            </div>
            <div>
                <ul class="list-group">
                    <li class="list-group-item">ID : ${newIntern.getId()}</li>
                    <li class="list-group-item">Email : <a href="mailto:${newIntern.getEmail()}">${newIntern.getEmail()}</a></li>
                    <li class="list-group-item">School : ${newIntern.getSchool()}</li>
                </ul>
            </div>  
        
        </div>`;

        // append intern block to output HTML file
        fs.appendFileSync(`./output/Team_Roaster.html`, internDiv);

        // prompt to add more members to team
        newMember()
    })
};

module.exports = teamInfo;