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

