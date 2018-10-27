const buyCoffee = () => {
    return new Promise((resolve, reject) => {
        if (true) {
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

const grindCoffee = ()  => {
    return new Promise((resolve, reject) => {
        if (true) {
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


const bringCoffeeHome = ()  => {
    buyCoffee().then(() => {
        grindCoffee().then(() => {
            console.log('Coffee grounded');
        }).catch(() => {
            console.log('Coffee not grounded')
        })
    }).catch(() => {
        console.log('coffee failure');
    })
}


bringCoffeeHome();