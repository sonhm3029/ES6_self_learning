let promise1 = new Promise(function(resolve, reject) {
    setTimeout(function() {
        resolve([1]);
    }, 1000);
});



let promise2 = new Promise(function(resolve, reject) {
    setTimeout(function() {
        resolve([2,3]);
    }, 6000);
})



Promise.all([promise1, promise2])
    .then(function(values) {
        for( value of values) {
            console.log(value);
        }
    })