// JavaScript source code

var i = 0;
var titleTxt = 'Japanese Cuisine Stall';
var titleSpeed = 50;

var i2 = 0;
var subTitleTxt = 'Artisans of our craft. A traditional, authentic experience.';
var subTitleSpeed = 50;

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
    setTimeout(subTitleWriter, 1200);
}