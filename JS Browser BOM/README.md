# JS Browser BOM note

## I. JS Window

`window` hay nói cách khác chính là cửa sổ làm việc của browser. Trong JS, tất cả các biến, dữ liệu, objects, functions... tất cả đều là member của `window`.

- Global variables là properties của `window`
- Global functions là methods của `window`

Trong đó bao gồm cả `document` Js cũng là 1 property của window.

```javascript
    window.document.querySelector()

    // bằng với

    document.querySelector()
```

**Một số properties và methods:**

Properties | Description
-----------|------------
`window.innerWidth`|width của browser
`window.innerHeight`|height của browser

Cả hai thuộc tính trên đều không bao gồm  `toolbars and scrollbars`.

Methods | Description
--------|------------
window.open() |open a new window
window.close() |close the current window
window.moveTo() |move the current window
window.resizeTo() |resize the current window

## II. Screen

Gồm:

Thuộc tính | Mô tả
-----------|------
screen.width|
screen.height|
screen.availWidth|
screen.availHeight|
screen.colorDepth|
screen.pixelDepth|

## III. Location

Gồm:

Thuộc tính | Mô tả
-----------|------
window.location.href | trả về (URL) của page
window.location.hostname | trả về domain name của web host
window.location.pathname | trả về path and filename của page
window.location.protocol | trả về the web protocol used (http: or https:)
window.location.assign() | loads page khác

Xem ví dụ tại:
[https://www.w3schools.com/js/js_window_location.asp](https://www.w3schools.com/js/js_window_location.asp)

## IV. History

Gồm:

- history.back() - Quay lại page trước
- history.forward() - Tiến đến page sau page hiên tại

## V. Navigator

**Đọc thêm:**

[https://www.w3schools.com/js/js_window_navigator.asp](https://www.w3schools.com/js/js_window_navigator.asp)

## VI. Popup Alert

Gồm:

### 1. alert()

**Syntax:**

```syntax
  alert("content")
```

```javascript
    //ví dụ
    alert("son");
    alert(1);
```

- Hiển thị ra thông báo nào đó.

### 2. confirm()

```syntax
    confirm("content")
```

**Ví dụ:**

```html
    <!DOCTYPE html>
    <html>
    <body>

        <h2>JavaScript Confirm Box</h2>


        <button onclick="myFunction()">Try it</button>
        
        <p id="demo"></p>
        
        <script>
        function myFunction() {
          var txt;
          if (confirm("Press a button!")) {
            txt = "You pressed OK!";
          } else {
            txt = "You pressed Cancel!";
          }
          document.getElementById("demo").innerHTML = txt;
        }
        </script>

    </body>
    </html>

```

- Hiển thị hộp thoại gồm 2 lựa chọn OK hoặc Cancel. Nếu người dùng bấm OK sẽ trả về `true` và ngược lại trả về `false`

### 3. prompt()

Đưa ra hộp thoại để người dùng nhập:

**Syntax:**

```syntax
    window.prompt("sometext","defaultText");
```

**Ví dụ:**

```html
    <!DOCTYPE html>
    <html>
    <body>

    <h2>JavaScript Prompt</h2>

    <button onclick="myFunction()">Try it</button>

    <p id="demo"></p>

    <script>
    function myFunction() {
      let text;
      let person = prompt("Please enter your name:",    "Harry Potter");
      if (person == null || person == "") {
        text = "User cancelled the prompt.";
      } else {
        text = "Hello " + person + "! How are you today?";
      }
      document.getElementById("demo").innerHTML = text;
    }
    </script>

    </body>
    </html>

```

## VII. JS cookies

