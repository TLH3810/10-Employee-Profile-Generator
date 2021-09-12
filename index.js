const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");
const inquirer = require("inquirer");
const fs = require("fs");
const pats = require("path");

const render = require("./src/index-template");

const team = [];
const ids = [];

function teamMenu() {

    //funciton to create a manager
    function createManagerTeam(){
        console.log("Please input Manager info for team");
        inquirer.prompt([
            {
                type: "input",
                name: "managerName",
                message: "What is the name of the teams manager?",
                validate: answer => {
                    if (answer !== "") { return true; }
                    return "Must enter at least one character.";
                }
            },
            {
                type: "input",
                name: "managerId",
                message: "What is the id of the team's manager?",
                validate: answer => {
                    const pass = answer.match(
                        //decimal or numeric 
                        /^[1-9]\d*$/);
                    if (pass) { return true;
                    }
                    return "Must enter at number grater then zero.";
                }
            },
            {
                type: "input",
                name: "managerEmail",
                message: "What is the email of the team's manager?",
                validate: answer => {
                    const pass = answer.match(
                        //checking for a string@string.string
                        /\S+@\S+\.\S+/);
                    if (pass) {
                        return true;
                    }
                    return "Must enter a valid email address.";
                }
            },
            {
                type: "input",
                name: "managerOfficeNumber",
                message: "What is the office number of the team's manager?",
                validate: answer => {
                    const pass = answer.match(
                        //decimal or numeric 
                        /^[1-9]\d*$/);
                    if (pass) {
                        return true;
                    }
                    return "Must enter at number grater then zero.";
                }
            }
        ]).then(answers => {
            const manager = new Manager(answers.managerName, answers.managerId, answers.managerEmail, answers.managerOfficeNumber);
            team.push(manager);
            ids.push(answers.managerId);
            addTeamMembers();
        });
    }
//funciton to add team members funciton addTeamMembers(){}
    function addTeamMembers(){
        inquirer.prompt([
            { type: "list",
            name: "teamMemberChoice",
            message: "Which team member role would you like to add?",
            choices:[
                "Engineer",
                "Intern",
                "No more team members to add"
            ]}
        ]).then(answer => {
            switch(answer.teamMemberChoice){
                case"Engineer": addEngineer(); break;
                case "Intern": addIntern(); break;
                default writeTeamToFile();
            }
        });
    }

    //funciton to add engineers to a team addEngineer();
    function addEngineer(){
        inquirer.prompt([
            {
                type: "input",
                name: "engineerName",
                message: "What is the engineer's name?",
                validate: answer => { if(answer !== ""){return true;}
                return "You must enter at least one character.";}
            },
            {
                type: "input",
                name: "engineerId",
                message: "What is the engineer's id?",
                validate: answer =>{
                    const pass = answer.match(
                        //decimal or numeric 
                        /^[1-9]\d*$/);
                    if (pass) {return true;}
                    return "Must enter at number grater then zero.";
                }
            },
            {
                type: "input",
                name: "engineerEmail",
                message: "What is the email of the engineer?",
                validate: answer => {
                    const pass = answer.match(
                        //checking for a string@string.string
                        /\S+@\S+\.\S+/);
                    if (pass) {return true;}
                    return "Must enter a valid email address.";
                }
            },
            {
                type: "input",
                name: "engineerGitHub",
                message: "What is the GitHun username of the engineer?",
                validate: answer => { if(answer !== ""){return true;}
                return "You must enter at least one character.";}
            }
        ]).then(answers =>{
            const engineer = new Engineer(answer.engineerName,answer.engineerId, answer.engineerEmail, answer.engineerGitHub);
            team.push(engineer);
            ids.push(answers.engineerId);
            addTeamMembers();
        });
    }
    
    //funciton to add inters to a team addIntern();
function addIntern(){
    inquirer.prompt([
        {
            type: "input",
            name: "internName",
            message: "What is the intern's name?",
            validate: answer => { if(answer !== ""){return true;}
            return "You must enter at least one character.";}
        },
        {
            type: "input",
            name: "internId",
            message: "What is the intern's id?",
            validate: answer =>{
                const pass = answer.match(
                    //decimal or numeric 
                    /^[1-9]\d*$/);
                if (pass) {return true;}
                return "Must enter at number grater then zero.";
            }
        },
        {
            type: "input",
            name: "einternEmail",
            message: "What is the email of the intern?",
            validate: answer => {
                const pass = answer.match(
                    //checking for a string@string.string
                    /\S+@\S+\.\S+/);
                if (pass) {return true;}
                return "Must enter a valid email address.";
            }
        },
        {
            type: "input",
            name: "internSchool",
            message: "What is the name of the intern's school?",
            validate: answer => { if(answer !== ""){return true;}
            return "You must enter at least one character.";}
        }
    ]).then(answers =>{
            const intern = new Intern(answer.internName,answer.internId, answer.internEmail, answer.internSchool);
            team.push(intern);
            ids.push(answers.internId);
            addTeamMembers();
        });
}
    //funciton to build a team writeTeamToFile()
function writeTeamToFile(){
    if (!fs.existsSync(OUTPUT_DIR)) {
        fs.mkdirSync(OUTPUT_DIR)
      }
      fs.writeFileSync(outputPath, render(team), "utf-8");
}
    createManagerTeam();
}
teamMenu();