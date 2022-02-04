// JavaScript source code
function ShowMenu() {
    var menu = document.getElementById("menu");
    if (menu.style.display == "none") {
        menu.style.display = "block";
    }
    else {
        menu.style.display = "none";
    }
}

function orderPrice() {
    food1Count = document.getElementById("food1").value;
    food2Count = document.getElementById("food2").value;
    food3Count = document.getElementById("food3").value;
    food4Count = document.getElementById("food4").value;
    food5Count = document.getElementById("food5").value;
    food6Count = document.getElementById("food6").value;
    food7Count = document.getElementById("food7").value;
    food8Count = document.getElementById("food8").value;

    if (food1Count != 0 || food2Count != 0 || food3Count != 0 || food4Count != 0 || food5Count != 0 || food6Count != 0 || food7Count != 0 || food8Count != 0) {
        document.getElementById("orderInfo").innerHTML = "<h4>--- Your Order ---</h4>";
    }
    else {
        document.getElementById("orderInfo").innerHTML = "";
    }

    if (food1Count > 0) {
        document.getElementById("orderInfo").innerHTML += "<p>Ice Jelly w Cocktail x " + food1Count + "</p>";
    }
    if (food2Count > 0) {
        document.getElementById("orderInfo").innerHTML += "<p>Ice Kachang x " + food2Count + "</p>";
    }
    if (food3Count > 0) {
        document.getElementById("orderInfo").innerHTML += "<p>Strawberry Milk Ice x " + food3Count + "</p>";
    }
    if (food4Count > 0) {
        document.getElementById("orderInfo").innerHTML += "<p>Mango Milk Ice x " + food4Count + "</p>";
    }
    if (food5Count > 0) {
        document.getElementById("orderInfo").innerHTML += "<p>Red Ruby w Sago x " + food5Count + "</p>";
    }
    if (food6Count > 0) {
        document.getElementById("orderInfo").innerHTML += "<p>Fruit Chin Chow Combo x " + food6Count + "</p>";
    }
    if (food7Count > 0) {
        document.getElementById("orderInfo").innerHTML += "<p>Atap Seed w Rose Syrup x " + food7Count + "</p>";
    }
    if (food8Count > 0) {
        document.getElementById("orderInfo").innerHTML += "<p>Mango Pomelo Sago x " + food8Count + "</p>";
    }

    var totalPrice = food1Count * 1.9 + food2Count * 1.5 + food3Count * 2.1 + food4Count * 2.1 + food5Count * 2.1 + food6Count * 2.5 + food7Count * 1.9 + food8Count * 3;

    if (totalPrice > 0) {
        document.getElementById("orderInfo").innerHTML += "<h6>Total Price: $" + totalPrice.toFixed(2) + "</h6>";
    }

    localStorage.setItem("totalPrice", totalPrice.toFixed(2));
    localStorage.setItem("food1Count", food1Count);
    localStorage.setItem("food2Count", food2Count);
    localStorage.setItem("food3Count", food3Count);
    localStorage.setItem("food4Count", food4Count);
    localStorage.setItem("food5Count", food5Count);
    localStorage.setItem("food6Count", food6Count);
    localStorage.setItem("food7Count", food7Count);
    localStorage.setItem("food8Count", food8Count);
}

function submitForm() {

    var confirmation = confirm("Confirm Dessert Order?");

    if (confirmation == true) {
        var name = document.getElementById("name").value;
        var phone = document.getElementById("phone").value;
        var address = document.getElementById("address").value;
        var postal = document.getElementById("postal").value;
        var date = document.getElementById("date").value;
        var time = document.getElementById("time").value;

        localStorage.setItem("name", name);
        localStorage.setItem("phone", phone);
        localStorage.setItem("address", address);
        localStorage.setItem("postal", postal);
        localStorage.setItem("date", date);
        localStorage.setItem("time", time);

        window.open("dessertConfirmation.html", "_blank");
    }
}

function resetForm() {
    document.getElementById("orderInfo").innerHTML = "";
}

var minDate = new Date();

twoHoursFromNow = minDate.getHours() + 2;

if (twoHoursFromNow > 20) {
    minDate.setDate(minDate.getDate() + 1);
}

var dd = minDate.getDate();
var mm = minDate.getMonth() + 1;
var yyyy = minDate.getFullYear();

if (dd < 10) {
    dd = '0' + dd
}

if (mm < 10) {
    mm = '0' + mm
}

minDate = yyyy + '-' + mm + '-' + dd;
document.getElementById("date").setAttribute("min", minDate);

if (twoHoursFromNow < 9) {
    document.getElementById("time").setAttribute("min", "09:00");
    document.getElementById("time").setAttribute("max", "20:00");
}
else {
    document.getElementById("time").setAttribute("min", twoHoursFromNow);
    document.getElementById("time").setAttribute("max", "20:00");
}