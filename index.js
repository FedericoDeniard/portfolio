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

// Button
const contactButtons = document.getElementsByClassName("button");
for (const button of contactButtons) {
  button.addEventListener("contextmenu", function (e) {
    e.preventDefault();
  });
}

// Cards arrows

/* const cardContainer = document.querySelector(".cards-container");
const leftArrow = document.getElementById("leftArrow");
const rightArrow = document.getElementById("rightArrow");

let cardIndex = 0;

leftArrow.addEventListener("click", () => {
  if (cardIndex > 0) {
    cardIndex--;
    scrollToCurentCard();
  }
});

rightArrow.addEventListener("click", () => {
  if (cardIndex < cards.length - 1) {
    cardIndex++;
    scrollToCurentCard();
  }
});

function scrollToCurentCard() {
  const cardWidth = cards[cardIndex].offsetWidth;
  const newPosition = -cardIndex * cardWidth;
  cardContainer.style.transform = `translateX(${newPosition}px)`;
} */

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
