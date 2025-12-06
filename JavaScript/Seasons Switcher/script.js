let seasonSmallImageElement = document.getElementById("seasonSmallImage");
let seasonMediumImageElement = document.getElementById("seasonMediumImage");
let springSmallImage =
  "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/seasons-switcher-spring-xs-img.png";
let springMediumImage =
  "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/seasons-switcher-spring-md-img.png";
let summerSmallImage =
  "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/seasons-switcher-summer-xs-img.png";
let summerMediumImage =
  "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/seasons-switcher-summer-md-img.png";
let autumnSmallImage =
  "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/seasons-switcher-autumn-xs-img.png";
let autumnMediumImage =
  "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/seasons-switcher-autumn-md-img.png";
let winterSmallImage =
  "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/seasons-switcher-winter-xs-img.png";
let winterMeduimImage =
  "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/seasons-switcher-winter-md-img.png";

function changeColorToSpring() {
  seasonSmallImageElement.src = springSmallImage;
  seasonMediumImageElement.src = springMediumImage;
}

function changeColorToSummer() {
  seasonSmallImageElement.src = summerSmallImage;
  seasonMediumImageElement.src = summerMediumImage;
}

function changeColorToAutumn() {
  seasonSmallImageElement.src = autumnSmallImage;
  seasonMediumImageElement.src = autumnMediumImage;
}

function changeColorToWinter() {
  seasonSmallImageElement.src = winterSmallImage;
  seasonMediumImageElement.src = winterMeduimImage;
}
