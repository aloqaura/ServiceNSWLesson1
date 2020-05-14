/* Make a console app that asks the user to enter their name and greets them by name */
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

function askQuestion(question) {
    let answer;

    return new Promise((resolve, reject) => {
        rl.question(question, (ans) => {
            resolve(ans);
        })
    });
}


async function Program() {
    // Your Code Here...
    let userinput = await askQuestion('Please enter your name here: ');
    console.log(`I have been expecting you ${userinput}`);
}
Program().then(() => {
    process.exit(0);
});