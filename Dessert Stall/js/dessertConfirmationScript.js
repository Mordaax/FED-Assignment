// JavaScript source code
function confirmationPage() {
    var name = localStorage.getItem("name");
    var phone = localStorage.getItem("phone");
    var address = localStorage.getItem("address");
    var postal = localStorage.getItem("postal");
    var date = localStorage.getItem("date");
    var time = localStorage.getItem("time");

    document.getElementById("name").innerHTML = name;
    document.getElementById("phone").innerHTML = phone;
    document.getElementById("address").innerHTML = address;
    document.getElementById("postal").innerHTML = postal;
    document.getElementById("deliveryDateTime").innerHTML = date + " " + time;

    var totalPrice = localStorage.getItem("totalPrice");
    var food1Count = localStorage.getItem("food1Count");
    var food2Count = localStorage.getItem("food2Count");
    var food3Count = localStorage.getItem("food3Count");
    var food4Count = localStorage.getItem("food4Count");
    var food5Count = localStorage.getItem("food5Count");
    var food6Count = localStorage.getItem("food6Count");
    var food7Count = localStorage.getItem("food7Count");
    var food8Count = localStorage.getItem("food8Count");

    if (food1Count > 0) {
        document.getElementById("orderDetails").innerHTML += "<tr><td>Ice Jelly w Cocktail</td><td>" + food1Count + "</td><td>$1.90</td></tr>";
    }
    if (food2Count > 0) {
        document.getElementById("orderDetails").innerHTML += "<tr><td>Ice Kachang</td><td>" + food2Count + "</td><td>$1.50</td></tr>";
    }
    if (food3Count > 0) {
        document.getElementById("orderDetails").innerHTML += "<tr><td>Strawberry Milk Ice</td><td>" + food3Count + "</td><td>$2.10</td></tr>";
    }
    if (food4Count > 0) {
        document.getElementById("orderDetails").innerHTML += "<tr><td>Mango Milk Ice</td><td>" + food4Count + "</td><td>$2.10</td></tr>";
    }
    if (food5Count > 0) {
        document.getElementById("orderDetails").innerHTML += "<tr><td>Red Ruby w Sago</td><td>" + food5Count + "</td><td>$2.10</td></tr>";
    }
    if (food6Count > 0) {
        document.getElementById("orderDetails").innerHTML += "<tr><td>Fruit Chin Chow Combo</td><td>" + food6Count + "</td><td>$2.50</td></tr>";
    }
    if (food7Count > 0) {
        document.getElementById("orderDetails").innerHTML += "<tr><td>Atap Seed w Rose Syrup</td><td>" + food7Count + "</td><td>$1.90</td></tr>";
    }
    if (food8Count > 0) {
        document.getElementById("orderDetails").innerHTML += "<tr><td>Mango Pomelo Sago</td><td>" + food8Count + "</td><td>$3.00</td></tr>";
    }

    var totalPrice = localStorage.getItem("totalPrice");
    document.getElementById("totalPrice").innerHTML += "$" + totalPrice;
}