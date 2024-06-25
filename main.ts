#! /usr/bin/env node  


import inquirer from 'inquirer';
import chalk from 'chalk';

async function startCountdown(){ 
const { duration } = await inquirer.prompt({
    type: "input",
    name: "duration", 
    message: "Enter countdown duration (in seconds)",
    validate: (input)=>{
        const seconds = parseInt(input);
        return !isNaN(seconds) && seconds > 0;
    }
});

let remainingTime = parseInt(duration);

let countdownInterval = setInterval(() => {
    const minutes = Math.floor(remainingTime / 60)
    const seconds= remainingTime % 60;
   const formattedTime = `${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;

    console.log(chalk.cyan(`${formattedTime}`))

    if(remainingTime <= 0 ) {
        clearInterval(countdownInterval);
        console.log(chalk.green('countdown complete!'));
    } else {
        remainingTime--;
    }
}, 1000)
};

startCountdown()
