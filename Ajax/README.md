# AJAX NOTE

[I. Khái niệm ajax](#i-khai-niem-ajax)

[II. Ajax XMLHttp](#ii-ajax-xmlhttp)

## I. Khái niệm ajax

**AJAX** = **A**synchronous **J**avaScript **A**nd **X**ML.

AJAX là sự kết hợp của:

- A browser built-in XMLHttpRequest object (to request data from a web server)

- JavaScript and HTML DOM (to display or use the data)

- Ajax giúp chúng ta tương tác với server:
  - Gửi request lên server để lấy dữ liệu về
  - Đẩy dữ liệu từ trang web lên server.
  - Update trang web mà không cần reload lại trang

Đây là cách mà AJAX làm việc:

![pic_ajax](./pic_ajax.gif)

1. Một sự kiện nào đó occured trên web page (the page is loaded, a button is clicked)
2. Một XMLHttpRequest object được tạo bởi Javascript
3. The XMLHttpRequest object gửi request đến web server
4. Server nhận được và xử lý request
5. Server gửi response lại cho webpage
6. Javascript nhận và xử lý response
7. Javascript thực hiện công việc (ví dụ như update page)

## II. Ajax XMLHttp

Các bước sử dụng XMLHttpRequest Object:

1. Tạo XMLHttpRequest object
2. Khai báo callback function
3. Mở XMLHttpRequest object
4. Gửi resquest đến server

### 1. Tạo XMLHttpRequest object

```javascript
    //Với các browser hiện tại chúng ta có thể tạo luôn XMLHttpRequest Object với syntax:

    let request = new XMLHttpRequest();

    //hoặc để chắc chắn ta có thể tạo hàm để kiểm tra supported XMLHttp object với browser như sau
    // global là window tức browser
    function getRequestObject() {
      //check which XMLHttp objects is available to us
      if (global.XMLHttpRequest) {
        return (new XMLHttpRequest());
      } 
      else if (global.ActiveXObject) {
        // For very old IE browsers (optional)
        return (new ActiveXObject("Microsoft.XMLHTTP"));
      } 
      else {
        global.alert("Ajax is not supported!");
        return(null); 
      }
    }

```

### 2. Khai báo function để handle response

Property | Description
---------|------------
onreadystatechange | Defines a function to be called when the readyState property changes
readyState | Holds the status of the XMLHttpRequest.<br>0: request not initialized <br>1: server connection established <br>2: request received<br>3: processing request<br>4: request finished and response is ready
status | 200: "OK"<br>403: "Forbidden"<br>404: "Page not found"<br>For a complete list go to the Http Messages Reference
statusText | Returns the status-text (e.g. "OK" or "Not Found")

Vậy để chắc chắn về trạng thái của `request obj` ta tạo một function `handleResponse` để kiểm tra `readyState` và thực hiện `responeHandler` của coder viết để xử lý response.

```Javascript
    // Ở đây request nếu như có readyState là 4 và status là 200 tức là thành công, resquest bây giờ sẽ contain response vì vậy ta truyền request vào hàm responseHandler ( hàm ta sẽ tự define để thực hiện cv nào đó vs response trong request được trả về.)
    function handleResponse(request,responseHandler) {
      if ((request.readyState == 4) &&
         (request.status == 200)) {
        responseHandler(request);
      }
    }

    Và sau đó truyền call back vào .onreadystatechange

    request.onreadystatechange = 
          function() { 
            handleResponse(request, responseHandler); 
          };
```

### 3. Gửi resquest

Sau khi đã khai báo đủ function để check và handle response ta sẽ gửi request lên server

```javascript
    //Chính thức gửi request lên server
        request.open("GET", requestUrl, true);
        request.send(null); // for POST only
```

Trong đó, phương thức `.send` là sử dụng khi dùng `request.open("POST"....)`, nếu không dùng thì ta truyền vào null.

`.open()` gồm 3 tham số:

- tham số thứ nhất là type request, `"GET"` hay `"POST"`...
- tham số thứ hai là `url` đến server
- tham số thứ ba cho biết sử dụng bất đồng bộ hay đồng bộ với
  - `true`: asynchronous
  - `false`: synchoronous

Sau khi gửi request, `onreadystatechange` sẽ kiểm tra `readyState` và trả về `request` object contain response bên trong, và ta sẽ truyền `request` vào hàm `responseHandler` của chúng ta để xử lý.

**Full code để có thể sử dụng trong nhiều project khác nhau:**

```javascript
    
    (function (global) {

    // tạo một namespace để sử dụng với window
    var ajaxUtils = {};


    // Khởi tạo XMLHttpRequest Object bằng function check
    function getRequestObject() {
      //check which XMLHttp objects is available to us
      if (global.XMLHttpRequest) {
        return (new XMLHttpRequest());
      } 
      else if (global.ActiveXObject) {
        // For very old IE browsers (optional)
        return (new ActiveXObject("Microsoft.XMLHTTP"));
      } 
      else {
        global.alert("Ajax is not supported!");
        return(null); 
      }
    }


    // tạo một function để gửi GET request đến  'requestUrl'
    ajaxUtils.sendGetRequest = 
      function(requestUrl, responseHandler) {
        //tạo XMLHttp object
        var request = getRequestObject();


        //Tạo function kiểm tra trạng thái request và function để handle response khi nó được trả về
        request.onreadystatechange = 
          function() { 
            handleResponse(request, responseHandler); 
          };
        
        //Chính thức gửi request lên server
        request.open("GET", requestUrl, true);
        request.send(null); // for POST only
      };


    // Only calls user provided 'responseHandler'
    // function if response is ready
    // and not an error
    function handleResponse(resquest,
                            responseHandler) {
      if ((request.readyState == 4) &&
         (request.status == 200)) {
        responseHandler(request);
      }
    }


    // Expose utility to the global object
    global.$ajaxUtils = ajaxUtils;


    })(window);

```

Đoạn code này ta sẽ để trong file khai báo ajax ví dụ `ajax_utils.js`

Việc còn lại là sử dụng ajax bên trong file `script.js` chính

Xem ví dụ trong 3 file

[index.html](./index.html)

[ajax_utils.js](./ajax_utils.js)

[script.js](./script.js)

Tham khảo thêm tại:

[https://www.w3schools.com/js/js_ajax_http.asp](https://www.w3schools.com/js/js_ajax_http.asp)

[https://developer.mozilla.org/en-US/docs/Web/Guide/AJAX/Getting_Started](https://developer.mozilla.org/en-US/docs/Web/Guide/AJAX/Getting_Started)

[https://codelearn.io/sharing/ajax-co-ban-cho-lap-trinh-front-end](https://codelearn.io/sharing/ajax-co-ban-cho-lap-trinh-front-end)