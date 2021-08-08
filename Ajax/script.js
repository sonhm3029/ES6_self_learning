// send request to server
const requestUrl = 'data.txt';

const button = document.querySelector("#btn");

button.addEventListener("click", function() {
    $ajaxUtils.sendGetRequest(requestUrl,
         function(response) {
            document.querySelector("#demo").innerHTML = response.responseText;
        });
})