
const managerQuestion = [
    {
        message:'What is your team name ?',
        name:"teamName"
    },
    {
        message:'What is the managers name ?',
        name: "name"
      },
      {
          message:'What is the managers ID ?',
          name:'ID'
      },
      {
          message:'What is the managers email?',
          name:'Email'
      },
      {
          message:'What is the managers office number?',
          name:'officeNum'
      }
];

const addMember =[
    {
    type: 'list',
    message: "Would you like to add another member ?",
    choices:['Engineer','Intern','I dont want to add any more members'],
    name: 'choice'
    }
    
];

const engineerQuestion = [
    {
        message: 'Enter Engineers Name:',
        name: 'name'
      },
      {
        message: 'What is the engineers id?',
        name: 'ID'
      },
      {
        message: 'What is the engineers email?',
        name: 'email'
      },
      {
        message: 'What is engineers Github username?',
        name: 'github'
      }
]


const internQuestion = [
    {
        message: 'Enter interns name:',
        name: 'name'
      },
      {
        message: 'What is the intern id?',
        name: 'ID'
      },
      {
        message: 'What is the interns email?',
        name: 'email'
      },
      {
        message: 'What school did the Intern Attend?',
        name: 'school'
      }
];
module.exports = {
    managerQuestion,
    internQuestion,
    engineerQuestion,
    addMember
};