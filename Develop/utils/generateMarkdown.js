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
function generateMarkdown(data) {
  return `
  
  # ${'projectTitle'}

  ## Description:
   
  ${'description'}

  ## Installation Information:

  ${'installation'}

  ## Table of Contents:
  ${tableOfContentsGeneration('tableOfContents')}

  ## Usage;

  ${'usage'}

  ## Licenses

  ${'licenses'}

  ## Badge:

  ## Contributing:

  ${'contributing'}
 
  ## Tests:

  ${'tests'}

  ## Contact Info:

  ${'contactInfo' + 'github'}

`;
}

module.exports = generateMarkdown;
