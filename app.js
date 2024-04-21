#! /usr/bin/env node
import inquirer from "inquirer";
let c_value = {
    PKR: 277.69,
    UAE: 3.67,
    USD: 1
};
let ans = await inquirer.prompt([{
        name: "from",
        type: "list",
        message: "converting to",
        choices: ["PKR", "UAE", "USD"]
    },
    {
        name: "to",
        type: "list",
        message: "converting from",
        choices: ["PKR", "UAE", "USD"]
    },
    {
        name: "amount",
        type: "number",
        message: "your amount to convert"
    },
]);
console.log(c_value[ans.to] / c_value[ans.from] * ans.amount);
