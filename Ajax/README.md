# AJAX NOTE

## I. Ajax là gì

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
