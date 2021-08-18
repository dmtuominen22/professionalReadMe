// // TODO: Create a function that returns a license badge based on which license is passed in
// // If there is no license, return an empty string
//  function renderLicenseBadge(license) {}

// // // TODO: Create a function that returns the license link
// // // If there is no license, return an empty string
//  function renderLicenseLink(license) {}

// // // TODO: Create a function that returns the license section of README
// // If there is no license, return an empty string
//  function renderLicenseSection(license) {}

// // // TODO: Create a function to generate markdown for README
 function generateMarkdown(data) {
  return `
# Project  
  ${data.name}

# Table of Content:
 [description] (#Description)
 [Project] (Project)
 [Website] (Website-URL)
 [Languages-used] (Language-used)
 [installation] (instllation)
 [license] (license)
 [badge] (badge)
 [confirmFeatures] (confirmFeatures)
 [credits] (credits)
 
# Description
   ${data.description}

# Project
   ${data.github}  

# Website-URL
   ${data.link}

# Laguages-used
   ${data.languages}

# Installations used for the Project
  ${data.installation}

#Project Usage
  ${data.usage}

# Licences Used
    ${data.license}

# Data Badge
   ${data.badge}

# Featured Project
    ${data.confirmFeatures}

# Contributions
   ${data.credits}
   ${data.email}
  `;
}

module.exports = generateMarkdown;
