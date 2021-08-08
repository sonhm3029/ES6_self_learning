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
    function handleResponse(request,
                            responseHandler) {
      if ((request.readyState == 4) &&
         (request.status == 200)) {
        responseHandler(request);
      }
    }


    // Expose utility to the global object
    global.$ajaxUtils = ajaxUtils;


    })(window);