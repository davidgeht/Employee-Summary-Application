// Question prompts to create Manager 

const managerQuestion = [
  {
      message: "Welcome to creating your TEAM - Enter your Team Name : ",
      name: "teamName", 
      default: "Google DEV",
      type: "input",
      validate: function(value){
        var string = value.match(/^\s*\S+.*/);
        if (string) {
          return true;
        } else {
          return "Please enter a Team Name";
        }
      }
    },
  {
      message: "Enter Managers Name : ",
      name: "name",
      default: "Wayne Gretzky",
      type: "input",
      validate: function(value){
        var string = value.match(/^\s*\S+.*/);
        if (string) {
          return true;
        } else {
          return "Please enter the Manager's name who will be Team Lead";
        }
      }
    },
    {
      message: "What is the Managers employee id ? ",
      name: "id",
      default: "001",
      type: "input",
      validate: function( value ) {
        var valid = !isNaN(parseFloat(value));
        return valid || "Please enter a Number";
      },
    },
    {
      message: "What is the Managers email address ? ",
      name: "email",
      default:"johnsmith@gmail.com",
      type:"input",
      validate: function(value){
        var data =value.match(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
        if (data) {
          return true;
        } else {
          return "Please enter a VALID email address";
        }
      }
      
    },
    {
      message: "What is the Manager's office number ? ",
      name: 'officeNumber',
      default:"123 456 7890",
      type:"input",
      validate: function(value){
        const phone = value.match(/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/);
        if (phone) {
          return true;
        } else {
          return "Please enter a VALID phone number";
        }
      }
  
    }
  ]
  
  // Question prompts to add new Members
  
  const addMember = [
    {
        type: "list",
        message: "Add new members to your Team ? ",
        choices: ['Engineer', 'Intern', 'NO'],
        name: "choice"
    }
  ]
  
  // Question prompts to create an Engineer 
  
      
  const engineerQuestion = [
  {
      message: "Enter Engineers Name : ",
      name: "name",
      default:"Lebron James",
      type: "input",
      validate: function(value){
        var string = value.match(/^\s*\S+.*/);
        if (string) {
          return true;
        } else {
          return "Please enter the Engineer's Name";
        }
      }
    },
    {
      message: "What is the Engineers employee id ? ",
      name: "id",
      default: "02",
      type: "input",
      validate: function( value ) {
        var valid = !isNaN(parseFloat(value));
        return valid || "Please enter a Number";
      },
  
    },
    {
      message: "What is the Engineers email address ? ",
      name: "email",
      default:"bobsaget@gmail.com",
      type:"input",
      validate: function(value){
        var data =value.match(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
        if (data) {
          return true;
        } else {
          return "Please enter a VALID email address";
        }
      }
  
    },
    {
      message: "What is Engineers Github username ? ",
      name: "github",
      default:"git",
      type: "input",
      validate: function(value){
        var string = value.match(/^\s*\S+.*/);
        if (string) {
          return true;
        } else {
          return "Please enter the Engineer's Github username";
        }
      }
    }
  ]
  
  // Question prompts to create an Intern 
  
      
  const internQuestion = [
  {
      message: "Enter Intern's Name : ",
      name: "name",
      default:"John Smith",
      type: "input",
      validate: function(value){
        var string = value.match(/^\s*\S+.*/);
        if (string) {
          return true;
        } else {
          return "Please enter a Intern's name";
        }
      }
    },
    {
      message: "What is the Intern's employee id ? ",
      name: "id",
      default: "003",
      type: "input",
      validate: function( value ) {
        var valid = !isNaN(parseFloat(value));
        return valid || "Please enter a Number";
      },
  
    },
    {
      message: "What is the Intern's email ? ",
      name: "email",
      default:"ryanhoward@gmail.com",
      type:"input",
      validate: function(value){
        var data =value.match(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
        if (data) {
          return true;
        } else {
          return "Please enter a VALID email address";
        }
      }
    },
    {
      message: "What is there Intern's current school / university ? ",
      name: "school", 
      default:"University of Toronto",
      type: "input",
      validate: function(value){
        var string = value.match(/^\s*\S+.*/);
        if (string) {
          return true;
        } else {
          return "Please enter a College/University Name";
        }
      }
    },
  ]
module.exports = {
    managerQuestion,
    internQuestion,
    engineerQuestion,
    addMember
};