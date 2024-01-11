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
