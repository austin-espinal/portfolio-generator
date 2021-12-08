const inquirer = require('inquirer');
// const fs = require('fs');
// const generatePage = require('./src/page-template.js');

// const pageHTML = generatePage(name, github);

inquirer
.prompt([
    {
        type: 'input',
        name: 'name',
        message: 'what is your name?'
    }
])
.then(answers => console.log(answers));

// fs.writeFile('./index.html', pageHTML, err => {
//     if(err) throw err;
    
//     console.log('Portfolio complete! Check out index.html to see the output!');
// });

// console.log(profileDataArgs);
// //shows two ways of displaying each item in an array
// const printProfileData = profileDataArr => {
//     for (let i = 0; i<profileDataArr.length; i++) {
//     console.log(profileDataArr[i]);
//     }
//     console.log('============');

//     profileDataArr.forEach((profileItem) => console.log(profileItem));
// };
// printProfileData(profileDataArgs);