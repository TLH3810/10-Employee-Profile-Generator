const Engineer = require("../lib/Engineer");

// tests for getRole() and getGithub

describe("Engineer Tests ", ()=>{
    describe("engineerInfo",()=>{
        it ("return engineer info", ()=>{
            const testValue = "Engineer";
            const result = new Engineer("London",1,"testE1@testE1.com","GIT5845");
            expect(result.getRole()).toBe(testValue);
        });
    });
    describe("githubId", ()=> {
        it ("Can get the github id", () => {
            const testValue = GIT5845;
            const result = new Manager("London",1,"testE1@testE1.com",testValue);
            expect(result.github).toEqual(testValue);
        });
    });
});