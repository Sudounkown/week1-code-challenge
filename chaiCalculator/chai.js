const prompt = require('prompt-sync')();

let chai = 
    {
     water: 200,
     milk: 50,
     majani: 1,
     sugar: 2,
    }

let numberOfCups = Number(prompt("Karibu! How many cups of Chai Bora would you like to make? "));

const calculateChaiIngredients = (numberOfCups) =>{
   
    let totalWater = (chai.water * numberOfCups)
    let totalMilk = (chai.milk * numberOfCups)
    let totalMajani = (chai.majani * numberOfCups)
    let totalSugar = (chai.sugar * numberOfCups)

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
        console.log("Cannot make 0 cups of coffee!")
    }   
    else{
        console.log("Please enter a valid number!")
    }
    

}

calculateChaiIngredients(numberOfCups)



