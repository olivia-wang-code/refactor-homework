const employeeTest = require('ava');
const {Employee } = require('../src/employee.js');

employeeTest('should return correct owes when validateType given a type', t => {
    try{
        let employee = new Employee("","oli");
        t.fail();
    }catch(e){
        t.is("Employee cannot be of type oli",e.message);
    }
})