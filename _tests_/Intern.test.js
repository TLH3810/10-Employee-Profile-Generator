const Intern = require("../lib/Intern");

//run tests for getRrole() and getSchool()
describe("Intern Tests", ()=>{
    describe("internInfo", ()=>{
        it ("return intern info", ()=>{
            const testValue = "Intern";
            const result = new Intern("Wallas",2,"testI1@testI1.com","OSU");
            expect(result.getRole()).toBe(testValue);
        });
    });
    describe("schoolName", ()=> {
        it ("Can get the school by name", () => {
            const testValue = "OSU";
            const result = new Intern("Wallas",2,"testI1@testI1.com",testValue);
            expect(result.getSchool()).toBe(testValue);
        });
    });
});

