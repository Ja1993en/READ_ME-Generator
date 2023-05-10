// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
let badge = ""
if(license == 'MIT '){
	 badge = `MIT [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]`
} else if ( license == 'Apache 2.0'){
//  Apache   badge =  [![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0
} else if(license == 'Mozilla'){
   badge = `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)` 
}
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let lincenseLink  = ""
  if(license == 'MIT'){
  lincenseLink = `(https://opensource.org/licenses/MIT)`
  } else if (license == 'Apache 2.0'){
    lincenseLink  = `(https://opensource.org/licenses/Apache-2.0`
  }else if (lincenseLink){
   lincenseLink = `(https://opensource.org/licenses/MPL-2.0)`
  }

}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {

}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
   console.log(data.title)
;
}

export {generateMarkdown}
