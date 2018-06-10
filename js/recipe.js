function getJson() {
    var dataFile = 'http://localhost:8080/coffee/';
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var obj = JSON.parse(xhttp.responseText);
            for (var i = 0; i < Object.keys(obj).length; i++) {
                var output = '<span class="my-span">Metoda: ' + obj[i].method +
                    '<br>Waga kawy: ' + obj[i].coffeeWeight +
                    '<br>Ilość wody : ' + obj[i].waterAmount +
                    '<br>Temperatura wody : ' + obj[i].waterTemperature +
                    '<br>Pochodzenie: ' + obj[i].origin + '<hr><br></span>';

                $('#coffees').append(output);
            }

        }
    };
    xhttp.open("GET", dataFile, true);
    xhttp.send();
}

getJson();
