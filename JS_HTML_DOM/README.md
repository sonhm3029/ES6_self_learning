# JS HTML DOM note

The HTML DOM is a standard for how to get, change, add, or delete HTML elements.

[I. DOM methods](#i-dom-methods)

[II. DOM Document](#ii-dom-document)

[III. DOM elements](#iii-dom-elements)

[IV. DOM HTML](#iv-dom-html)

[V. DOM Events](#v-dom-events)

[VI. DOM Event Listener](#vi-dom-event-listen)

## I. DOM methods

- Chúng ta sẽ rất quen thuộc với 2 thứ sau:

  1. `document.getElementByI('id')` : dùng để tìm và truy cập đến phần tử trong trang thông qua `id` của nó
  2. `.innerHTML` thuộc tính dùng để lấy nội dùng `html` của phần tử hoặc dùng để thay đổi nội dung đó.

**Ví dụ**:

```html

    <div id = "demo">
        content here will be changed
    </div>


    <script>
        document.getElementById('demo').innerHTML = "Hello World!";
    </script>
```

## II. DOM Document

### 1. Finding HTML Elements

Method | Description
-------|------------
document.getElementById(id) | Find an element by element id
document.getElementsByTagName(name) | Find elements by tag name
document.getElementsByClassName(name) | Find elements by class name

### 2. Changing HTML Elements

Property | Description
---------|------------
`element.innerHTML = new html content`|Change the inner HTML of an element
`element.attribute = new value`|Change the attribute value of an HTML element
`element.style.property = new style`|Change the style of an HTML element

Method | Description
-------|------------
`element.setAttribute(attribute, value)` | Change the attribute value of an HTML element

### 3. Adding and Deleting Elements

Method | Description
-------|------------
`document.createElement(element)`|Create an HTML element
`document.removeChild(element)`|Remove an HTML element
`document.appendChild(element)`|Add an HTML element
`document.replaceChild(new, old)`|Replace an HTML element
`document.write(text)`|Write into the HTML output stream

### 4. Adding Events Handlers

Method | Description
-------|------------
`document.getElementById(id).onclick = function(){code}`|Adding event handler code to an onclick event

### 5. Finding HTML Objects

The first HTML DOM Level 1 (1998), defined 11 HTML objects, object collections, and properties. These are still valid in HTML5.

Later, in HTML DOM Level 3, more objects, collections, and properties were added.

Property | Description | DOM
---------|-------------|----
document.anchors | Returns all `<a>` elements that have a name attribute | 1
document.applets | Deprecated | 1
document.baseURI | Returns the absolute base URI of the document | 3
document.body | Returns the `<body>` element | 1
document.cookie | Returns the document's cookie | 1
document.doctype | Returns the document's doctype | 3
document.documentElement | Returns the `<html>` element | 3
document.documentMode | Returns the mode used by the browser | 3
document.documentURI | Returns the URI of the document | 3
document.domain | Returns the domain name of the document server | 1
document.domConfig | Obsolete. | 3
document.embeds | Returns all `<embed>` elements | 3
document.forms | Returns all `<form>` elements | 1
document.head | Returns the `<head>` element | 3
document.images | Returns all `<img>` elements | 1
document.implementation | Returns the DOM implementation | 3
document.inputEncoding | Returns the document's encoding (character set) | 3
document.lastModified | Returns the date and time the document was updated | 3
document.links | Returns all `<area>` and `<a>` elements that have a href attribute | 1
document.readyState | Returns the (loading) status of the document | 3
document.referrer | Returns the URI of the referrer (the linking document) | 1
document.scripts | Returns all `<script>` elements | 3
document.strictErrorChecking | Returns if error checking is enforced | 3
document.title | Returns the `<title>` element | 1
document.URL | Returns the complete URL of the document | 1

## III. DOM elements

- các cách để lấy ra elements trong trang:

### 1. Tìm với id

```javascript

    document.getElementById("id");
```

Nếu không tìm thấy sẽ trả về null.

### 2. Tìm với Tag Name

```javascript
    let parent = document.getElementByid("id);
    parent.getEletmentsByTagName("p");
```

Đầu tiên sẽ tìm element vs `id = "id"` sau đó trong element đó sẽ tìm tất cả các element có tag name `<p>`

**Chú ý: tìm tất cả với tag name thì getElements có `s` theo sau khác với lấy theo id là getElement không có `s`**

### 3. Tìm với class name

Tìm tất cả những elements có `class = "demo"`, result sẽ trả về một list các element với class name như trên

```javascript
    document.getElementsByClassName("demo");
```

### 4. Tìm với Query Selector

- Nếu tìm 1, ví dụ với id thì dùng:

```javascript
    document.querySelector('#demo');
```

- Nếu muốn tìm tất cả, ví dụ tìm tất cả element `<p>` với `class ="test"`:

```javascript

    document.querySelectorAll("p.test");
```

## IV. DOM HTML

Để thay đội nội dung html ta có thể dùng các cách sau

### 1. Dùng innerHTML

- Dùng `innerHTML` để thay đổi toàn bộ nội dun bên trong thẻ `tag`

```html
    <div id = "demo">Thay đổi content</div>

    <script>
        document.getElementById("demo").innerHTML = "Content đã được thay đổi"
    </script>

    <!-- kết quả: <div id = "demo">Content đã được thay đổi</div> -->

```

### 2. Thay đổi atribute của element

**Syntax:**

```html
    document.getElementById(id).atribute = new value;
```

Ví dụ:

```html
    <!DOCTYPE html>
    <html>
        <body>

            <img id="myImage" src="smiley.gif">

            <script>
                document.getElementById("myImage").src = "landscape.jpg";
            </script>

        </body>
    </html>

```

Trong ví dụ này mình đã thay đổi atribute `src` của thẻ `img`
Kết quả nhận được sẽ là:

```html
    <img id="myImage" src="landscape.jpg">
```

### 3. Sử dụng document.write()

Dùng `document.write(smt)` để write `smt` trực tiếp vào trang.

## V. DOM Events

Một số events

### 1. onclick()

Khi user click vào một đối tượng nào đó, công việc sẽ được thực thi

**Ví dụ**:

```html
    <div onclick = "this.innerHTML = 'After'">
        Before
    </div>
```

Khi click vào element nó sẽ tự chuyển từ Before thành after.

hoặc

```html
    <div onclick = "change(this)">
        Before
    </div>

    <script>
        function change(element) {
            element.innerHTML = 'After';
        }
    </script>
```

Ở đây cũng cho kết quả tương tự như ví dụ trên nhưng chúng ta gọi hàm với tham số truyền vào là `this` tức chính là element được click

hoặc

```html
    <div id="demo" onclick = "change()">
        Before
    </div>

    <script>
        function change() {
            document.getElementById("demo").innerHTML = "After";
        }
    </script>
```

hoặc

```html
    <div id="demo">
        Before
    </div>
    <button id = "change">Click me! </button>

    <script>
        document.getElementById("change").onclick = function() {
            document.getElementById("demo").innerHTML = "after";
        }
    </script>
```

### 2. onload và onunload

`onload` và `onunload` được triggered khi người dùng vào page hoặc thoát page.

`onload` có thể dùng để check browser version của user và load chính xác version của webpage dựa trên các thông tin check đc.

`onload` và `onunload` có thể dùng để check Cookies xem có hỗ trợ k

**Ví dụ:**

```html
    <!DOCTYPE html>
    <html>
        <body onload="checkCookies()">

            <h2>JavaScript HTML Events</h2>

            <p id="demo"></p>

            <script>
                function checkCookies() {
                    var text = "";
                    if (navigator.cookieEnabled     ==  true) {
                        text = "Cookies are     enabled.";
                    } else {
                        text = "Cookies are     not     enabled.";
                    }
                    document.getElementById ("demo").    innerHTML = text;
                }
            </script>

        </body>
</html> 
```

### 3. onchange

Thường được sử dụng với `input fields` để kiểm tra `validation`

Ví dụ sau khi ta điền vào input và ấn enter hoặc leave input field thì nội dung bên trong sẽ chuyển thành Uppercase

```html

    <!DOCTYPE html>
    <html>
    <body>

        <h2>JavaScript HTML Events</h2>
        Enter your name: <input type="text" id="fname" onchange="upperCase()">
        <p>When you leave the input field, a function is triggered which transforms the input text to upper case.</p>
        
        <script>
            function upperCase() {
                const x = document.getElementById("fname");
                x.value = x.value.toUpperCase();
            }
        </script>

    </body>
</html>
```

### 4. onmouseover và onmouseout

2 event này sẽ được triggered khi user mouse over hoặc on element

Ví dụ:

```html 

    <!DOCTYPE html>
        <html>
            <body>

                <div onmouseover="mOver(this)" onmouseout="mOut(this)">Mouse Over Me</div>

                <script>
                    function mOver(obj) {
                        obj.innerHTML = "Thank You"
                    }

                    function mOut(obj) {
                        obj.innerHTML = "Mouse Over Me"
                    }
                </script>

            </body>
        </html> 
```

### 4. onmousedown và onmouseup

giống như `onmouseover`, `onmousedown và onmouseup` sẽ được triggered khi giữ chuột hoặc thả chuột tại element

```html
    <!DOCTYPE html>
    <html>
        <body>

            <div onmousedown="mDown(this)" onmouseup="mUp(this)">Click Me</div>

            <script>
                function mDown(obj) {
                  obj.style.backgroundColor = "#1ec5e5";
                  obj.innerHTML = "Release Me";
                }

                function mUp(obj) {
                  obj.style.backgroundColor="#D94A38";
                  obj.innerHTML="Thank You";
                }
            </script>

        </body>
</html> 

```

## VI. DOM Event Listener

- Về `addEventListener`:

**Syntax:**

```javascript
    element.addEventListener(event, function, useCapture);
```

Trong đó:

- `event` là các `event` ta đã tìm hiểu ở phần trước nhưng không có "on" đằng trước. Ví dụ ở đấy `event` sẽ là `"click"` thay vì là `"onclick"`.

- parameter thứ 3, `useCapture` là `true` hoặc `false` chúng ta sẽ nói vào phần tiếp theo.

**Usage:**

- `addEventListener` là method dùng để attaches event handler cho element được chỉ định
- `addEventListener` attaches các event handler và không có trường hợp overwriting tức là:
  - Có thể attaches nhiều event handler cho 1 element
  - Có thể attaches nhiều event handler cùng loại ( ví dụ 2 event handler cùng là "onclick")

**Ví dụ:**

### 1. Thêm một Event Handler cho một Element

```javascript

    element.addEventListener("click", function(){ alert("Hello World!"); });

    //hay

    element.addEventListener("click", myFunction);

    function myFunction() {
        alert ("Hello World!");
    }
```

### 2. Thêm nhiều Event Handlers cho một Element

Ta có thể thêm nhiều Event Handlers bằng `addEventListener` cho cùng một element và kể cả là cùng loại event mà không bị ghi đè lên nhau.

```javascript
    element.addEventListener("click", myFunction);
    element.addEventListener("click", mySecondFunction);

    //hay
    element.addEventListener("mouseover", myFunction);
    element.addEventListener("click", mySecondFunction);
    element.addEventListener("mouseout", myThirdFunction);
```

Như vậy thì cả 2 function của cùng loại event `"click"` đều được triggered khi ta click vào `element` kia

### 3. Add Event handler cho window Object

**Ví dụ:**

```html

    <!DOCTYPE html>
    <html>
        <body>

            <h2>JavaScript addEventListener()</h2>

            <p>This example uses the addEventListener() method on the window object.</p>

            <p>Try resizing this browser window to trigger the "resize" event handler.</p>

            <p id="demo"></p>

            <script>
                window.addEventListener("resize", function(){
                    document.getElementById("demo").innerHTML = Math.random();
                });
            </script>

        </body>
</html>

```

Đây là ví dụ event handler được triggered khi resize window.

### 4. Event Bubbling hay Event Capturing?

Có 2 loại event propagation đó là `bubbling` và `capturing`

_event propagation_ là một cách để định nghĩa thứ tự event occurs khi có các element lồng nhau. Ví dụ như khi ta có `<p>` element bên trong `<div>` element, user click vào `<p>` element thì `click event` của thằng nào được gọi trước ?

- Với `bubbling`,`event` của  thằng nào ở bên trong cùng thì sẽ được gọi trước -> `event` của `<p>` sẽ được gọi trước `<div>`

- Với `capturing` thì ngược lại -> thứ tự sẽ là `<div>` rồi mới đến `<p>`

Như vậy như nói từ phần đầu, tham số thứ 3 của `addEventListener` là `useCapture`, **default** sẽ là `false` tức là dùng `bubbling`, nếu ta pass `true` thì nó sẽ là dùng `capturing` 

**Ví dụ:**

```html

    <!DOCTYPE html>
    <html>
        <head>
            <style>
                #myDiv1, #myDiv2 {
                    background-color: coral;
                    padding: 50px;
                }

                #myP1, #myP2 {
                    background-color: white; 
                    font-size: 20px;
                    border: 1px solid;
                    padding: 20px;
                }
            </style>
            <meta content="text/html; charset=utf-8" http-equiv="Content-Type">
        </head>
        <body>

            <h2>JavaScript addEventListener()</h2>

            <div id="myDiv1">
              <h2>Bubbling:</h2>
              <p id="myP1">Click me!</p>
            </div><br>

            <div id="myDiv2">
              <h2>Capturing:</h2>
              <p id="myP2">Click me!</p>
            </div>

            <script>
            document.getElementById("myP1").addEventListener("click", function() {
                alert("You clicked the white element!");
            }, false);

            document.getElementById("myDiv1").addEventListener("click", function() {
                alert("You clicked the orange element!");
            }, false);

            document.getElementById("myP2").addEventListener("click", function() {
                alert("You clicked the white element!");
            }, true);

            document.getElementById("myDiv2").addEventListener("click", function() {
                alert("You clicked the orange element!");
            }, true);
            </script>

        </body>
</html>


```