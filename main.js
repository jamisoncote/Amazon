/**
 * Created by jamisoncote on 4/19/17.
 */
// Basic JS File
function loadXMLDoc() {
    let endpoint = "https://www.amazon.com/mn/search/ajax?rh=i%3Aaps%2Ck%3Aoyster+knife&fromHash=&fromRH=k%3Aoyster+shucker%2Cn%3A1055398%2Cn%3A284507&section=ATF&fromApp=gp%2Fsearch&fromPage=results&fromPageConstruction=auisearch&version=2&ajp=iss";
    console.log("Endpoint: " + endpoint);
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("demo").innerHTML =
                this.responseText;
        }
    };

    xhttp.open("GET", endpoint, true);
    xhttp.send();
}
