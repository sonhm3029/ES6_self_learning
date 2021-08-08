# JS Async note

[I. Simple example with callback function](#i-simple-example-with-callback-function)

[II. Asynchronous](#ii-asynchronous)

[III. Promise](#iii-promise)

[IV. Async and Await](#iv-async-and-await)

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

## III. Promise

### 1. Definition

Sử dụng `Callback` là một phương pháp hữu ích trong việc lập trình bất đồng bộ. Nhưng phương pháp này không còn thật sự hữu ích khi số lượng hàm `Callback` lồng nhau lên đến những con số quá lớn khiến cho code của chúng ta cực kì khó nhìn

**Ví dụ:**

```javascript

    function thuc_day(viecnaodo){
        viecnaodo();
    }

    function danh_rang(viecnaodo){
        viecnaodo();
    }

    function di_an_sang(viecnaodo){
        viecnaodo();
    }

    // Code không tối ưu
    function main(){
        thuc_day(function(){
            danh_rang(function(){
                di_an_sang(function(){
                    console.log('OMG!!!!');
                });
            });
        });
    }

```

Vậy:

 Promise là một cơ chế trong JavaScript giúp bạn thực thi các tác vụ bất đồng bộ mà không rơi vào  tình trạng có quá nhiều các callback lồng vào nhau gây tình trạng callback hell hay pyramid of doom. Thực tế promises là 1 special JavaScript object thể hiện cho sự hoàn thành hoặc thất bại của một tiến trình bất đồng bộ.

Để khai báo một Promise Object

**Syntax:**

```javascript
    let promise = new Promise(function(resolve, reject) {
        //do smt !!
    })
```

Một Promise Object gồm các trạng thái:

- `pending`: Chưa có công việc nào được thực hiện ( cả 2 hàm `resolve` và `reject` đều chưa được gọi).

- `settled` bao gồm:
  - `fullfiled`: khi hàm `resolve` được gọi
  - `rejected`: khi hàm `reject` được gọi

![promise image](./promises.png)  

Như vậy thực chất, `resolve` và `reject` chính là một dạng tín hiệu. Ví dụ trong phần code `do smt` ta sẽ thực hiện một yêu cầu gì đó, nếu yêu cầu đó có thể thực hiện được, ta sẽ đưa ra tín hiệu trạng thái đó là `resolve` và ngược lại `reject` nếu có lỗi nào đó xảy ra.

```javascript
    let promise = new Promise(function(resolve, reject) {
        // Giả sử tại đây ta thực hiện công việc nào đó, sẽ có thông báo rằng cv đó có thể thực hiện được không.
        // Nếu không:
        if(err) {
            reject(rejectedSign);
        }// nếu có
        else {
            resolve(successfullSign);
        }
    })
```

### 2 .then() method

Như vậy với `resolve` hoặc `reject` được gọi ra ta sẽ biết được tín hiệu cho biết ta phải lm gì tiếp theo. Và để tiếp tục ta sử dụng `.then()`

**Syntax:**

```javascript
    promise.then(
        function(successfullSign) {/*code if successfull*/},
        function(rejectedSign) { /*code if some error*/}
    )
```

Như vậy `.then` method của promise nhận vào 2 tham số là 2 function theo thứ tự function 1 sẽ thực hiện công việc nào đó nếu nhận được tín hiệu thành công (`resolve`) và function 2 sẽ thực hiện công việc nào đố nếu nhận được tín hiệu (`reject`).

**Note:**

- Nếu như không có `resolve` hay `reject` được gọi thì chẳng có hàm nào trong `.then` được thực hiện vì trạng thái vẫn là `pending`.

- Ta có thể chỉ để cho `resolve` được gọi tức là luôn có trạng thái `fullfiled` bằng cách luôn gọi `resolve`:

```javascript

    let promise = new Promise(function(resolve, reject) {
        resolve(successfullSign);
    })

    promise.then(
        function(successfullSign) {/*code if successfull*/},
        function(rejectedSign) { /*code if some error*/}
    )

    //hoặc không truyền vào errorHandler function
    promise.then(
        function(successfullSign) {/*code if successfull*/}

    )
```

- Ta cũng có thể chỉ nhận trạng thái `rejected` :

```javascript
    let promise = new Promise(function(resolve, reject) {
        reject(rejectedSign);
    })
    // truyền null vào tham số thứ nhất

    promise.then(
        null,
        function(rejectedSign) { /*code if some error*/}
    )
```

### 3. catch() method

Thay vì truyền 2 tham số vào `.then` ta cũng có thể sử dụng `.catch` method để handle error như sau:

```javascript

    let promise = new Promise(function(resolve, reject) {
        if(err) {
            reject(rejectedSign);
        }
        else {
            resolve(successfullSign);
        }
    })

    promise.then(
        function() {/*code if successfull*/}
    )
    .catch(
        function() {/* code if rejected */}
    )
```

**Nhưng nếu như có cả 2 tham số trong `.then` và `.catch` thì Error Handler sẽ được thực hiện theo hàm trong `.then`.**

### 4. Chaining

Một điều giúp cho việc sử dụng Promise với nhiều công việc bất đồng bộ trở nên dễ dàng hơn đó là chaining trong `.then` method.

- Giá trị được `return` từ `.then` sẽ trở thành tham số truyền trực tiếp vào `function` trong `.then` kế tiếp
- `function` trong `.then` có thể `return` promise, khi đó các công việc trong promise sẽ được thực hiện trước rồi mới chạy đến `.then` tiếp theo

```javascript
    // .then có thể trả về value bất kì, value này sẽ là tham số truyền trực tiếp vào handlerFunction của .then tiếp theo và mặc định là tham số đầu tiên của function đó

    promise.then(
        function() {
            return 1;
        }
    )
    .then(
        function(value) {
            console.log(value);// in ra 1
            return 2;
        }
    )
    .then(
        function(value) {
            console.log(value);
            return new Promise(function(resolve, resject) {
                setTimeout(reject(3), 1000);
            })
        }
    )
    .then(
        function(value) {
            console.log(value); // đợi 1 giây khi setTimeout từ promise phía trên thực hiện xong mới nhận giá trị 3 từ reject truyền vào
            //=> In ra 3
        }
    )
    .then(
        function(value) {
            console.log(value);// in ra undefined do .then trước không return gì cả
        }
    )
```
<!-- [link](#2) -->

**Ví dụ với việc đọc nhiều file:**

```javascript
    var fs = require('fs');

    function readFile(path) {
        return new Promise(function(resolve, reject) {
            fs.readFile(path, {encoding: 'utf-8'}, function(err, data) {
            if(err)
            {
                reject("Error");
            }
                resolve(data);
            })
        })
    }
    //Giả sử như chúng ta có 2 file data1.txt và data2.txt. file data3.txt không tồn tại

    readFile('data1.txt').then(
        function(data) {
            console.log(data);
            return readFile('data2.txt');
         }
    )
    .then(
        function(value, value2) {
            console.log(value);
            console.log(value2);
            return readFile('data3.txt');
        }
    )
    .then(
        function(value) {
            console.log(value);
        }
    )
    .catch(
        function(err) {
            console.log(err);
        }
    )

```

- `handlerFunction` trong `.catch` sẽ handler bất cứ lỗi nào bị `reject` bởi promise.
- Ở ví dụ trên khi chạy đến hàm `readFile('data3.txt')` sẽ có lỗi xảy ra vì file không tồn tại, vì vậy hàm `reject(error)` sẽ được gọi và function trong `.catch()` được thực hiện.

Xem trong:

[example file](./index.js)

### 5. Promise.all

`Promise.all` dùng để chạy song song nhiều `Promise` không liên quan với nhau

**Ví dụ:**

```javascript
    let promise1 = new Promise(function(resolve, reject) {
        setTimeout(function() {
            resolve([1]);
        }, 1000);
    });

    promise1.then(
        function(value) {
            console.log(value);
        }
    )

    let promise2 = new Promise(function(resolve, reject) {
        setTimeout(function() {
            resolve([2,3]);
        }, 6000);
    })

    promise2.then(
        function(value) {
            console.log(value);
        }
    )
```

Ta thấy trong ví du trên, nếu như để 2 `Promise` không liên quan với nhau chạy độc lập sẽ mất tận 7 giây để xong.

Thay vì thế ta có thể dùng `Promise.all`

```javascript

    Promise.all([promise1, promise2])
    .then(function(values) {
        for( value of values) {
            console.log(value);
        }
    })

    //values = [[1], [2,3]];
```

`Promise.all` nhận tham số truyền vào là mảng các `promise` và trả về `promise` nên ta có thể sử dụng `.then`. Giá trị được `resolve` ở từng promise sẽ được gộp vào trở thành các phần tử của một mảng và truyền trực tiếp vào `functionHandler` như ví dụ trên.

Như vậy bây giờ việc chạy 2 promise trên được gọn lại còn 6 giây.

Nếu như 1 trong các promise truyền vào trong `promise.all` mà lỗi hoặc `reject` thì tất cả quá trình sẽ dừng lại tại chỗ lỗi đó.

Xem trong:

[promise all](./promise_all.js)

## IV. Async and Await

Async và Await giúp cho việc viêt và sử dụng promise dễ dàng hơn.

- async tạo function trả về promise
- await tạo function wait for promise

### 1. Async

The keyword `async` before a function makes the function return a promise:

**Syntax:**

```javascript
    async function myFunction() {
        return smt;
    }
```

bằng với:

```javascript
    async function myFunction() {
        return Promise.resolve(smt);
    }
```

sau đó ta có thể dùng như với promise object:

```javascript

    myFunction().then(
        function (value) {
            //do smt
        },
        function(err) {
            //do smt
        }
    )
```

### 2. Await

Khi đặt `await` keyword trước một promise nó sẽ đợi cho đến khi promise kết thúc và trả về kết quả.

```javascript
    let value = await promise;
```

`await` keyword chỉ có thể được sử dụng trong `async function`

**Ví dụ:**

```javascript

    async function myFunc() {

        let promise = new Promise((resolve, reject) => {
            setTimeout(() => resolve("done!"), 1000)
        });

        let result = await promise; // wait until the promise resolves (*)

        alert(result); // "done!"
    }

    myFunc();
```

[Xem trong file](async_await.html)

Tham khảo thêm tại:

[Học Javascript nâng cao với Promise/Async và Callback](https://suntech.edu.vn/hoc-javascript-nang-cao.sunpost.html)

[PROMISE – HỨA THẬT NHIỀU THẤT HỨA THẬT NHIỀU](https://toidicodedao.com/2016/07/05/javascript-promise/)

[Promise là khỉ gì nhỉ](https://kipalog.com/posts/Promise-la-khi-gi-)

[Tìm hiểu về Javascript Promise](https://codeaholicguy.com/2016/01/26/tim-hieu-ve-javascript-promise/)