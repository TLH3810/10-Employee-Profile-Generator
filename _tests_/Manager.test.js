const Manager = require("../lib/Manager");
const Employee = require("../lib/Employee");


//write tests for both the getRole and getOfficeNumber funcitons from Manager.js
describe("Manager Tests ", ()=>{
    describe("managerInfo",()=>{
        it ("return manager info", ()=>{
            const testValue = "Manager";
            const result = new Manager("Smith",1,"test1@test1.com",83);
            expect(result.getRole()).toBe(testValue);
        });
    });
    describe("officeNumber", ()=> {
        it ("Can set the office number", () => {
            const testValue = 83;
            const result = new Manager("Smith",1,"test1@test1.com",testValue);
            expect(result.officeNumber).toEqual(testValue);
        });
    });
});