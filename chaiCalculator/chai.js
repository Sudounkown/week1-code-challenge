//import prompt function
const prompt = require('prompt-sync')();

//declare and assign chai object
let chai = 
    {
     water: 200,
     milk: 50,
     majani: 1,
     sugar: 2,
    }


//declare function and pass user input as argument
const calculateChaiIngredients = (numberOfCups = Number(prompt("Karibu! How many cups of Chai Bora would you like to make? ", -1))) =>{
   
    let totalWater = (chai.water * numberOfCups)
    let totalMilk = (chai.milk * numberOfCups)
    let totalMajani = (chai.majani * numberOfCups)
    let totalSugar = (chai.sugar * numberOfCups)
    //validate input
    if (numberOfCups > 0){
        console.log(
    `To make ${numberOfCups} cups of Kenyan Chai, you will need: 

    Water: ${totalWater} ml 
    Milk: ${totalMilk} ml 
    Tea Leaves (Majani): ${totalMajani} tablespoons 
    Sugar (Sukari): ${totalSugar} teaspoons

    Enjoy your Chai Bora!`
        
    )
    } else if (numberOfCups === 0){
        console.log("Cannot make 0 cups of chai!")
    }
       
    else{
        console.log("Please enter a valid number!")
    }
    

}
//function call
calculateChaiIngredients()



