//import prompt function
const prompt = require('prompt-sync')();

//declare function and pass user input as argument to the function
//assign prompt default value of -1 for validation purposes
const estimatedTransactionFee = (amountToSend = Number(prompt("Enter the amount of KES you wish to send: ", -1))) => 
{
//validate input
    if (amountToSend > 0){
    let transactionFee = amountToSend * 0.015
    
    if (transactionFee < 10){
        transactionFee = 10
    } else if (transactionFee > 70){
        transactionFee = 70
    }
    let totalAmount = transactionFee + amountToSend
    console.log(`
        Sending KES ${amountToSend}:
        Calculated Transaction Fee: KES ${Math.round(transactionFee)}
        Total amount to be debited: KES ${Math.round(totalAmount)}   
        
        Send Money Securely!
        `)

    } else if(amountToSend === 0){
    console.log("No money to send!")
    } else {
    console.log("Incorrect value entered")
    }

}
//function call
estimatedTransactionFee()


