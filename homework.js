// var object = {}


// var object1 = new Object();

// object = {
//     chennai: {
//         2017: 89,
//         2018: 90
//     },
//     bangalore: {
//         2017: 86,
//         2018: 85
//     },
//     cochin: {
//         2017: 86,
//         2018: 85
//     }
// }

// object = {
//     hyderabad: {
//         2017: 90,
//         2018: 99
//     },
//     ...object
// }



// var array = [{
//     cityName: 'chennai',
//     2017: 89,
//     2018: 90
// }, {
//     cityName: 'Bangalore',
//     2017: 86,
//     2018: 85
// },
// {
//     cityName: 'cochin',
//     2017: 86,
//     2018: 85
// }]


// array = [...array,  {
//     cityName: 'Hyd',
//     2017: 90,
//     2018: 99
// }]

// array.push({
//     cityName: 'mumbai',
//     2017: 90,
//     2018: 99
// })

// // console.log(array.filter(item => item.cityName.includes('c')));



// // Destructing

// // console.log(array);

// const [chennai, bangalore, ...cochin] = array;

// console.log(chennai);
// console.log(bangalore);
// console.log(cochin);


class Vehicle {
    constructor() {
        this.vehicleName = '';
    }

    getVehicle() {
        return this.vehicleName
    }

    setVehicle(val) {
        this.vehicleName = val;
    }

    printVehicle() {
        console.log(this);
    }
}

var vehicleObj = new Vehicle();
vehicleObj.setVehicle('Tesla')
vehicleObj.printVehicle();


/*
1. 
Node { left.value : 10, right.value : 20 }

2.
Node { left.left.value: 5, left.right.value : 10, right.left.value: 15, right.right.value : 20}

*/
