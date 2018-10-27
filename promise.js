const promise = new Promise(
    (resolve, reject) => {
        setTimeout(
            () => {
                // console.log('Timer Timed out')
                reject('Promise Done');
            },
            2000)
    }
)
//Data base middleware

promise
    .then((value) => {console.log('Success ' + value)})
    .catch(err => {console.log('Error ' + err)})

// Client UI 


////

