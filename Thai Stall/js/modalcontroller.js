const tmp = "\
<div class=\"card col-sm-12 p-2\">\
    <img class=\"img-fluid card-img-top\" src=\"{IMG}\">\
    <div class=\"card-header bg-transparent\">\
        <h5 class=\"card-title\">{NAME}</h5>\
        <h6 class=\"card-subtitle\">${PRICE}</h6>\
    </div >\
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
            .replace("{DESCRIPTION}", dish.Description)
            .replace("{IMG}", dish.Image);

        modal.innerHTML += content;
    }
}