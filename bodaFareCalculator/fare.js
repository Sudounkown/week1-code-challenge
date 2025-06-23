const prompt = require('prompt-sync')();
const calculateBodaFare = (distanceInKm = Number(prompt("Unafika wapi Mkubwa? Kilometer ngapi?:", -1)))=> {
    let baseFare = 50
    let chargePerKm = 15
    let subTotal = distanceInKm*chargePerKm
    let totalFare = baseFare + (distanceInKm*chargePerKm)
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
calculateBodaFare()