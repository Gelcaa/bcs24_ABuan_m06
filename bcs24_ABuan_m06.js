
console.log("----ODD EVEN CHECKER---");
function oddEvenChecker(num) {
    if (typeof num === 'number') {
        if (num % 2 == 0) {
            console.log("The number is even")
        }
        else {
            console.log("The number is odd")
        }
    }
    else {
        console.log("Invalid Input")
    }

}

oddEvenChecker(5);
oddEvenChecker(20);
oddEvenChecker("uno");

console.log("----BUDGET CHECKER---");
function budgetChecker(budget) {
    if (typeof budget === 'number') {
        if (budget > 40000) {
            console.log("You are over the budget.")
        }
        else {
            console.log("You have resources left.")
        }
    }
    else {
        console.log("Invalid Input")
    }
}

budgetChecker(30000);
budgetChecker(300000);
budgetChecker("uno");