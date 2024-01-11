// Cards
const cards = document.getElementsByClassName("card");
for (let i = 0; i < cards.length; i++) {
  cards[i].addEventListener("contextmenu", function (e) {
    e.preventDefault();
  });
  cards[i].addEventListener("touchstart", (event) => {
    cards[i].classList.add("touch");
  });

  cards[i].addEventListener("touchend", () => {
    cards[i].classList.remove("touch");
  });
}

// Footer
const linkedIn = document.getElementById("linkedin");
const gitHub = document.getElementById("github");
const home = document.getElementById("home");
const theme = document.getElementById("theme");

linkedIn.addEventListener("click", () => {
  window.open("https://www.linkedin.com/in/federicodeniard/", "blank");
});

gitHub.addEventListener("click", () => {
  window.open("https://github.com/FedericoDeniard", "_blank");
});

home.addEventListener("click", () => {
  window.location.href = "#intro";
});
