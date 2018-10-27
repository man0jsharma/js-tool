// Build home

// Cement 3
// Bricks 1
// Wood 2 => Door 



const cementPromise = {
    id: 1,
    promise: () => new Promise((resolve, reject) => {
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

// cementPromise.promise().then();

// int getComputedStyle(int add, int bd) {

// }

function get (a, b) {

}

get()


const get = function () {

}


////////
//FAT arrow 
const get = (a , b , c) => {
    c = a * b;
    b = a * c;
    return a;
}

const get = function (a, b , c) {
    return a;
}


// const get = {
//     prop: 27,
//     method : function(a) {
//         return this.prop;
//     }
// }


