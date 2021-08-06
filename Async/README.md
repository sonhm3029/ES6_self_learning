# JS Async note

## I. Simple example with callback function

```javascript
    function display(value) {
        console.log(value);
    }

    function sum(a, b, display) {
        display(a + b);
    }

    sum(2, 3, display)//result: 5

```

## II. Asynchronous

Functions running in parallel with other functions are called `asynchronous`

A good example is JavaScript `setTimeout()`

### 1. Example with setTimeout()

```javascript

    setTimeout(myFunction, 3000);

    function myFunction() {
        document.getElementById("demo").innerHTML = "I love You !!";
    }
```

In the example above, `myFunction` is used as a `callback`.

The function (the function name) is passed to `setTimeout()` as an argument.

3000 is the number of milliseconds before time-out, so `myFunction()` will be called after 3 seconds.

### 2. Example with setInterval()

```javascript
    setInterval(myFunction, 1000);

    function myFunction() {
        let d = new Date();
        document.getElementById("demo").innerHTML=
        d.getHours() + ":" +
        d.getMinutes() + ":" +
        d.getSeconds();
}
```

In the example above, `myFunction` is used as a `callback`.

The function (the function name) is passed to `setInterval()` as an argument.

1000 is the number of milliseconds between intervals, so `myFunction()` will be called every second.

## III. promise

- "Producing code" is code that can take some time

- "Consuming code" is code that must wait for the result

- A Promise is a JavaScript object that links producing code and consuming code

`A JavaScript Promise object contains both the producing code and calls to the consuming code:`

**Promise Syntax:**

```javascript
    let myPromise = new Promise(function        (myResolve, myReject) {
    // "Producing Code" (May take some time)

        myResolve(); // when successful
        myReject();  // when error
    });

    // "Consuming Code" (Must wait for a fulfilled Promise)
    myPromise.then(
        function(value) { /* code if successful */ },
        function(error) { /* code if some error */ }
    );
```

Result | Call
-------|-----
Success | myResolve(result value)
Error | myReject(error object)

**Promise Object Properties:**

A JavaScript Promise object can be:

- Pending
- Fulfilled
- Rejected

The Promise object supports two properties: state and result.

While a Promise object is "pending" (working), the result is undefined.

When a Promise object is "fulfilled", the result is a value.

When a Promise object is "rejected", the result is an error object.

**Example:**

```javascript
    let myPromise = new Promise(function(myResolve, myReject) {
    let req = new XMLHttpRequest();
    req.open('GET', "mycar.htm");
    req.onload = function() {
        if (req.status == 200) {
            myResolve(req.response);
        } else {
            myReject("File not Found");
        }
    };
    req.send();
    });

    myPromise.then(
        function(value) {myDisplayer(value);},
        function(error) {myDisplayer(error);}
    );
```
