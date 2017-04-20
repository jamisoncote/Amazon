/**
 * Created by jamisoncote on 4/19/17.
 */
// Basic JS File
function loadXMLDoc() {
    let endpoint = "https://www.amazon.com/mn/search/ajax?rh=i%3Aaps%2Ck%3Aoyster+knife&fromHash=&fromRH=k%3Aoyster+shucker%2Cn%3A1055398%2Cn%3A284507&section=ATF&fromApp=gp%2Fsearch&fromPage=results&fromPageConstruction=auisearch&version=2&ajp=iss";
    //let endpoint = "https://www.google.com";
    //var endpoint = "https://www.foxaux.com";
    console.log("Endpoint: " + endpoint);
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("demo").innerHTML = this.responseText;
        }
        else {
            document.getElementById("demo").innerHTML = "Bad Request: " + this.responseText + "<br/> HTTP Status: " + this.status;
        }
    }
    xhttp.open("GET", endpoint, true);
    xhttp.setRequestHeader('Access-Control-Allow-Origin', '*');
    //xhttp.setRequestHeader('Access-Control-Allow-Origin', endpoint);
    //xhttp.header('Access-Control-Allow-Origin', '*');
    //xhttp.setRequestHeader('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
    // xhttp.setRequestHeader('Access-Control-Allow-Headers', 'accept, content-type, x-parse-application-id, x-parse-rest-api-key, x-parse-session-token');
    xhttp.send();

    var response = xhttp.getAllResponseHeaders();
    console.log("response headers: " + response);
    console.log("Status: " + xhttp.status);
    //document.getElementById("demo").innerHTML = this.responseText;
    console.log("Headers " + xhttp.headers);

}
