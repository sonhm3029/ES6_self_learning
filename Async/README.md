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

- `.then` method default sẽ trả về một promise object ở trạng thái `pending`.
- Các tham số:
  - Tham số truyền vào `resolve` và `reject` như ở các phần trước `resolve(successfullSign)` hay `reject(rejectedSign)`
  - Tham số được return từ các `handlerFunction` của **fullfiled state**.

- Các tham số trên sẽ được truyền trực tiếp vào các `handlerFunction` ( mặc định là tham số thứ nhất của hàm).
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
