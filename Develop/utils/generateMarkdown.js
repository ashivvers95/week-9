const userResponses = require('../index');

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}


//function for showing tableOfContents
function tableOfContentsGeneration(data) {
return data.map((item) => {
  return  `
* [${item}](#${item})

`
}).join(" ");
};
// TODO: Create a function to generate markdown for README
function generateMarkdown(answers) {
  return `
  
  # ${answers.projectTitle}

  ## Description:
   
  ${answers.description}

  ## Installation Information:

  ${answers.installation}

  ## Table of Contents:
  ${tableOfContentsGeneration(answers.tableOfContents)}

  ## Usage;

  ${answers.usage}

  ## Licenses

  ${answers.licenses}

  ## Badge:

  ## Contributing:

  ${answers.contributing}
 
  ## Tests:

  ${answers.tests}

  ## Contact Info:

  ${answers.contactInfo + " " + answers.github}

`;
}

module.exports = generateMarkdown;
