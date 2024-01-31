#!/usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
import chalkAnimation from "chalk-animation";
import boxen from "boxen";
async function Welcome() {
    let title = chalkAnimation.rainbow(boxen(`
"Welcome to our Todo App"
        
    .----------------------.
    |  [ 1 ] Add           |
    |  [ 2 ] Addmore       |
    |  [ 3 ] valid input   |
    |  [ 4 ] not found     |
    '----------------------' 

    𝓓𝓸𝓷𝓮 𝓫𝔂 𝓘𝓺𝓻𝓪 𝓩𝓪𝓲𝓷𝓪𝓫 
        
        `, {
        title: '  Todo App',
        titleAlignment: 'center',
        borderStyle: "single",
        padding: 0,
    }));
    await new Promise((res) => {
        setTimeout(res, 2000);
    });
    title.stop();
}
await Welcome();
let todos = [];
let loop = true;
while (loop) {
    const answers = await inquirer.prompt([
        {
            type: "input",
            name: "TODO",
            message: (chalk.yellow("Do you want to add in your Todo ?"))
        },
        {
            type: "confirm",
            name: "addmore",
            message: (chalk.yellow("Do you want to add more ?"))
        },
    ]);
    const { TODO, addmore } = answers;
    loop = addmore;
    if (TODO) {
        todos.push(chalk.bgBlue(TODO));
    }
    else {
        console.log(chalk.green("Kindly add vaild input"));
    }
}
if (todos.length > 0) {
    console.log(chalk.green("Your todo list is :"));
    todos.forEach(todos => {
        console.log(todos);
    });
}
else {
    console.log(chalk.green("no todos found"));
}
