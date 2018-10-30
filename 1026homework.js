// // Build home

// // Cement 3
// // Bricks 1
// // Wood 2 => Door 


// // cementPromise.promise().then();

// // int getComputedStyle(int add, int bd) {

// // }

// // function get (a, b) {

// // }

// // get()


// // const get = function () {

// // }


// // ////////
// // //FAT arrow 
// // const get = (a , b , c) => {
// //     c = a * b;
// //     b = a * c;
// //     return a;
// // }

// // const get = function (a, b , c) {
// //     return a;
// // }


// // // const get = {
// // //     prop: 27,
// // //     method : function(a) {
// // //         return this.prop;
// // //     }
// // // }

var id =[];

const buybrick = () => {
    
    return new Promise((resolve, reject) => {
        id[1] =2;
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
const buycement = () => {
    
    return new Promise((resolve, reject) => {
        id[0] =1;
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

const preparedoor = () => {
    
    return new Promise((resolve, reject) => {
        id[3] =4;
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

const buywood = ()  => {
    return new Promise((resolve, reject) => {
        id[2] =3;
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


const buildhome = ()  => {
    var sorted =id.sort();
    
    if(sorted)
    {
        buybrick().then(()=>{
            buycement().then(()=>{
                buywood().then(()=>{
                    preparedoor().then(()=>{
                        console.log('House built');
                    })
                })
            })
        }).catch(() => {
            console.log('house is under construction');
        })
    }
    
}



buildhome();
