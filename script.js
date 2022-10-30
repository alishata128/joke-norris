const jokeDisplay = document.querySelector(".joke");
const btn = document.querySelector(".btn");
const mainContent = document.querySelector(".main-content");

var isRunning = false;

async function getJoke() {
  const response = await fetch("https://api.chucknorris.io/jokes/random");
  const data = await response.json();
  jokeDisplay.style.display = "flex";
  jokeDisplay.textContent = data.value;
  isRunning = true;
  btn.classList.add("pos-f");
  btn.classList.add("joked");
  btn.textContent = "again";
}

btn.addEventListener("click", function () {
  getJoke();
});

document.addEventListener("click", function () {
  if (btn.addEventListener("click", getJoke)) {
    btn.removeEventListener("click", getJoke);
  } else {
    btn.addEventListener("click", getJoke);
  }
});

document.addEventListener("click", function (e) {
  if (e.target.matches(".btn") || e.target.matches(".joke")) {
    console.log("this is btn");
  } else {
    console.log("not btn");
    jokeDisplay.style.display = "none";
    isRunning = false;
    btn.classList.remove("pos-f");
    btn.classList.remove("joked");
    btn.textContent = "run JokeNorris";
  }
});
