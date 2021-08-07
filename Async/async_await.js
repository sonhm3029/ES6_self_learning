//async

async function myFunc() {
    return  "this is the result"; 
}

myFunc().then(
    function(value) {
        console.log(value);
    }
)

async function myFunc2(sign) {
        if(sign == 0) {
            return Promise.reject("Error!");
        }
        else{
            return Promise.resolve("Success");
        }
}

myFunc2(1).then(alert);


//await example


async function display() {
    let promise = new Promise(function(resolve, reject) {
        setTimeout(()=> resolve("done"), 1000);
    });

    let result = await promise;

    alert(result);
}

display();

