// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown')

// TODO: Create an array of questions for user input
let questions = inquirer
.prompt([
    {
        type: 'input',
        name: 'title',
        message: 'What is your project title?',
      },
      {
        type: 'input',
        name: 'description',
        message: 'What is your description?',
      },
      {
        type: 'input',
        name: 'instructions',
        message: 'What is your installation instructions?',
      },
      {
        type: 'input',
        name: 'usage',
        message: 'What is your usage information?',
      },
      {
        type: 'input',
        name: 'contributors',
        message: 'Who are the contributors',
      },
      {
        type: 'list',
        message: 'What license do you prefer',
        name: 'license',
        choices: ['Apache', 'Boost', 'BSD', 'CC0','N/A'],
      },
      {
        type: 'input',
        message: 'What are the test procedures',
        name: 'test',
      },
      {
        type: 'input',
        message: 'How to contribute',
        name: 'contribute',
      },
      {
        type: 'input',
        name: 'Github',
        message: 'What is your GitHub username ?',
      },
      {
        type: 'input',
        name: 'email',
        message: 'What is your email address?',
      }
])
.then((response) => {
console.log(response)
writeToFile("README.md", generateMarkdown(response));
}
);
// .then((answers) => {
//     // Use user feedback for... whatever!!
//   })
//   .catch((error) => {
//     if (error.isTtyError) {
//       // Prompt couldn't be rendered in the current environment
//     } else {
//       // Something else went wrong
//     }
//   });


// questions.forEach((string)=>writeToFile(string))
// // TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile('Readme.md',data, (err) =>
    err ? console.error(err) : console.log('Data wrtten to the file successfully')
    ); 
}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
