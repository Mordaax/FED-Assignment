
function filterSelection(selection) {

    var types = ['mains', 'mains2', 'drinks', 'sides', 'salads']

    for (i = 0; i < types.length; i++) {
        if (types[i] == selection) {
            document.getElementById(types[i]).classList.remove('hide');
        }
        else {
            document.getElementById(types[i]).classList.add('hide')
        }
        if (selection == 'mains') {
            document.getElementById('mains2').classList.remove('hide');
        }
    }
    if (selection == 'all') {
        for (i = 0; i < types.length; i++) {
            document.getElementById(types[i]).classList.remove('hide');
        }

    }
    var buttons = ['allbutton', 'mainsbutton', 'saladsbutton', 'sidesbutton', 'drinksbutton'];
    for (i = 0; i < buttons.length; i++) {
        document.getElementById(buttons[i]).classList.remove('active');
    }
    if (selection == 'all') { document.getElementById('allbutton').classList.add('active') }
    else if (selection == 'mains') { document.getElementById('mainsbutton').classList.add('active') }
    else if (selection == 'drinks') { document.getElementById('drinksbutton').classList.add('active') }
    else if (selection == 'sides') { document.getElementById('sidesbutton').classList.add('active') }
    else if (selection == 'salads') { document.getElementById('saladsbutton').classList.add('active') }
}

var orderprice = {
    'Burger': 8.80,
    'Steak': 13.50,
    'Fish and Chips': 8.80,
    'Spaghetti Bolognese': 7.90,
    'Spaghetti Carbonara': 6.90,
    'Beef Lasagne': 6.90,
    'Cheese Fries': 4,
    'Mozzarella Cheese Sticks': 4,
    'Onion Rings':4,
    'Caesar Salad': 4,
    'Pulled Chicken Salad': 4,
    'Smoked Salmon Salad': 5,
    'Iced Lemon Tea': 2,
    'Peach Tea': 2,
    'Orange Juice': 2,
};



var totalprice = 0;

function remove(itemname) {
    totalprice -= orderprice[itemname];
    document.getElementById('totalprice').innerHTML = '$' + totalprice;
}
function additem(itemname) {
    document.getElementById('orderitems').innerHTML += "<div class='orderitem'><h3>" + itemname + " x 1  &nbsp" + "</h3>" +
        "<button type='button' class='btn btn-danger' onclick=\"this.parentNode.parentNode.removeChild(this.parentNode);remove(" +"'"+itemname+"'" +");\">Remove</button>" +
        "<div class='right'>" +
        "<h3>$" + orderprice[itemname] + " </div >";
    totalprice += orderprice[itemname]
    document.getElementById('totalprice').innerHTML = '$' + totalprice;
}

var today = new Date();
var dd = today.getDate();
var mm = today.getMonth() + 1; //January is 0
var yyyy = today.getFullYear();

if (dd < 10) {
    dd = '0' + dd
}

var lastdate = new Date();
var nmm = lastdate.getMonth();
var nyyyy = lastdate.getFullYear();
nmm = mm + 1;

if (mm < 10) {
    mm = '0' + mm
}
if (nmm < 10) {
    nmm = '0' + nmm
}


today = yyyy + '-' + mm + '-' + dd;
document.getElementById("date").setAttribute("min", today);


nyyyy = yyyy;
lastdate = nyyyy + '-' + nmm + '-' + dd;
document.getElementById("date").setAttribute("max", lastdate);


$("#reset").click(function () {
    $("#form").fadeOut(500);
    document.getElementById('orderitems').innerHTML = "<div class='orderitem'><h3> Total price:</h3 > <div class='right' id='total'><h3 id='totalprice'>$0</h3></div></div>";
    $("#form").fadeIn();
})

$(document).ready(function ($) {
    $(document).on('submit', '#form', function (event) {
        event.preventDefault();
        if (document.getElementById('orderitems').innerHTML = "<div class='orderitem'><h3> Total price:</h3 > <div class='right' id='total'><h3 id='totalprice'>$0</h3></div></div>") {
            swal("Unsuccessful", "You have to order something", "error");
        }
        else {
            swal("Successful", "Order was submitted", "success");
        }     
        $("#form").fadeOut(500);
        document.getElementById("orderitems").innerHTML = "<div class='orderitem'><h3> Total price:</h3 > <div class='right' id='total'><h3 id='totalprice'>$0</h3></div></div>";
        $("#form").fadeIn();
        document.getElementById("name").value = '';
        document.getElementById("address").value = '';
        document.getElementById("postalcode").value = '';
        document.getElementById("phonenumber").value = '';
        document.getElementById("email").value = '';
        document.getElementById("cvv").value = '';
        document.getElementById("expyear").value = '';
        document.getElementById("expmonth").value = '';
        document.getElementById("cardno").value = '';
        document.getElementById("cardname").value = '';
    });
});