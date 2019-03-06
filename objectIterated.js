var moneyInCents = {
  penny: 1,
  nickel: 5,
  dime: 10,
  quarter: 25,
  loonie: 100,
  toonie: 200
}

function centValueOfCoins(obj) {
  for (var coin in moneyInCents) {
    var valueOfCoins = moneyInCents[coin];
    console.log("The " + coin + " is worth:" + valueOfCoins + " cents.");
  }
}
centValueOfCoins();