const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

function askQuestion(question){
    let answer;

    return new Promise((resolve, reject) => {
        rl.question(question, (ans) => {
            resolve(ans);
        })
    });
}


async function Program(){
    // Your Code Goes Here...
    let username = await askQuestion
    let username = await askQuestion("Your name?");
let HOW_ARE_YOU = await askQuestion("How are you?");
let question = await askQuestion("That might be good?");
console.log(`${HOW_ARE_YOU} can be good depending on the context.`);
console.log(`Well ${username}, Your "${question}" answer to how you are was acceptable. Please enter the premise you ${HOW_ARE_YOU} feeling person`);
}


Program().then(() => {
    process.exit(0);
});