function calculateOutstanding(invoice) {
  let outstanding = 0;
  for (const o of invoice.borderSpacing) {
    outstanding += o.amount;
  }
  return outstanding;
}

function calculateDetails(invoice, outstanding, result) {
  result += `name: ${invoice.customer}`;
  result += `amount: ${outstanding}`;
  result += `amount: ${invoice.dueDate.toLocaleDateString()}`;
  return result;
}

function printOwing(invoice) {
  let result = "";
  result += '***********************';
  result += '**** Customer Owes ****';
  result += '***********************';

  outstanding = calculateOutstanding(invoice);

  // record due date
  const today = new Date();
  invoice.dueDate = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 30);

  return calculateDetails(invoice, outstanding, result);
}

module.exports = {
  printOwing
}
