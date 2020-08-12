const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter starting number:", (startingNumber) => {
    rl.question("Enter ending number:", (endingNumber) => {
        for ( startingNumber; startingNumber <= endingNumber;) {
            console.log(startingNumber);
            startingNumber++;
        };
    })
})

rl.on("close", () => {
    console.log("\n Counter closing...");
    process.exit(0);
});

// this script logs the startingNumber first and continues to loop all the way until it reaches the endingNumber.
// good script to show your dominance in discord "count to 100k's".
// I think the first number is a string... oh well. just copy and paste the output in your terminal, The effect is the same.