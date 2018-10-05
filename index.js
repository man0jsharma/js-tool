const Car = function(){ //Classs
    this.wheals = 5;

    this.addWheals = function() { //Function
        this.wheals ++;
    }
}


const carObj = new Car();

console.log(carObj) //5
carObj.addWheals();

console.log(carObj) //6

//--------------------

const Bike = {
    wheals : 2,
    addWheals : function () {
        Bike.wheals ++;
    }
}

console.log(Bike);
Bike.addWheals()
console.log(Bike);

console.log('-----------------------')


//------------------


const array = [1,2,3,4,5,6,7];
const arrayCopy = [...array]

console.log(arrayCopy);

/
arrayCopy.map(item => console.log(item + 10));


const sum  = arrayCopy.reduce((previousValue, currentValue) => {
    return previousValue + currentValue;
})

console.log(sum);



const multiply = function(a, b, fn) {
    fn(a * b);
}

const printBeautiful = function(value) {
    console.log('-----------' + value + '------------');
}

multiply(10, 30, printBeautiful)