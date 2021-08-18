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
        },
      },

      {
        type: "input",
        name: "email",
        message: "What is your contact e-mail address? (Required)",
        validate: (emailInput) => {
          if (emailInput) {
            return true;
          } else {
            console.log("Please enter your contact e-mail!");
            return false;
          }
        },
      },

      {
        type: "confirm",
        name: "tableOfContentConfirm",
        message: "Would you like to include a Table of Content?",
        default: true,
      },

      {
        type: "input",
        name: "github",
        message: "Enter your GitHub URL (Required)",
        validate: (githubInput) => {
          if (githubInput) {
            return true;
          } else {
            console.log("Please enter your GitHub username!");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "link",
        message: "Enter the URl to  where your GitHub project is deployed.",
        validate: (linkInput) => {
          if (linkInput) {
            return true;
          } else {
            console.log("You need to enter a project GitHub link!");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "description",
        message: "Please include a description of your Project?",
        validate: (descriptionInput) => {
          if (descriptionInput) {
            return true;
          } else {
            console.log("Please include a description of your Project!");
            return false;
          }
        },
      },
      {
        type: "checkbox",
        name: "languages",
        message:
          "What languages did you use for this project? (Check all that apply)",
        choices: [
          "JavaScript",
          "HTML",
          "CSS",
          "ES6",
          "jQuery",
          "Bootstrap",
          "Node",
        ],
      },

      {
        type: "input",
        name: "installation",
        message:
          "Please include all of the installation instructions for your Project?",
        validate: (installationInput) => {
          if (installationInput) {
            return true;
          } else {
            console.log(
              "Please include all of the installation instructions for your Project!"
            );
            return false;
          }
        },
      },
      {
        type: "input",
        name: "usage",
        message: "Please include usage for your Project?",
        validate: (usageInput) => {
          if (usageInput) {
            return true;
          } else {
            console.log("Please include usage for your Project!");
            return false;
          }
        },
      },

      {
        type: "confirm",
        name: "confirmLicense",
        message: "Would you like to add a License?",
        default: false,
      },
      {
        type: "checkbox",
        name: "license",
        message:
          "What license would you like to use for this project? (Check all that apply)",
        choices: [
          "Mozilla Public License 2.0",
          "MIT License",
          "Boost Software License 1.0",
          "The Unlicense",
        ],
        when: ({ confirmLicense }) => {
          if (confirmLicense) {
            return true;
          } else {
            return false;
          }
        },
      },
      {
        type: "confirm",
        name: "features",
        message: "would you like to list your Project as a feature?",
        default: false,
      },
      {
        type: "input",
        name: "credits",
        message: "Please include any contributors for your Project?",
        validate: (creditsInput) => {
          if (creditsInput) {
            return true;
          } else {
            console.log("Please include any credits for your Project!");
            return false;
          }
        },
      },
    ])

    .then((answers) => {
      generateMarkdown(answers);
      let content = generateMarkdown(answers);
      writeToFile(content);
      console.log(content);
    });
};

// TODO: Create a function to write README file
function writeToFile(data) {
  fs.writeFile("README.MD", data, (err) => {
    if (err) throw err;

    console.log(
      "README  finished! Please check out my README.MD page to see the results"
    );
  });
}

// TODO: Create a function to initialize app
function init() {
  promptUser();
}

// Function call to initialize app
init();
