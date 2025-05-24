const klart = require('./script');
global.income = [{ amount: 1000 }, { amount: 500 }];
global.expenses = [{ amount: 400 }];
const result = klart();
if (result === 1100) {
  console.log("✅ Test passed!");
  process.exit(0); 
} else {
  console.error("❌ Test failed. Expected 1100, got", 
result);
  process.exit(1); 
}
