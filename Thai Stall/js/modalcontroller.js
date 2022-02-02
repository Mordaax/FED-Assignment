const tmp = "\
<div class=\"card col-sm-12\">\
    <div class=\"card-header bg-transparent\">{NAME}    (${PRICE})</div>\
    <div class=\"card-body\">\
        <p class=\"card-text\">{DESCRIPTION}</p>\
    </div>\
</div>\
<wbr>"
function create_modals(dishcat, id) {
    var dishesToLoad = dishdata[dishcat];
    var modal = document.getElementById(id);
    modal.innerHTML = "";

    for (var dish of dishesToLoad)
    {
        var content = tmp
            .replace("{NAME}", dish.Name)
            .replace("{PRICE}", dish.Price.toFixed(2))
            .replace("{DESCRIPTION}", dish.Description);

        modal.innerHTML += content;
    }
}