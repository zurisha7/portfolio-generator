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
// const fs = require('fs');
// const generatePage = require('./src/page-template.js');

// const pageHTML = generatePage(name, github);


//   fs.writeFile('./index.html', pageHTML, err => {
//     if (err) throw err;
    
//     console.log('Portfolio complete! Check out index.html to see the output!');
//   });

inquirer
  .prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is your name?'
    }
  ])
  .then(answers => console.log(answers));