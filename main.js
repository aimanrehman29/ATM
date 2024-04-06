#! /usr/bin/env node
import inquirer from "inquirer";
let balance = 500000;
let pinNumber = 29512299;
let pinANS = await inquirer.prompt([
    {
        name: "pin",
        message: "Inseart your pin number",
        type: "number"
    }
]);
if (pinANS.pin === pinNumber) {
    console.log("correct pin number");
    let operationsANS = await inquirer.prompt([
        {
            name: "options",
            message: "select options",
            type: "list",
            choices: ["withdraw", "balance check", "Fast withdaw", "Transfer"]
        }
    ]);
    console.log(operationsANS);
    if (operationsANS.options === "withdraw") {
        let amountANS = await inquirer.prompt([
            {
                name: "amount",
                message: "type amount ",
                type: "number"
            }
        ]);
        if (amountANS.amount > balance) {
            console.log("you cann't withdraw it .due to less amount");
        }
        balance -= amountANS.amount;
        console.log("your remaining balance is : " + balance);
    }
    else if (operationsANS.options === "balance check") {
        [
            console.log("your balance is:" + balance)
        ];
    }
    else if (operationsANS.options === "Fast withdaw") {
        let withdrawANS = await inquirer.prompt([
            {
                name: "withdraw",
                type: "list",
                choices: ["10000", "30000", "40000", "50000"]
            }
        ]);
        balance -= withdrawANS.withdraw;
        console.log("your remaining balance is : " + balance);
    }
    else if (operationsANS.options === "Transfer") {
        let transferANS = await inquirer.prompt([
            {
                name: "tran_sfer",
                message: "choice bank ",
                type: "list",
                choices: ["HBL", "Mizan", "JS", "UBL", "MCB", "Allied Bank"]
            },
            {
                name: "transfer",
                message: "enter account number ",
                type: "number"
            },
            {
                name: "transfer2",
                message: "enter IBAN number ",
                type: "number"
            },
            //console.log ( "abc name"),
            {
                name: "transfer3",
                message: "enter transfer amount ",
                type: "number"
            },
            {
                name: "transfer4",
                message: "enter pin no ",
                type: "number"
            }
        ]);
        balance -= transferANS.transfer3;
        console.log("your remaining balance is : " + balance);
    }
}
else
    (console.log("incorrect pin number"));
