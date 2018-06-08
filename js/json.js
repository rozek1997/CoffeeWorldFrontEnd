
function getJson() {
    var dataFile = 'http://localhost:8080/coffee/';
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var jsonObj = JSON.parse(xhttp.responseText);
            alert(jsonObj[0].coffeName);
        }
    };
    xhttp.open("GET", dataFile, true);
    xhttp.send();
}