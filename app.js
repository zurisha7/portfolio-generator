// const profileDataArgs = process.argv.slice(2, process.argv.length);
// console.log(profileDataArgs);

// const printProfileData = (profileDataArr) => {
//     for(let i= 0; i < profileDataArr.length; i++) {
//     console.log(profileDataArr[i]);
// }
// console.log('===============');

// // is the same as this

//     profileDataArr.forEach((profileItem => console.log(profileItem));
    
// };  
const inquirer = require('inquirer')
const fs = require('fs');
const generatePage = require('./src/page-template.js');


const promptUser = () => {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is your name?(Required)',
      validate: nameInput => {
        if (nameInput) {
          return true;
        } else {
          console.log('Please enter your name!');
          return false;
        }
      }
    },
  {
    type: 'input',
    name: 'github',
    message: 'Enter your GitHub Username (Required)',
    validate: githubInput => {
      if (githubInput) {
        return true;
      } else {
        console.log('Please enter your Github username!') ;
        return false;        
      }
     }
  },
  {
    type: 'confirm',
    name: 'confirmAbout',
    message: 'Would you to enter some information about yourself for an "About" section?',
    default: true
  },
  {
    type: 'input',
    name: 'about',
    message: 'Provide some information about yourself:',
     when:({ confirmAbout }) => {
       if (confirmAbout) {
         return true; 
       } else {
         return false;
       }   
       }
     }
  ]);
};

const promptProject = () => {
  console.log(`
  ==================
  Add a New Project)
  ==================
  `);
//if theres no 'projects' array property, create one
if (!portfolioData.projects) {
  portfolioData.projects = [];
  }
  return inquirer
  .prompt ([
    {
      type: 'input',
      name: 'name',
      message: 'What is the name of your project?',
      validate: nameInput => {
        if(nameInput) {
          return true;
        } else {
          console.log('You need to enter a project name!');
          return false
        }
      }
    },
  {
      type: 'input',
      name: 'description',
      message: 'Provide a description of the project (Required)',
      validate : descriptionInput => {
        if (descriptionInput) {
          return true;
        } else {
          console.log('You need to enter a project description');
          return false;
        }
      }
    },
    {
      type: 'checkbox',
      name: 'languages',
      message: 'What did you build this project with? (Check all that apply)',
      choices: ['JavaScript', 'HTML', 'CSS', 'ES6', 'jquery', 'Bootstrap', 'Node']
    },
  {
      type: 'input', 
      name: 'link',
      message: 'Enter the Github link to your project. (Required)',
      validate: linkInput => {
        if(linkInput) {
          return true;
        } else {
          console.log('You need to enter a project Github link!');
          return false;
        }
      }
  },
  {
    type: 'confirm',
    name: 'confirmAddProject',
    message: 'Would you like to enter another project?',
    default: false
  }
  ])

  .then(projectData => {
    portfolioData.projects.push(projectData);
    if(projectData.confirmAddProject) {
      return promptProject(porfolioData);
    } else {
      return portfolioData;
    }
    });
  };

  promptUser()
  .then(promptProject)
  .then(portfolioData => { 
   const pageHTML = generatePage(name, github);


//   fs.writeFile('./index.html', pageHTML, err => {
//     if (err) throw err;
    
//     console.log('Page created! Check out index.html in this directory to see it!');
//   });
  });
