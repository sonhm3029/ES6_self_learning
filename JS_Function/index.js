// Example with function


//1. argument


function sum() {
    let result  = 0;
    for( value in arguments) {
        result += arguments[value];
    }
    return result;
}


//or

function display(...paras) {
    for( index in paras) {
        console.log(paras[index]);
    }
}


// apply

const a = [12,2,4,1,35,7,34,8,9];


display(2,53,1,5,3,7,2,3);
console.log(sum(1,2,3,4,5,6,7,8,9));
console.log(Math.max.apply(null,a));
console.log(Math.min.apply(null,a));


