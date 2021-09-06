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
    funciton createManagerTeam(){
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
                    if (pass) {
                        return true;
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
            },
        ])
        .then(answers =>{
            const manager = new Manager(answers.managerName, answers.managerId, answers.managerEmail, answers.managerOfficeNumber);
            team.push(manager);
            ids.push(answers.managerId);
            addTeamMembers();
        });
    }
    
    //funciton to add team members funciton addTeamMembers(){}

    //funciton to add engineers to a team

    //funciton to add inters to a team

    //funciton to build a team


}