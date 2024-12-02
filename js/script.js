// Main loop to allow multiple calculations
let performCalculation = true;

while (performCalculation) {
    // Prompt user to enter numbers
    let numbers = [];
    let moreNumbers = true;
    let count = 0;

    while (moreNumbers) {
        const userInput = prompt(
            count === 0
                ? "Welcome to the calculator. Enter a number."
                : `Enter another number (Numbers entered so far: ${count}):`
        );

        if (userInput === null || userInput.trim() === "") {
            alert("Invalid input! Please enter a valid number.");
            continue;
        }

        const number = parseFloat(userInput);
        if (isNaN(number)) {
            alert("That's not a valid number. Please try again.");
            continue;
        }

        numbers.push(number);
        count++;

        // Ask if the user wants to enter more numbers
        const moreInput = prompt("Do you want to enter more numbers? (yes or no)").toLowerCase();
        if (moreInput === "no") {
            moreNumbers = false;
        } else if (moreInput !== "yes") {
            alert("Invalid response. Assuming you don't want to enter more numbers.");
            moreNumbers = false;
        }
    }

    //Prompt for operation selection
    const operation = prompt(
        "Choose an operation to perform:\n+ for add\n- for subtract\n* for multiply\n/ for divide"
    );

    if (!["+", "-", "*", "/"].includes(operation)) {
        alert("Invalid operation selected. Please start over.");
        continue;
    }

    //Perform the calculation
    let result;
    if (operation === "/" && numbers.length > 2) {
        alert("Division can only be performed on 2 numbers. Please start over.");
        continue;
    } else {
        switch (operation) {
            case "+":
                result = numbers.reduce((sum, num) => sum + num, 0);
                break;
            case "-":
                result = numbers.reduce((difference, num) => difference - num);
                break;
            case "*":
                result = numbers.reduce((product, num) => product * num, 1);
                break;
            case "/":
                if (numbers.length === 2) {
                    result = numbers[0] / numbers[1];
                } else {
                    alert("Invalid number of entries for division.");
                    continue;
                }
                break;
            default:
                alert("An error occurred. Please try again.");
                continue;
        }
    }

    //  Display the result
    alert(
        `Calculation result: ${result}\nTotal numbers entered: ${numbers.length}\nOperation performed: ${operation}`
    );

    // Ask if the user wants to perform another calculation
    const anotherCalculation = prompt("Do you want to try another calculation? (yes or no)").toLowerCase();
    if (anotherCalculation !== "yes") {
        performCalculation = false;
    }
}

// Goodbye message
alert("Thank you for using the calculator.");
