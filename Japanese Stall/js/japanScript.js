var i = 0;
var titleTxt = 'Japanese Cuisine Stall';
var titleSpeed = 50;

var i2 = 0;
var subTitleTxt = 'Artisans of our craft. A traditional, authentic experience.';
var subTitleSpeed = 40;

const modalInfo = [
    {
        "dishTitle": "Katsu Curry カツカレー",
        "dishDescr": "It is said to have been originated by Shigeru CHIBA, who played for a team of the Nippon Professional Baseball called Yomiuri Giants and was a regular customer at 'Grill Swiss', a western-style restaurant in Ginza 3-chome in Tokyo; he used to order tonkatsu and curry and rice separately, however one day asked: 'Bring curry and rice with tonkatsu placed on top.' A widely-accepted theory has it that the owner of the restaurant who observed the scene took a hint from the order and came up with a menu called 'Chiba Katsu,' which became to spread throughout Japan.",
        "dishImgPath": "images/katsucurrehmodal.png"
    },
    {
        "dishTitle": "Donburi 丼",
        "dishDescr": "Donburi is match in modern with the mixed style of main dish and side one so that it's easy to prepare and eat quickly. It's also served with miso soup occationary to adjust the taste. In history, it started to appear in the Edo era (1603–1867) in Japan. The first donburi dish was unagi (eel) don. In unagi don, a broiled eel was put on a cooked bowl of rice.",
        "dishImgPath": "images/gyuudon.jpg"
    },
    {
        "dishTitle": "Bento Set 弁当",
        "dishDescr": "The word bento is originated from the Japanese language which means lunch box. During the fifth century, Japanese man used to carry compact meals so called Bento when going fishing and hunting. Through that period Bento boxes contained white rice, millets and potatoes. Today, bento boxes are found in different shapes, forms and materials. They are available in many different location across the globe and became very popular traditional Japanese meal.",
        "dishImgPath": "images/Bento modal.jpg"
    },
    {
        "dishTitle": "Chawanmushi 茶碗蒸し",
        "dishDescr": "Originating from Nagasaki, this savory egg custard may be Japan’s best-kept secret. Chawanmushi started popping up over 300 years ago during the Edo period in shippoku cuisine, an ancient version of Asian fusion with Japanese, Chinese, and Western influences. Perfecting this appetizer requires finesse, as the base alone is composed of multiple ingredients: beaten eggs to set the custard, kelp-derived dashi, mirin, and soy sauce.",
        "dishImgPath": "images/chawan.jpg"
    }
];

var dishOrder = {
    "Chicken Katsu Curry": 0,
    "Beef Katsu Curry": 0,
    "Pork Katsu Curry": 0,
    "Chicken Donburi": 0,
    "Beef Donburi": 0,
    "Pork Donburi": 0,
    "Chicken Bento Set": 0,
    "Beef Bento Set": 0,
    "Pork Bento Set": 0,
    "Chawanmushi": 0,
    "Dango Stick": 0,
    "Red Bean Taiyaki": 0,
    "Assorted Mochi 4pc": 0
    };
const dishNames = ["Chicken Katsu Curry","Beef Katsu Curry","Pork Katsu Curry","Chicken Donburi","Beef Donburi","Pork Donburi","Chicken Bento Set","Beef Bento Set","Pork Bento Set","Chawanmushi","Dango Stick","Red Bean Taiyaki","Assorted Mochi 4pc"];
const dishPrice = [6.00, 8.00, 7.00, 7.50, 9.00, 8.50, 9.50, 10.00, 9.50, 5.00, 3.00, 2.50, 6.00];
var dishPayable = [0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00];


function titleWriter() {
    if (i < titleTxt.length) {
        document.getElementById("title").innerHTML += titleTxt.charAt(i);
        i++;
        setTimeout(titleWriter, titleSpeed);
    }
}

function subTitleWriter() {
    if (i2 < subTitleTxt.length) {
        document.getElementById("subTitle").innerHTML += subTitleTxt.charAt(i2);
        i2++;
        setTimeout(subTitleWriter, subTitleSpeed);
    }
}

function delaySubTitle() {
    setTimeout(subTitleWriter, 1400);
}

function modalInfoChange() {
    var index = event.srcElement.dataset.indexNumber;
    document.getElementById("dish-title").innerHTML = modalInfo[index]["dishTitle"];
    document.getElementById("dish-descr").innerHTML = modalInfo[index]["dishDescr"];
    document.getElementById("modal-dish-img").setAttribute("src", modalInfo[index]["dishImgPath"]);
}
$(document).ready(function () {
    $(".dropdown-item").click(function () {
        var dishName = this.innerHTML;
        if (dishOrder[dishName] == 0 && formsubmit == false) {
            $("#foodItems").append(
                `<hr id="${dishName}-hr"/>
        <div class="row" id="${dishName}-row">
            <div class="col-sm-7 ordered-dish">
                <span class="ordered-name">${dishName}</span>
            </div>

            <div class="col-sm-3 d-flex align-self-center">
                <input class="ordered-quantity" id="${dishName}-qt" type="number" min="1" max="10" value="1" onchange="CalculatePrice()"/>
            </div>
            <div class="col-sm-2 col-xs-1 d-flex align-self-center justify-content-around">
                <button id="${dishName}-btn" class="btn btn-danger order-removebtn" type="button" onclick="RemoveOrder()"><i class="fas fa-times fa-lg"></i></button>
            </div>
        </div>`);
            dishOrder[dishName] = 1;
            var dishindex = dishNames.indexOf(dishName);
            dishPayable[dishindex] = dishPrice[dishindex];
            UpdatePrice();
        }
    });
});

var payable = 0;
var formsubmit = false;

function UpdatePrice() {
    var sum = 0;
    for (let i = 0; i < dishPayable.length; i++) {
        sum += dishPayable[i];
    }
    var addcharges = Math.round(sum * 0.17 * 100) / 100;
    payable = sum + addcharges;
    document.getElementById('totalPrice').innerHTML = "$" + sum.toFixed(2);
    document.getElementById('addCharges').innerHTML = "$" + addcharges.toFixed(2);
    document.getElementById('totalPayable').innerHTML = "$" + payable.toFixed(2);
};

function CalculatePrice() {
    var dishName = event.srcElement.id.slice(0, -3);
    var dishqt = event.srcElement.value;
    var dishindex = dishNames.indexOf(dishName);
    dishOrder[dishName] = dishqt;
    dishPayable[dishindex] = dishqt * dishPrice[dishindex];

    UpdatePrice();
};

function RemoveOrder() {
    if (formsubmit == false) {
        var dishName = event.srcElement.id.slice(0, -4);
        var dishrow = dishName + "-row";
        var dishhr = dishName + "-hr";
        dishOrder[dishName] = 0;
        dishPayable[dishNames.indexOf(dishName)] = 0.00;
        document.getElementById(dishrow).remove();
        document.getElementById(dishhr).remove();

        UpdatePrice();
    }
}

function ResetOrders() {
    document.getElementById("foodItems").innerHTML = "";
    payable = 0;
    dishPayable = [0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00];
    dishOrder = {
        "Chicken Katsu Curry": 0,
        "Beef Katsu Curry": 0,
        "Pork Katsu Curry": 0,
        "Chicken Donburi": 0,
        "Beef Donburi": 0,
        "Pork Donburi": 0,
        "Chicken Bento Set": 0,
        "Beef Bento Set": 0,
        "Pork Bento Set": 0,
        "Chawanmushi": 0,
        "Dango Stick": 0,
        "Red Bean Taiyaki": 0,
        "Assorted Mochi 4pc": 0
    };
    document.getElementById('totalPrice').innerHTML = "$0.00";
    document.getElementById('addCharges').innerHTML = "$0.00";
    document.getElementById('totalPayable').innerHTML = "$0.00";
    formsubmit = false;
    //enable everything
    $('#addbtns').find('button').attr('disabled', false);
    document.getElementById("fullname").disabled = false;
    document.getElementById("email").disabled = false;
    document.getElementById("address").disabled = false;
    document.getElementById("contact").disabled = false;
    document.getElementById("inputDate").disabled = false;
    document.getElementById("inputTime").disabled = false;
    document.getElementById("submitbtn").disabled = false;
}

function ValidateForm() {
    if (payable == 0) {
        alert("No dishes are ordered! Please order atleast 1 dish.");
    }
    else {
        var name = document.getElementById("fullname").value;
        var contact = document.getElementById("contact").value;
        var date = document.getElementById("inputDate").value;
        var time = document.getElementById("inputTime").value;
        alert(`Thank you ${name} for the order. The total payable price for the dishes ordered is $${payable.toFixed(2)}. Please wait patiently for the delivery, we will contact you at ${contact} nearing ${time} on ${date}.`);
        formsubmit = true;
        //disable everything
        document.getElementById("fullname").disabled = true;
        document.getElementById("email").disabled = true;
        document.getElementById("address").disabled = true;
        document.getElementById("contact").disabled = true;
        document.getElementById("inputDate").disabled = true;
        document.getElementById("inputTime").disabled = true;
        document.getElementById("submitbtn").disabled = true;
        $('#addbtns').find('button').attr('disabled', 'true');
        $('#foodItems').find('input, button').attr('disabled', 'true');
    }
    return false;
}

function RestrictDate() {
    var date = document.getElementById("inputDate");

    var today = new Date();
    var oneweek = new Date();
    oneweek.setDate(oneweek.getDate() + 7);

    date.min = today.toLocaleDateString('en-ca');
    date.max = oneweek.toLocaleDateString('en-ca');
}