// ABSRACTION

// Function Definition
function calculateBill(billAmount, taxRate = 0.13, tipRate = 0.15) {
  // this is the function body
  console.log('Running calculateBill');
  const total = billAmount + billAmount * taxRate + billAmount * tipRate;
  return total;
}

// Function Call
// const myTotal = calculateBill(100, 0.13);

function doctorize(name) {
  return `Dr. ${name}`;
}

function yell(name = `Silly Goose`) {
  return `HEY ${name.toUpperCase()}`;
}



