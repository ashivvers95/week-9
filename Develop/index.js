// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js');

// // TODO: Create an array of questions for user input
 const questions = [{
  type: 'input',
  name: 'projectTitle',
  message: 'What is your projects name?(Required)',
  validate: titleInput => {
    if (titleInput) {
      return true;
    }else{
      console.log('Please enter your project name!');
      return false;
    }
  }
},
{
  type: 'input',
  name: 'description',
  message: 'Please describe your project. (Required)',
  validate: description => {
    if (description) {
      return true;
    }else{
      console.log('Please enter a description.');
      return false;
    }
  }
},
{ 
  type: 'input',
  name: 'installation',
  message: 'How do you install the application?(Required)',
  validate: installation => {
    if (installation) {
      return true;
    }else{
      console.log('How do you install the application?');
      return false;
    }
  }
},
{
  type: 'input',
  name: 'usage',
  message: 'How do you use your application?(Required)',
  validate: usage => {
    if (usage) {
      return true;
    }else{
      console.log('How do you use your application?');
      return false;
    }
  }
},
{
  type: 'confirm',
  name: 'confirmLicenses',
  message: 'Would you like to add licenses?',
  default: false
},
{
  type: 'input',
  name: 'licenses',
  message: 'What is your license?',
  when: ({ confirmLicenses }) => confirmLicenses
},
{
  type: 'confirm',
  name: 'confirmTableOfContents',
  message: 'Would you like to feature a table of contents on your README file?',
  default: false
},
{
  type: 'checkbox',
  name: 'tableOfContents',
  message: 'What sections would you like for your table of contents',
  choices: ['Project Title', 'Description', 'Installation', 'Usage', 'Licenses', 'Contributing', 'Tests', 'Questions'],
  when: ({ confirmTableOfContents }) => confirmTableOfContents
},
{
  type: 'confirm',
  name: 'confirmContributing',
  message: 'Do you have other contributors that you would like to credit on your README?',
  default: false
},
{
  type: 'input',
  name: 'contributing',
  message: 'Please input the names of those that contributed to your application.',
  when: ({ confirmContributing }) => confirmContributing
  
},
{
  type: 'confirm',
  name: 'confirmTests',
  message: 'Would you like to feature a test for your application?',
  default: false
},
{
  type: 'input',
  name: 'tests',
  message: 'How would we test your project?',
  when: ({ confirmTests }) => confirmTests
},
{
  type:'input',
  name: 'github',
  message: 'Enter your GitHub Username',
  validate: githubInput => {
    if (githubInput) {
      return true;
    }else{
      console.log('Please enter your name!');
      return false;
    }
  }
},
{
  type: 'input',
  name: 'contactInfo',
  message: 'Please input your contact information.',
 
},
];


function init() {
  return inquirer
  .prompt(questions)
  .then(answers => {
    fs.writeFile('output/README.md', generateMarkdown({...answers}), err => {
      if (err) throw err;
  });
  }
  )
};


// function writeToFile() {
//   fs.writeFile('output/README.md', JSON.stringify(), err => {
//     if (err) throw err;
//     return generateMarkdown();
// });
// }
// // TODO: Create a function to write README file
// function writeToFile() {
//     fs.writeFile('./README.md', err => {
//         if (err) throw new Error (err);
//     });
// };

//writeToFile();
// // TODO: Create a function to initialize app
// function init() {}

// // Function call to initialize app
init();
