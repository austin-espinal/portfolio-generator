const inquirer = require('inquirer');
// const fs = require('fs');
// const generatePage = require('./src/page-template.js');

// const pageHTML = generatePage(name, github);
const promptUser = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'what is your name?'
        },
        {
            type: 'input',
            name: 'github',
            message: 'enter your github username'
        },
        {
            type: 'input',
            name: 'about',
            message: 'provide some information about yourself:'
        }
    ]);
};

const promptProject = portfolioData => {
    console.log(`
    =================
    Add a New Project
    =================
    `);
    //if there is no 'projects' array property, create one
    if(!portfolioData.projects) {
        portfolioData.projects = [];
    }
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'what is the name of the project?'
        },
        {
            type: 'input',
            name: 'description',
            message: 'provide a description of the project? (required)'
        },
        {
            type: 'checkbox',
            name: 'languages',
            message: 'what did you build this project with? (check all that apply)',
            choices: ['Javascript', 'HTML', 'CSS', 'ES6', 'jQuery', 'Bootstrap', 'Node']
        },
        {
            type: 'input',
            name: 'link',
            message: 'enter github link to your project. (required)'
        },
        {
            type: 'confirm',
            name: 'feature',
            message: 'would you like to feature this project?',
            default: false
        },
        {
            type: 'confirm',
            name: 'confirmAddProject',
            message: 'would you like to add another project?',
            default: false
        }
    ])
    .then(projectData => {
        portfolioData.projects.push(projectData);
        if (projectData.confirmAddProject) {
            return promptProject(portfolioData);
        } else {
            return portfolioData;
        }
    });
};

promptUser()
.then(promptProject)
.then(portfolioData => { 
    console.log(portfolioData);
});

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