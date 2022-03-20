function generateCoinChange (input) {
    var quaters = 0;
    var nickel =0;
    var dime = 0;
    var pennies = 0;
    while (input > 0.25) {
        quaters ++ ;
        input -= 0.25;
    }
    while (input > 0.10) {
        dime ++ ;
        input -= 0.10;
    }
    while (input > 0.05) {
        nickel ++ ;
        input -= 0.05;
    }
    while (input > 0.01) {
        pennies ++ ;
        input -= 0.01;
    }
    return ("${quaters} quaters, ${dime} dime, ${nickel} nickel, ${pennies} pennies")
}

console.log(generateCoinChange(.67))
console.log(generateCoinChange(.77))
console.log(generateCoinChange(2.85))
console.log(generateCoinChange(4.50))