let bgContainer = document.getElementById("bgContainer");
let heading = document.getElementById("heading");
let themeUserInput = document.getElementById("themeUserInput");

let theme = "Light";

function changeThemeToDark() {
  heading.classList.remove("heading");
  heading.classList.add("heading-dark-theme");
  bgContainer.classList.remove("bg-container");
  bgContainer.classList.add("dark-bg-container");
  theme = "Dark";
}

function changeThemeToLight() {
  console.log(theme);
  heading.classList.add("heading");
  heading.classList.remove("heading-dark-theme");
  bgContainer.classList.add("bg-container");
  bgContainer.classList.remove("dark-bg-container");
  theme = "Light";
}

function alertMsg() {
  alert("Enter Valid theme");
  return;
}

themeUserInput.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    if (themeUserInput.value === "Dark") {
      if (theme === "Dark") {
        alertMsg();
      }
      changeThemeToDark();
    } else if (themeUserInput.value === "Light") {
      if (theme === "Light") {
        alertMsg();
      }
      changeThemeToLight();
    } else {
      alertMsg();
    }
  }
});
