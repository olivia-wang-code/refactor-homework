const printTest = require('ava');
const { printOwing } = require('../src/print.js');

printTest('should return correct owes when printOwing given a invoice', t => {
    let invoice = {
        customer: 'oli',
        borderSpacing: [{ amount: 1 }, { amount: 2 }]
    }
    let result = printOwing(invoice);
    const today = new Date();
    let date = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 30);
    t.is(result, `*************************** Customer Owes ***************************name: oliamount: 3amount: ${date.toLocaleDateString()}`);
})