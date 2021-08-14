// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
//  const questions = [];

const promptUser = () => {
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "What is the name of your Project?(Required)",
        validate: (nameInput) => {
          if (nameInput) {
            return true;
          } else {
            console.log("Please enter your Projects Name!");
            return false;
          }
        }
      },
      {
        type: "input",
        name: "description",
        message: "Please include a description of your Project?",
        validate: (nameInput) => {
          if (nameInput) {
            return true;
          } else {
            console.log("Please include a description of your Project!");
            return false;
          }
        }
      },
      {
        type: "confirm",
        name: "tableOfContentConfirm",
        message: "Would you like to include a Table of Content?",
        default: true
      },
      {
        type: "input",
        name: "installation",
        message: "Please include all of the installation instructions for your Project?",
        validate: (nameInput) => {
          if (nameInput) {
            return true;
          } else {
            console.log("Please include all of the installation instructions for your Project!");
            return false;
          }
        }
      },
      {
        type: "input",
        name: "usage",
        message: "Please include usage for your Project?",
        validate: (nameInput) => {
          if (nameInput) {
            return true;
          } else {
            console.log("Please include usage for your Project!");
            return false;
          }
        }
      },
      {
        type: "input",
        name: "credits",
        message: "Please include any credits for your Project?",
        validate: (nameInput) => {
          if (nameInput) {
            return true;
          } else {
            console.log("Please include any credits for your Project!");
            return false;
          }
        }
      },

      
    ])

    .then((answers) => {
      generateMarkdown(answers);
      let content = generateMarkdown(answers);
      console.log(content);
    });
};

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  // fs fs.writeFile
}

// TODO: Create a function to initialize app
function init() {
  promptUser();
}

// Function call to initialize app
init();




// Table of Content (Optional)
// If your README is very long, add a table of contents to make it easy for users to find what they need.
// Installation
// Usage
// Credits
// License

// Installation:
// What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.

// Usage:
// To add a screenshot, create an assets/images folder in your repository and upload your screenshot to it. Then, using the relative filepath, add it to your README using the following syntax:

// ![alt text](assets/images/screenshot.png)

// Credits:
// List your collaborators, if any, with links to their GitHub profiles.

// If you used any third-party assets that require attribution, list the creators with links to their primary web presence in this section.

// If you followed tutorials, include links to those here as well.

// License:
// The last section of a good README is a license. This lets other developers know what they can and cannot do with your project. If you need help choosing a license, use https://choosealicense.com/
