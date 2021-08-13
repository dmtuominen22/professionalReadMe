// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');


// TODO: Create an array of questions for user input
// const questions = [];

const promptUser = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is the name of your Project?',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter your Projects Name!');
                    return false;
                }
            }
        },
        // Next question goes here
    ]);
};

// TODO: Create a function to write README file
function writeToFile(fileName, data) { }

// TODO: Create a function to initialize app
function init() { }

// Function call to initialize app
init();




// What is your project title:
// give your project a good title that makes sense

// Description:
// give a good description of what your project is and what it is about


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