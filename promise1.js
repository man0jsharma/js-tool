const coffeeAvailability = true;
const MilkAvailability = true;
const SugarAvailability = false;


const buyCoffee = () => {
    return new Promise((resolve, reject) => {
        if (coffeeAvailability) {
            setTimeout(() => {
                resolve();
            }, 2000)
        } else {
            setTimeout(() => {
                reject()
            }, 2000)
        }
    })
}

const buyMilk = () => {
    return new Promise((resolve, reject) => {
        if (MilkAvailability) {
            setTimeout(() => {
                resolve();
            }, 2000)
        } else {
            setTimeout(() => {
                reject()
            }, 2000)
        }
    })
}

const buySugar = () => {
    return new Promise((resolve, reject) => {
        if (SugarAvailability) {
            setTimeout(() => {
                resolve();
            }, 2000)
        } else {
            setTimeout(() => {
                reject()
            }, 2000)
        }
    })
}


const makeCoffee = () => {
    Promise.all(
        [
            buyCoffee(),
            buyMilk(),
            buySugar()
        ]
    ).then(
        function() {
            console.log('coffee made')
        }
        
    ).catch(
        () => console.log('No Coffee')
    )
}


makeCoffee();