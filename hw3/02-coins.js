function calculateChange(amount, coins){
    
  if(amount > 10){
      console.log("Error: too large amount")
  }
  else{

      let result = [];
      for (let i = 0; i < 5; i++){
                for (let j = 0; j < Math.floor(amount/coins[i]); j++) 
                result.push(coins[i]);
                amount %= coins[i];
              }
      return result;
      }
}

console.log (calculateChange(15, [1, 0.25, 0.10, 0.05,0.01])); 
console.log (calculateChange(4.62,[1, 0.25, 0.10, 0.05,0.01] )); 
console.log (calculateChange(9.74,[1, 0.25, 0.10, 0.05,0.01])); 



// $4.62 ==> 4 dollars, 2 quarters, 1 dime, 2 pennies
//console.log(calculateChange(9.74));
// $9.74 ==> 9 dollars, 2 quarters, 2 dimes, 4 pennies
//console.log(calculateChange(0.16));
// $0.16 ==> 1 dime, 1 nickel, 1 penny
//console.log(calculateChange(15.11));
// $15.11 ==> Error: the number is too large
