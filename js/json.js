var myObj = [{"coffeeName":"Kafa1","roastDate":"wczoraj","metresAboveSeaLevel":100,"roastery":"Java","process":"Natural",
    "origin":"Kenia","beanType":"ARABICA","username":"rozek1997","id":"1"},{"coffeeName":"Kafa2","roastDate":"dzis",
    "metresAboveSeaLevel":200,"roastery":"CR","process":"Washed","origin":"Columbia","beanType":"BLEND",
    "username":"rozek1997","id":"2"},{"coffeeName":"Kafa3","roastDate":"jutro","metresAboveSeaLevel":300,"roastery":"FH",
    "process":"Pulped Natural","origin":"San Salvador xD","beanType":"ROBUSTA","username":"rozek1997","id":"3"}];
var myJSON = JSON.stringify(myObj);
localStorage.setItem("testJSON", myJSON);
var text = localStorage.getItem("testJSON");
var obj = JSON.parse(text);




// function createCoffeMenu() {
//     for (var i = 0; i < Object.keys(obj).length; i++) {
//         var output = '<span class="my-span">Nazwa: ' + obj[i].coffeeName +
//             '<br>Data palenia: ' + obj[i].roastDate +
//             '<br>Palarnia: '+ obj[i].roastery +
//             '<br>Proces: '+ obj[i].process +
//             '<br>Pochodzenie: '+ obj[i].origin +'<br></span>';
//
//         $('#coffees').append(output);
//     }
// }
//
function getJson() {
    var dataFile = 'http://localhost:8080/coffee/';
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var obj = JSON.parse(xhttp.responseText);
            for (var i = 0; i < Object.keys(obj).length; i++) {
                var output = '<span class="my-span">Nazwa: ' + obj[i].coffeeName +
                    '<br>Data palenia: ' + obj[i].roastDate +
                    '<br>Palarnia: ' + obj[i].roastery +
                    '<br>Proces: ' + obj[i].process +
                    '<br>Pochodzenie: ' + obj[i].origin + '<hr><br></span>';

                $('#coffees').append(output);
            }

        }
    };
    xhttp.open("GET", dataFile, true);
    xhttp.send();
}

getJson();


