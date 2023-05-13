import inquirer from "inquirer";
import {generateMarkdown} from "./utlis/MarkdownGenerator.js";
import { promises as fs } from 'fs'
// import generate from ('./utlis/GenerateMarkDown')


// TODO: Create an array of questions for user input
const questions = [];



// TODO: Create a function to write README file
function writeToFile(fileName, data) {}


// TODO: Create a function to initialize app
function init() {
    inquirer
    .prompt([
      /* Pass your questions in here */
      {
        type: 'input',
        message: 'What is your user name of your project?',
        name: 'title',
        validate: (input)=> input ? true : "Enter input"
      },
      {
        type: 'input',
        message: 'Provide a short description?',
        name: 'description',
        validate: (input)=> input ? true : "Enter input"
        
      },
      {
        type: 'list',
        message: 'What liscense did you use for this project',
        name: 'license',
        choices: ['MIT', 'Apache 2.0', 'Mozilla Public']
      },
      {
        type: 'input',
        message: 'Steps to install project?',
        name: 'install',
        validate: (input)=> input ? true : "Enter input"
      },
      {
        type: 'input',
        message: 'List resources used to create app?',
        name: 'resources',
        validate: (input)=> input ? true : "Enter input"
      },
      {
        type: 'input',
        message: 'How can you can someon contribute to your project?',
        name: 'contribute',
        validate: (input)=> input ? true : "Enter input"
      },


    ])
    .then((answers) => {
    //   const fileName = "README-Generator.md"
    
    const fileData = generateMarkdown(answers)
    fs.writeFile("README.md", generateMarkdown(answers), (err) => {
      if (err) {
        return console.log(err);f
      }
    })
    })
    .catch((error) => {
      if (error.isTtyError) {
    //  `Prompt couldn't be rendered in the current environment`
       console.log(errmessage)
      } else {
        // Something else went wrong
      }
    });
  


}

// Function call to initialize app
init();


