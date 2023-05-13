// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
if(license == 'MIT'){
	return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]`
} else if ( license == 'Apache 2.0'){
  return `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0`
} else if(license.license == 'Mozilla Public'){
  return `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)` 
}
return badge
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let lincenseLink  = ""
  if(license == 'MIT'){
   return `(https://opensource.org/licenses/MIT)`
  } else if (license == 'Apache 2.0'){
   return `(https://opensource.org/licenses/Apache-2.0`
  }else if (lincenseLink == 'Mozilla Public'){
  return`(https://opensource.org/licenses/MPL-2.0)`
  }

}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {

}
// console.log(renderLicenseBadge(data.license))



// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
   let licenseLink = renderLicenseLink(data.license)
   let licenseBadge = renderLicenseBadge(data.license)
 return `# ${data.title}
 
  ## Table of Contents
  * [Desription](#description)
  * [Install](#install)
  * [License](#license)
  * [resources](#resources)
  
  ## Description
   * ${data.description}

  ## Install
  * ${data.install}

  ## License
  * ${licenseBadge} ${licenseLink}

  ## Resources
  * ${data.resources}

  ## Contribute
  * ${data.contribute}
  `

;
}

export {generateMarkdown}
