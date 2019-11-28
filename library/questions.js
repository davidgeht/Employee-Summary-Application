const inquirer=require("inquirer");
const Manager=require("./class-manager");

function  managerQuestions(){
const managerQuestion = [
    {
        message:'What is your team name ?',
        name:'teamName'
    },
    {
        message:'What is the managers name ?',
        name: "managerName"
      },
      {
          message:'What is the managers ID ?',
          name:'managerID'
      },
      {
          message:'What is the managers email?',
          name:'managerEmail'
      },
      {
          message:'What is the managers office number?',
          name:'managersOffNum'
      }
];

inquirer.prompt(managerQuestion)
.then(function(managerQuestion){
    let manager1 = new Manager(managerQuestion.managerName,managerQuestion.managerID,"Manager",managerQuestion.managerEmail,"",managerQuestion.managerOffNum);
    console.log(manager1);
});
};
function addMembers(){
const addMember =[
    {
    message: "Would you like to add another member ?",
    choices:['Engineer','Intern','I dont want to add any more members']
    }
    
];
};
function engQuestions(){
const engineerQuestions = [
    {
        message: 'Enter Engineers Name:',
        name: 'engineerName'
      },
      {
        message: 'What is the engineers id?',
        name: 'engineerID'
      },
      {
        message: 'What is the managers email?',
        name: 'engineerEmail'
      },
      {
        message: 'What is engineers Github username?',
        name: 'engineerGithub'
      }
]
};
function internQues(){
const internQuestions = [
    {
        message: 'Enter Intern’s Name:',
        name: 'internName'
      },
      {
        message: 'What is the intern id?',
        name: 'internId'
      },
      {
        message: 'What is the managers email?',
        name: 'engineerEmail'
      },
      {
        message: 'What is there interns office number?',
        name: 'internSchool'
      }
];
};
module.exports = managerQuestions;
module.exports = internQues;
module.exports = engQuestions;
module.exports = addMembers;
module.exports = managerQuestions;