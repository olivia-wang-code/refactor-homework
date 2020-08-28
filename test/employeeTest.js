const employeeTest = require('ava');
const { Employee } = require('../src/employee.js');

employeeTest('should return correct message when toString given emplyee engineer', t => {
    let employee = new Employee("olivia", "engineer");
    let result = employee.toString();
    t.is("olivia (engineer)", result);
})

employeeTest('should return error when toString given a type', t => {
    try {
        let employee = new Employee("", "oli");
        t.fail();
    } catch (e) {
        t.is("Employee cannot be of type oli", e.message);
    }
})