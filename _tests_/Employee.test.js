const Employee = require("../lib/Employee");

// test for employee based on Employee.js    getName() getId() getEmail() getRole() 
describe("Employee Tests ", ()=>{
    describe("employeeInfo",()=>{
        it ("return employee info", ()=>{
            const testValue = "Employee";
            const result = new Employee("Bercham",4,"testE1@testE1.com");
            expect(result.getRole()).toBe(testValue);
        });
    });
    describe("empName", ()=> {
        it ("Retrive employee name", () => {
            const testValue = "Bercham";
            const result = new Manager(testValue,4,"testE1@testE1.com");
            expect(result.getName()).toBe(testValue);
        });
    });
    describe("empID", ()=> {
        it ("Retrive employee Id", () => {
            const testValue = 4;
            const result = new Manager("Bercham",testValue,"testE1@testE1.com");
            expect(result.getId()).toBe(testValue);
        });
    });
    describe("empEmail", ()=> {
        it ("Retrive employee Email", () => {
            const testValue = "testE1@testE1.com";
            const result = new Manager("Bercham",4,testValue);
            expect(result.getEmail()).toBe(testValue);
        });
    });
});