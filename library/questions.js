
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

const addMember =[
    {
    message: "Would you like to add another member ?",
    choices:['Engineer','Intern','I dont want to add any more members']
    }
    
];

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
module.exports = managerQuestion;
module.exports = internQuestions;
module.exports = engineerQuestions;
module.exports = addMember;
module.exports = managerQuestions;