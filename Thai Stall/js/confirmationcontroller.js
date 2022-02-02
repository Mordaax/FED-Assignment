const TMP = "<div id=\"{NAME}\" class=\"list-group-item card\">\
<h5 class=\"card-header bg-transparent\">{NAME}</h5>\
<div class=\"row\">\
    <div class=\"card-body col-sm-6\">\
        <h6>Item Price: ${PRICE}</h6>\
        <h6>Quantity: {QUANTITY}</h6>\
    </div>\
    <div class=\"card-body col-sm-6\">\
        <h5 style=\"text-align: right;\">Total: ${TOTAL}</h5>\
    </div>\
</div>\
</div>"
function load_confirmation() {
    var data = JSON.parse(decodeURIComponent(document.cookie));
    console.log(data);

    if (data.custSalutation == "Prefer not to say")
    {
        data.custSalutation = "";
    }

    document.getElementById("custName").innerText = data.custSalutation + " " + data.custName;
    delete data.custSalutation;
    delete data.custName;

    for (var key in data) {
        if (key == "custOrders")
        {
            for (var dishname in data[key])
            {
                var dish = data[key][dishname];
                dishprice = dish[0].Price;
                dishquantity = dish[1];

                document.getElementById("orderListGroup").innerHTML += TMP
                    .replace("{NAME}", dishname)
                    .replace("{NAME}", dishname)
                    .replace("{PRICE}", dishprice.toFixed(2))
                    .replace("{QUANTITY}", dishquantity)
                    .replace("{TOTAL}", (dishprice * dishquantity).toFixed(2));

            }
            continue;
        }

        if (key == "custTotal" || key == "custGST" || key == "custPayable")
        {
            document.getElementById(key).innerText = "$" + data[key].toFixed(2);
            continue;
        }
        document.getElementById(key).innerText = data[key];
    }
}