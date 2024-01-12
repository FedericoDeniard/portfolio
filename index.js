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

//  Dark Theme

const themeButton = document.getElementById("theme");

let darkTheme = false;
themeButton.addEventListener("click", () => {
  darkTheme = !darkTheme;
  applyTheme();
});

// darkTheme.addEventListener("change", () => {});

//  Objets to change
const body = document.getElementById("body");
const evenCards = document.getElementsByClassName("even");
const oddsCards = document.getElementsByClassName("odd");
const h1 = document.getElementsByTagName("h1");
const h2 = document.getElementsByTagName("h2");
const h3 = document.getElementsByTagName("h3");
const p = document.getElementsByTagName("p");
const labels = document.getElementsByTagName("label");
const myselfPic = document.getElementById("myself-pic");
const footer = document.getElementsByTagName("footer")[0];

function applyTheme() {
  if (darkTheme) {
    body.classList.add("dark-body");
    for (const evenCard of evenCards) {
      evenCard.classList.add("dark-even");
    }
    for (const oddCard of oddsCards) {
      oddCard.classList.add("dark-odd");
    }
    for (const card of cards) {
      card.classList.add("dark-cards");
    }
    for (const title of h1) {
      title.classList.add("dark-h1");
    }
    for (const title of h2) {
      title.classList.add("dark-h2");
    }
    for (const title of h3) {
      title.classList.add("dark-h3");
    }
    for (const text of p) {
      text.classList.add("dark-p");
    }
    for (const label of labels) {
      label.classList.add("dark-label");
    }
    myselfPic.classList.add("dark-image");
    for (const button of contactButtons) {
      button.classList.add("dark-button");
    }
    footer.classList.add("dark-footer");
  } else {
    body.classList.remove("dark-body");
    for (const evenCard of evenCards) {
      evenCard.classList.remove("dark-even");
    }
    for (const oddCard of oddsCards) {
      oddCard.classList.remove("dark-odd");
    }
    for (const card of cards) {
      card.classList.remove("dark-cards");
    }
    for (const title of h1) {
      title.classList.remove("dark-h1");
    }
    for (const title of h2) {
      title.classList.remove("dark-h2");
    }
    for (const title of h3) {
      title.classList.remove("dark-h3");
    }
    for (const text of p) {
      text.classList.remove("dark-p");
    }
    for (const label of labels) {
      label.classList.remove("dark-label");
    }
    myselfPic.classList.remove("dark-image");
    for (const button of contactButtons) {
      button.classList.remove("dark-button");
    }
    footer.classList.remove("dark-footer");
  }
}
