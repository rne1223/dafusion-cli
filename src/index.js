const inquirer = require('inquirer');

inquirer
    .prompt([
    {
        type: 'confirm',
        name: 'isHuman',
        message: 'Are you a human?',
        default: false
    },
    ]).then(answer => {
        console.log(answer);
    });