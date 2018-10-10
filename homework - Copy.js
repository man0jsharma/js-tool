// Build a calculator

// Add
// Sub
// mul
// Div

// Callback

/// Calculator(a, b, callbackfunc)
// should not call add directly


/// Promise function
// Bring calculator to prmoise
// add setTimeOut in each function 1 mins

//hello

var add = function(a, b){
return a+b;
};

var sub = function(a, b){
    return a-b;
    };

var multiply = function(a,b) {
return a*b;
};

var div = function(a, b){
    return a/b;
    };

var calc = function(x,y, callback){
    return callback(x,y);
};

var addition =  calc(10,20, add);
var substraction =  calc(10,20, sub);
var multiplication =  calc(10,20, multiply);
var division =  calc(10,20, div);

console.log('add is: ' +addition);
console.log('sub is: ' +substraction);
console.log('multiply is: ' +multiplication);
console.log('div is: ' +division); 

const promise = new Promise(
    (resolve, reject) =>{
        setTimeout(()=>{
           if(addition>0)
           {
               resolve('promise done');
           }
           else{
               reject('promise failed');
           }
           
        } 
        , 1000)

    }
)
promise.then(value=>{console.log('success :'+value)});
promise.catch(err=>{console.log('error :'+err)});

