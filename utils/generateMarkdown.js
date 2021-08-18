// // TODO: Create a function that returns a license badge based on which license is passed in
// // If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch (license[0]) {
    case "Mozilla Public License 2.0":
      return "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)";
      break;

    case "MIT License":
      return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
      break;
    case "Boost Software License 1.0":
      return "[![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)";
      break;
      case "The Unlicense":
         return "[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)";
         break;
  }
}

// // // TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  var licenseBadge = renderLicenseBadge(data.license);
  return `
# Project  
  ${data.name}

# Table of Content:
1. (#description)[Description]
2. [Project] (#usage)
3. [Website] (#github)
4. [Languages-used] (#link)
5. [Installation] (#installation)
6. [License] (#license)
7. [ConfirmFeatures] (#confirmFeatures)
8. [Credits] (#credits)
 
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
   ${licenseBadge}

# Featured Project
    ${data.confirmFeatures}

# Contributions
   ${data.credits}
   ${data.email}
  `;
}

module.exports = generateMarkdown;
