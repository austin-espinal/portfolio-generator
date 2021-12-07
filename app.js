const fs = require('fs');

const generatePage = require('./src/page-template.js');

const profileDataArgs = process.argv.slice(2);
const [name, github] = profileDataArgs;

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


fs.writeFile('./index.html', generatePage(name, github), err => {
    if(err) throw new Error (err);

    console.log('Portfolio complete! Check out index.html to see the output!');
});