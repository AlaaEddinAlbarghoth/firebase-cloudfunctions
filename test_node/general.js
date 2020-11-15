// #region  First Code
let helloWorld = "Hello Alaa";
console.log(helloWorld);
// #endregion

// #region  Global properties
console.log(__dirname);
console.log(__filename);
// #endregion

// #region  Path functionality
const { write } = require("fs");
const path = require("path");
console.log(`The file name is ${path.basename(__filename)}`);
console.log("++++++++++++++++++++++++++++++++++++++");
console.log();
// #endregion

// #region  Global
console.log(`Process ID: ${process.pid}`);
console.log(`Node Version: ${process.version}`);
console.log(`Process Arguments: ${process.argv}`);
console.log("++++++++++++++++++++++++++++++++++++++");
console.log();

const [, , firstName, lastName] = process.argv;
console.log(`First Name: ${firstName}`);
console.log(`Last Name: ${lastName}`);
console.log("++++++++++++++++++++++++++++++++++++++");
console.log();
// #endregion

// #region  Global Process
const grab = (flag) => {
    let indexAfterFlag = process.argv.indexOf(flag) + 1;
    return process.argv[indexAfterFlag];
};

const user = grab("--user");
const greeting = grab("--greeting");

console.log(`${greeting} ${user}`);
console.log("++++++++++++++++++++++++++++++++++++++");
console.log();
// #endregion

// #region Standard Output
process.stdout.write("Hello World \n\n");

const questions = [
    "What is your name?",
    "What would you rather be doing?",
    "What is your preferred programming language?",
];

const ask = (i = 0) => {
    process.stdout.write(`\n\n\n ${questions[i]} >`);
};

ask();
// #endregion

// #region Standard input

// 1- Listener for data
const answers = [];
process.stdin.on("data", (data) => {
    answers.push(data.toString().trim());

    if (answers.length < questions.length) {
        ask(answers.length);
    } else {
        process.exit();
    }
});

// 2- Listner for exit
process.on("exit", () => {
    const [name, activity, language] = answers;
    console.log(`

    Thank you for your answers.
    Go ${activity} ${name} you can write ${language} code later !!

    `);
});
// #endregion