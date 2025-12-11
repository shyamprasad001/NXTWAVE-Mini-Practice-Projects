let profileDetails = {
  imgSrc:
    "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/user-profile-img.png",
  name: "RAHUL ATTULURI",
  age: 25,
};

let profileContainerEl = document.getElementById("profileContainer");
profileContainerEl.classList.add(
  "d-flex",
  "flex-column",
  "justify-content-center"
);
let imageContainerEl = document.getElementById("imgContainer");

let imageEl = document.createElement("img");
imageEl.setAttribute("src", profileDetails.imgSrc);
imageContainerEl.classList.add("text-center");
imageContainerEl.appendChild(imageEl);

let nameEl = document.createElement("h1");
nameEl.classList.add("profile-details");
nameEl.textContent = profileDetails.name;
profileContainerEl.appendChild(nameEl);

let ageEl = document.createElement("p");
ageEl.classList.add("profile-details");
ageEl.textContent = "Age:" + profileDetails.age;
profileContainerEl.appendChild(ageEl);
