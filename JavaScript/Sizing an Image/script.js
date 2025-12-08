let imageElement = document.getElementById("image");
let imageWidthElement = document.getElementById("imageWidth");
let warningMessageElement = document.getElementById("warningMessage");
let imageMaxWidth = 300;
let imageMinwidth = 100;
let defaultImageWidth = 200;
imageElement.style.width = defaultImageWidth + "px";
imageWidthElement.innerText = defaultImageWidth + "px";

function decrementImageSize() {
  if (defaultImageWidth <= 100) {
    warningMessageElement.textContent =
      "Can't Visible.Increase the Size of the Image.";
    warningMessageElement.style.color = "red";
  } else {
    defaultImageWidth -= 5;
    imageElement.style.width = defaultImageWidth + "px";
    imageWidthElement.textContent = defaultImageWidth + "px";
    warningMessageElement.textContent = "";
  }
}

function incrementImageSize() {
  if (defaultImageWidth >= 300) {
    warningMessageElement.textContent =
      "Too Big.Decrease the Size of the Image.";
    warningMessageElement.style.color = "red";
  } else {
    defaultImageWidth += 5;
    imageElement.style.width = defaultImageWidth + "px";
    imageWidthElement.textContent = defaultImageWidth + "px";
    warningMessageElement.textContent = "";
  }
}
