const HEADER_TMP = "<li class=\"list-group-item list-group-item-dark\">{TEXT}</li>"
const TMP = "<div id=\"{NAME}\" onclick=\"add_order_from_element('{NAME}')\" class=\"list-group-item card\"><h5 class=\"card-title\">{NAME}</h5><h6 class=\"card-subtitle\">${PRICE}</h6></div>"

const CART_TMP = "<div class=\"list-group-item\">\
<div class=\"row\"><div class=\"col-sm-8\">\
    <h5 class=\"card-title\">{NAME}</h5>\
    <h6 class=\"card-subtitle\">${PRICE}</h6>\
    <p class=\"card-body\">{DESCRIPTION}</p>\
</div>\
<div class=\"col-sm-4 row\">\
    <input type=\"button\" class=\"btn text-center\" value=\"+\"\
    onclick=\"add_order('{NAME}')\">\
    <input class=\"text-center form-control\" type=number min=1 value={VALUE}\
    onchange=\"update_order_number('{NAME}', this.value)\">\
    <input type=\"button\" class=\"btn text-center\" value=\"-\"\
    onclick=\"remove_order('{NAME}')\">\
</div>\
</div>"

var orders = {};
var total_price = 0.0;

function load_order_dishes() {
    var listgroup = document.getElementById("orderListGroup");
    listgroup.innerHTML = "";
    for (var category in dishdata)
    {
        listgroup.innerHTML += HEADER_TMP.replace("{TEXT}", category[0] + category.toLowerCase().substring(1));
        for (var dish of dishdata[category])
        {
            listgroup.innerHTML += TMP
                .replace("{NAME}", dish.Name)
                .replace("{NAME}", dish.Name)
                .replace("{NAME}", dish.Name)
                .replace("{PRICE}", dish.Price.toFixed(2));
        }
    }
}

function add_order(dishname) {
    var dishobj = get_dish_object(dishname);
    if (dishname in orders) {
        orders[dishname][1] += 1;
    }
    else {
        orders[dishname] = [dishobj, 1];
    }

    update_order(dishname);
}

function add_order_from_element(dishname) {
    var dishobj = get_dish_object(dishname);
    if (dishname in orders) {
        // update_order_number(dishname, 0);
    }
    else {
        orders[dishname] = [dishobj, 1];
    }

    update_order(dishname);
}

function remove_order(dishname) {
    var dishobj = get_dish_object(dishname);
    if (dishname in orders) {
        orders[dishname][1] -= 1;

        if (orders[dishname][1] <= 0) {
            delete orders[dishname];
        }
    }

    update_order(dishname);
}

function update_order(dishname) {
    var dishobj = get_dish_object(dishname);
    var dishelement = document.getElementById(dishname);

    if (dishname in orders && orders[dishname][1] <= 0) {
        dishelement.classList.remove("bg-secondary");
        remove_order(dishname)
    }

    else if (dishname in orders) {
        dishelement.classList.add("bg-secondary");
    }
    else {
        dishelement.classList.remove("bg-secondary");
    }

    update_cart();
}

function update_order_number(dishname, n) {
    orders[dishname][1] = parseInt(n);
    update_order(dishname);
}

function update_cart() {
    var listgroup = document.getElementById("cartListGroup");
    listgroup.innerHTML = "";

    var nQuantity = 0;
    total_price = 0.0;

    for (var order in orders) {
        var dishname = order;
        var dishprice = orders[order][0].Price;
        var dishdesc = orders[order][0].Description;

        var quantity = orders[order][1];

        nQuantity += quantity;

        total_price += quantity * dishprice;

        listgroup.innerHTML += CART_TMP
            .replace("{NAME}", dishname).replace("{NAME}", dishname).replace("{NAME}", dishname).replace("{NAME}", dishname)
            .replace("{PRICE}", dishprice.toFixed(2))
            .replace("{DESCRIPTION}", dishdesc)
            .replace("{VALUE}", quantity)
    }

    if (nQuantity == 0)
    {
        listgroup.innerHTML = "<h3 class=\"text-center\">Start adding orders to see them here!</h3>"
    }

    document.getElementById("totalAmount").innerText = "$" + total_price.toFixed(2)
    document.getElementById("GSTAmount").innerText = "$" + (total_price * 0.17).toFixed(2)
    document.getElementById("payableAmount").innerText = "$" + (total_price * 1.17).toFixed(2)
}

function get_dish_object(dishname) {
    for (var category in dishdata)
    {
        for (var dish of dishdata[category])
        {
            if (dish.Name == dishname) {
                return dish;
            }
        }
    }
}

function reset_form() {
    orders = {};
    update_cart();

    for (d in document.getElementById("orderListGroup").children)
    {
        document.getElementById("orderListGroup").children[d].classList.remove("bg-secondary");
    }
}

function submit_form() {
    var order_object = {
        "custName": document.getElementById("custName").value,
        "custSalutation": document.getElementById("custSalutation").value,
        "custNo": document.getElementById("custNo").value,
        "custEmail": document.getElementById("custEmail").value,
        "custAddr": document.getElementById("custAddr").value,
        "custDate": document.getElementById("custDate").value,
        "custTime": document.getElementById("custTime").value,
        "custOrders": orders,
        "custTotal": total_price,
        "custGST": (total_price * 0.17),
        "custPayable": (total_price * 1.17)
    }

    localStorage.setItem('order-object', encodeURIComponent(JSON.stringify(order_object)));
    window.location = "confirmation.html";
}

function set_delivery_date() {
    var dateelement = document.getElementById("custDate");

    var today = new Date();
    var oneweek = new Date();
    oneweek.setDate(oneweek.getDate() + 7);
    
    var onemonth = new Date();
    onemonth.setMonth(onemonth.getMonth() + 1);

    dateelement.min = oneweek.toLocaleDateString('en-ca');
    dateelement.max = onemonth.toLocaleDateString('en-ca');
}