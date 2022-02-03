// JavaScript source code
data = [
    {
        "name": "Steamed Chicken Rice",
        "image": "images/SteamedChickenRice.jpg",
        "caption": "nigga"
    },
    {
        "name": "Roasted Chicken Rice",
        "image": "images/RoastedChickenRice.jpg",
        "caption": "nigga"
    },
    {
        "name": "Soy Sauce Chicken Rice",
        "image": "images/SoySauceChickenRice.jpg",
        "caption": "nigga"
    },
    {
        "name": "Hainanese Chicken Rice",
        "image": "images/HainaneseChickenRice.jpg",
        "caption": "nigga"
    },
    {
        "name": "Char Siew Rice",
        "image": "images/CharSiew.jpg",
        "caption": "nigga"
    },
    {
        "name": "Char Siew Roasted Pork Rice",
        "image": "images/CharSiewRoasted.jpg",
        "caption": "nigga"
    },
    {
        "name": "Roasted Pork Rice",
        "image": "images/RoastedPorkRice.jpg",
        "caption": "nigga"
    },
    {
        "name": "Braised Duck Rice",
        "image": "images/BraisedDuckRice.jpg",
        "caption": "nigga"
    },
    {
        "name": "Roasted Duck Rice",
        "image": "images/RoastedDuckRice.jpg",
        "caption": "nigga"
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