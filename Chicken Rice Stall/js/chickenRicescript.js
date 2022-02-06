// JavaScript source code
data = [
    {
        "name": "Steamed Chicken Rice",
        "image": "images/SteamedChickenRice.jpg",
        "caption": "Our Steamed chicken rice is the most popular dish out of every other dish that we sell. This is a recommended fan favourite!"
    },
    {
        "name": "Roasted Chicken Rice",
        "image": "images/RoastedChickenRice.jpg",
        "caption": "Coming up next is our signature Roasted chicken rice. Many people have debated whether it is better than our Steamed chicken rice, what do you think?"
    },
    {
        "name": "Soy Sauce Chicken Rice",
        "image": "images/SoySauceChickenRice.jpg",
        "caption": "This classic dish is loved by many of our customers, it may not be as popular as the Steamed or Roasted chicken rice, but it still packs a punch to your taste buds!"
    },
    {
        "name": "Hainanese Chicken Rice",
        "image": "images/HainaneseChickenRice.jpg",
        "caption": "Our Hainanese chicken rice is also a fan favourite. This dish will tickle on your taste buds as you savour each and every taste."
    },
    {
        "name": "Char Siew Rice",
        "image": "images/CharSiew.jpg",
        "caption": "You may not know this, but the Char Siew rice is the owner's favourite dish! It is guaranteed that you will enjoy this!"
    },
    {
        "name": "Char Siew Roasted Pork Rice",
        "image": "images/CharSiewRoasted.jpg",
        "caption": "This dish is a common dish that combines the Char Siew and the Roasted pork together."
    },
    {
        "name": "Roasted Pork Rice",
        "image": "images/RoastedPorkRice.jpg",
        "caption": "The Roasted pork rice may not be as popular as the other dishes, but customers still enjoy it from time to time."
    },
    {
        "name": "Braised Duck Rice",
        "image": "images/BraisedDuckRice.jpg",
        "caption": "The Braised duck rice was originally not in the menu, but due to the customer's demand, it was finally added to the list. Don't miss out!"
    },
    {
        "name": "Roasted Duck Rice",
        "image": "images/RoastedDuckRice.jpg",
        "caption": "The Roasted duck rice was originally the only duck rice that was on the menu. Now, customers like enjoys both the Braised and Roasted duck rice"
    }
]

$(".polaroid").on("click", function (event) {
    const dataIndex = $(this).data("index");
    console.log(dataIndex);

    $("#modal-title").text(data[dataIndex]["name"]);
    $("#modal-caption").text(data[dataIndex]["caption"]);
    $("#modal-image").attr("src", data[dataIndex]["image"])
});

var i = 0;
var titletxt = "Meat Haven";
var titlespeed = 75;

function titleWriter() {
    if (i < titletxt.length) {
        document.getElementById("title").innerHTML += titletxt.charAt(i);
        i++;
        setTimeout(titleWriter, titlespeed);
    }
}

function UpdateDate() {
    var now = new Date();
    var today = now.toLocaleDateString("en-ca");
    document.getElementById("deliverydate").setAttribute("min", today);
    now.setDate(now.getDate() + 7);
    var nextweek = now.toLocaleDateString("en-ca");
    document.getElementById("deliverydate").setAttribute("max", nextweek);
}

dishDict = {
    "Steamed Chicken Rice": 0,
    "Roasted Chicken Rice": 0,
    "Soy Sauce Chicken Rice": 0,
    "Hainanese Chicken Rice": 0,
    "Char Siew Rice": 0,
    "Char Siew Roasted Pork Rice": 0,
    "Roasted Pork Rice": 0,
    "Braised Duck Rice": 0,
    "Roasted Duck Rice": 0,
    "Add Egg": 0,
    "Extra Meat": 0,
    "Add Vegetables": 0
}

dishName = ["Steamed Chicken Rice", "Roasted Chicken Rice", "Soy Sauce Chicken Rice", "Hainanese Chicken Rice", "Char Siew Rice", "Char Siew Roasted Pork Rice", "Roasted Pork Rice", "Braised Duck Rice", "Roasted Duck Rice", "Add Egg", "Extra Meat", "Add Vegetables"];
dishPrice = [4.00, 4.00, 3.50, 4.50, 4.00, 5.50, 4.00, 3.50, 4.50, 0.50, 1.00, 0.50]
dishPayable = [0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00]

$(document).ready(function () {
    $(".dropdown-item").click(function () {
        var name = this.innerHTML;
        if (dishDict[name] == 0) {
            $("#order").append(
                `<div class="row orders" id="${name}-row">
            <div class="col-sm-7">
                <span class="ordered-name" id="ordername">${name}</span>
            </div>

            <div class="col-sm-3 d-flex align-self-center">
                <input class="ordered-quantity" class="order-qt" id="${name}-qt" type="number" min="1" max="10" value="1" onchange="CalculatePrice()"/>
            </div>
            <div class="col-sm-2 col-xs-1 d-flex align-self-center justify-content-around">
                <button id="${name}-btn" class="btn btn-danger order-removebtn" type="button" onclick="RemoveOrder()"><i class="fas fa-times fa-lg"></i></button>
            </div>
        </div>`);
            dishDict[name] = 1;
            var index = dishName.indexOf(name);
            dishPayable[index] = dishPrice[index];
            UpdatePrice();
        }
    });
});

var amountpayable = 0;

function UpdatePrice() {
    sum = 0;
    for (let i = 0; i < dishPayable.length; i++) {
        sum += dishPayable[i];
    }
    var gstcharge = 0.07 * sum;
    amountpayable = gstcharge + sum;
    document.getElementById("totalprice").innerHTML = "$" + sum.toFixed(2);
    document.getElementById("GST").innerHTML = "$" + gstcharge.toFixed(2);
    document.getElementById("totalpayable").innerHTML = "$" + amountpayable.toFixed(2);
}

function CalculatePrice() {
    var name = event.srcElement.id.slice(0, -3);
    var quantity = event.srcElement.value;
    var index = dishName.indexOf(name);
    dishDict[name] = quantity;
    dishPayable[index] = quantity * dishPrice[index];
    UpdatePrice();
}

function RemoveOrder() {
    var name = event.srcElement.id.slice(0, -4);
    var dishrow = name + "-row";
    dishDict[name] = 0;
    dishPayable[dishName.indexOf(name)] = 0.00;
    document.getElementById(dishrow).remove();
    UpdatePrice();
}

/*$(function () {
    $('#chickenform').bind('submit', function (e) {
        e.preventDefault();
        if (amountpayable == 0) {
            swal.fire({
                icon: 'error',
                title: 'Error!',
                text: 'You must at least order something!'
            })
        }
        else {
            for (var i = 0, len = elements.length - 2; i < len; ++i) {
                elements[i].disabled = true;
                var customeraddr = document.getElementById("customeraddr").value;
                var name = document.getElementById("name").value;
                var date = document.getElementById("deliverydate").value;
                var time = document.getElementById("deliverytime").value;
                swal.fire({
                    icon: "success",
                    title: "Success!",
                    text: `Thank you for your patronage ${customeraddr} ${name}! Your order will be delivered on ${date} at ${time}. Have a nice day!`
                });
            }
        }
    });
});*/

function SubmitOrder() {
    if (amountpayable == 0) {
        swal.fire({
            icon: 'error',
            title: 'Error!',
            text: 'You must at least order something!'
        })
    }
    else{
        var form = document.getElementById("chickenform");
        var elements = form.elements;
        for (var i = 0, len = elements.length - 2; i < len; ++i) {
            elements[i].disabled = true;
        }
        var customeraddr = document.getElementById("customeraddr").value;
        var name = document.getElementById("name").value;
        var date = document.getElementById("deliverydate").value;
        var time = document.getElementById("deliverytime").value;
        swal.fire({ icon: "success", title: "Success!", text: `Thank you for your patronage ${customeraddr} ${name}! Your order will be delivered on ${date} at ${time}. Have a nice day!` });
    }
}

function ResetForm() {
    document.getElementById("order").innerHTML = "";
    var form = document.getElementById("chickenform");
    form.reset();
    var elements = form.elements;
    for (var i = 0, len = elements.length - 2; i < len; ++i) {
        elements[i].disabled = false;
    }
    amountpayable = 0;
    dishDict = {
        "Steamed Chicken Rice": 0,
        "Roasted Chicken Rice": 0,
        "Soy Sauce Chicken Rice": 0,
        "Hainanese Chicken Rice": 0,
        "Char Siew Rice": 0,
        "Char Siew Roasted Pork Rice": 0,
        "Roasted Pork Rice": 0,
        "Braised Duck Rice": 0,
        "Roasted Duck Rice": 0,
        "Add Egg": 0,
        "Extra Meat": 0,
        "Add Vegetables": 0
    }
    dishPayable = [0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00]
    document.getElementById("totalprice").innerHTML = "$0.00";
    console.log("dog;");
    document.getElementById("GST").innerHTML = "$0.00";
    document.getElementById("totalpayable").innerHTML = "$0.00";
}