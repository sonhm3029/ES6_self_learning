function myFunc() {
    let clock = new Date();
    document.getElementById("demo").innerHTML =
     clock.getHours() + ":" +
     clock.getMinutes() + ":" +
     clock.getSeconds();
}

setInterval(myFunc, 1000);