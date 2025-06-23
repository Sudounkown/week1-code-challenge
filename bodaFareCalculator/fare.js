//import prompt function
const prompt = require('prompt-sync')();
//declare function and pass user input as argument
const calculateBodaFare = (distanceInKm = Number(prompt("Unafika wapi Mkubwa? Kilometer ngapi?:", -1)))=> {
    let baseFare = 50
    let chargePerKm = 15
    let subTotal = distanceInKm*chargePerKm
    let totalFare = baseFare + (distanceInKm*chargePerKm)
    //Input Validation
    if(distanceInKm > 0){
    console.log(`
        Uko kwote? Hio ni ${distanceInKm} km:
        Ukikalia Pikipiki: KES ${baseFare}
        Mpaka Uko: KES ${subTotal}
        Total: KES ${totalFare}
                 
        Panda Pikipiki!`)
        

    } else if (distanceInKm === 0){
        console.log("Ushafika penye unataka kwenda")
    } else{
        console.log("Weka namba ya kilomita!")
    }


}
//function call
calculateBodaFare()