const array = [10, 20, 30, 40 , 50 , 60 , 70 , 80 , 90]

let sum = 0;
let count = 0;
// array.forEach((val,index) => {
//     console.log(val, index);
//     sum += val;
//     count += index;
// })

// console.log('sum: ' + sum);
// console.log('avg : ' + sum/count)


//FAT ARROW
// JAVASCRIPT ES6

// SUM += array[i]
//SUM = SUM + array[i]
// sum = array.reduce((accumulator, currentValue) => accumulator + currentValue);

// sum = array.reduce(function(accumulator, currentValue) {
//     console.log('accumulator : '+ accumulator, 'currentValue : ' + currentValue);
//     return accumulator + currentValue;
// });


// let arrayGreaterThan60 = [];

// arrayGreaterThan60 = array.filter(value => value > 60);


// console.log('arrayGreaterThan60: ' + arrayGreaterThan60);
// // console.log('avg : ' + sum/count)


//biggest value;

let largerValue = -1;

array.forEach(value => {
    if(largerValue < value){
        largerValue = value;
    }
})

console.log(largerValue);