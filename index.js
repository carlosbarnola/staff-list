const inquirer = require('inquirer');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const generatePage = require('./src/page-template')
const fs = require('fs')

let team = []

init = () => {
    inquirer
        .prompt([
            {
                type: 'list',
                name: 'title',
                message: 'What is the title of the employee?',
                choices: ['Manager', 'Engineer', 'Intern']
            },
            {
                type: 'input',
                name: 'name',
                message: 'What is the name?'
            },
            {
                type: 'input',
                name: 'id',
                message: 'What is the ID number?'
            },
            {
                type: 'input',
                name: 'email',
                message: 'What is the email?'
            }
        ]).then((answers) => {
            switch (answers.title) {
                case 'Manager':
                    createManager(answers);
                    break;
                case 'Engineer':
                    createEngineer(answers);
                    break;
                case 'Intern':
                    createIntern(answers);
                    break;
                default:
                    break;
            }
        });
}

createManager = (info) => {

    inquirer.prompt([
        {
            type: 'input',
            name: 'phoneNumber',
            message: 'What is the manager phone number?'
        }
    ]).then((phoneNumber) => {
        const manager = new Manager(info.name, info.id, info.email, phoneNumber.phone);
        team.push(manager);
        addEmployee();
    })
}

createEngineer = (info) => {
    
    inquirer.prompt([
        {
            type: 'input',
            name: 'github',
            message: 'What is the engineer GitHub?'
        }
    ]).then((github) => {
        const engineer = new Engineer(info.name, info.id, info.email, github.github);
        team.push(engineer);
        addEmployee();

    })
}

createIntern = (info) => {
    inquirer.prompt([
        {
            type: 'input',
            name: 'school',
            message: 'What school the engineer attend?'
        }
    ]).then((school) => {
        const intern = new Intern(info.name, info.id, info.email, school.school);
        team.push(intern);
        addEmployee();
    })
}

addEmployee = () => {
    inquirer.prompt([
        {
            type: 'list',
            name: 'addEmployee',
            message: 'Would you like to add another employee?',
            choices: ['Yes', 'No']
        }
    ]).then((answer) => {
        console.log(answer.addEmployee);
        if (answer.addEmployee === "Yes") {
            init();
        }
        else {
            const htmlPageContent = generatePage(team);
            fs.writeFile('./dist/index.html', htmlPageContent, (err) =>
                err ? console.log(err) : console.log('Successfully created index.html!')
            );
        }
    });
}

init();