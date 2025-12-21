let movieReviewsContainerElement = document.getElementById(
  "movieReviewsContainer"
);
let titleInputElement = document.getElementById("titleInput");
let reviewTextareaELement = document.getElementById("reviewTextarea");
let addBtnELement = document.getElementById("addBtn");

let movieReviewElement = document.createElement("div");
movieReviewElement.id = "reviewsContainer";
movieReviewElement.classList.add("movie-review");
movieReviewsContainerElement.appendChild(movieReviewElement);

function createMovieReview(storedMovieTitle, storedMovieReview) {
  let movieTitleElement = document.createElement("h1");
  let yourMovieReview = document.createElement("p");

  movieTitleElement.innerText = "Movie Title: " + storedMovieTitle;
  movieTitleElement.classList.add("movie-tile-review");
  movieReviewElement.appendChild(movieTitleElement);

  yourMovieReview.innerText = "Review: " + storedMovieReview;
  movieReviewElement.appendChild(yourMovieReview);
}

function addMoviereview() {
  let movieTitle = titleInputElement.value;
  let movieReview = reviewTextareaELement.value;

  if (movieTitle === "") {
    alert("Please enter a movie title");
    return;
  }

  localStorage.setItem("movieTitle", movieTitle);
  localStorage.setItem("movieReview", movieReview);

  let storedMovieTitle = localStorage.getItem("movieTitle");
  let storedMovieReview = localStorage.getItem("movieReview");

  createMovieReview(storedMovieTitle, storedMovieReview);
  titleInputElement.value = "";
  reviewTextareaELement.value = "";
}

addBtnELement.onclick = function () {
  addMoviereview();
};
