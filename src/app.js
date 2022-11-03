/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let symbols = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
  ];

  let type = ["♦", "♥", "♠", "♣"];

  let figure = Math.floor(Math.random() * type.length);
  let value = Math.floor(Math.random() * symbols.length);

  let valueSymbols = document.querySelector(".symbols");
  valueSymbols.innerHTML = symbols[value];

  let figureType = document.querySelectorAll(".type");
  figureType[0].innerHTML = type[figure];
  figureType[1].innerHTML = type[figure];

  if (type[figure] == "♦") {
    figureType[0].style.color = "red";
    figureType[1].style.color = "red";
  } else if (type[figure] == "♥") {
    figureType[0].style.color = "red";
    figureType[1].style.color = "red";
  }
};
