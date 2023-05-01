"use strict";

// selectors for html
const foodButton = document.querySelector(".food");
const entertainmentButton = document.querySelector(".entertainment");
const clothingButton = document.querySelector(".clothing");
const billsButton = document.querySelector(".bills");
const buttonBox = document.querySelector(".button-container");
const popUpBox = document.querySelector(".form-box-1");
const graph = document.querySelector(".graph-container");
const expensesForm = document.querySelector(".form-box-2");
const startingInfoForm = document.querySelector(".start-pop-up");
const popUp = document.querySelector(".pop-up");
const resetButton = document.querySelector(".reset");
const main = document.querySelector("main");
let dynamicMessage = document.querySelector(".dynamic-message");

//selectors for pop up on graph
const graphPopUp = document.querySelector(".graph-pop-up");
const graphFood = document.querySelector(".graph-food");
const graphEntertainment = document.querySelector(".graph-entertainment");
const graphClothing = document.querySelector(".graph-clothing");
const graphBills = document.querySelector(".graph-bills");
const graphInputItem = document.querySelector("#item");
const graphInputPrice = document.querySelector("#spentValue");

// selectors for graph bars
const foodBar = document.querySelector(".food-bar");
const entertainmentBar = document.querySelector(".entertain-bar");
const clothingBar = document.querySelector(".clothing-bar");
const billsBar = document.querySelector(".bills-bar");
let totalBar = document.querySelector(".total-bar");
const allTheBars = document.querySelector(".bars");

//selectors for math
const moneySpent = document.querySelector("#spentValue");
const spentValue = document.querySelector(".spent");
const headerTotal = document.querySelector(".total");
const name = document.querySelector("#name");
let initialMoney = document.querySelector("#budget");
let totalSpent = 0;
let runningTotal = 0;
let initialMoneyValue = null;

let entertainment = 0;
let food = 0;
let clothing = 0;
let bills = 0;

let category = "";

const condescendingMessagefunction = () => {
  let totalSpentPercent = (totalSpent / +initialMoney.value) * 100;
  if (totalSpentPercent > 100) {
    dynamicMessage.innerText = `Hey ${name.value}, Give me money. Money me. Money now. Me a money needing a lot now`;
  } else if (totalSpentPercent === 100) {
    dynamicMessage.innerText = `Hey ${name.value}, STOP SPENDING! You're all out of money...`;
  } else if (totalSpentPercent >= 80) {
    dynamicMessage.innerText = `Woah there ${name.value}! You're not too good at this budgeting thing...`;
  } else if (totalSpentPercent >= 60) {
    dynamicMessage.innerText = `Actually, maybe you should ease up a bit, you only have about 40% of your budget left`;
  } else if (totalSpentPercent >= 40) {
    dynamicMessage.innerText = `Woaaahhh you're halfway there! WOOOAAAH Spend without a care!`;
  } else if (totalSpentPercent >= 20) {
    dynamicMessage.innerText = `Still looking good! So responsible! Go get yourself some concert tickets or something.`;
  } else if (totalSpentPercent > 0) {
    dynamicMessage.innerText = `Nice job ${name.value}, you still have a ton of money to go treat yourself`;
  } else if (totalSpentPercent < 0) {
    dynamicMessage.innerText = `I'm proud of you ${name.value}, you somehow have more money than you started with!`;
  } else {
    dynamicMessage.innerText = ` ${name.value}, welcome to the new month! Full money = full send!`;
  }
};

popUpBox.addEventListener("submit", (e) => {
  e.preventDefault();

  // initial pop up when you first get on website

  initialMoneyValue = initialMoney.value;
  const nameValue = name.value;
  startingInfoForm.style.display = "none";
  main.style.display = "flex";
  headerTotal.textContent = `Total: $` + initialMoneyValue;

  condescendingMessagefunction();
});

buttonBox.addEventListener("click", (e) => {
  //pop up for expenses form
  graphPopUp.style.display = "none";
  main.style.display = "none";
  resetButton.style.display = "none";
  popUp.style.display = "flex";

  // keeps track of which button we pressed: entertainment, food, bills, or clothing

  if (e.target.classList.contains("food")) {
    category = "food";
    // console.log(getPercentage(food));
  } else if (e.target.classList.contains("entertainment")) {
    category = "entertainment";
  } else if (e.target.classList.contains("clothing")) {
    category = "clothing";
  } else if (e.target.classList.contains("bills")) {
    category = "bills";
  }

  condescendingMessagefunction();
});

expensesForm.addEventListener("submit", (e) => {
  e.preventDefault();

  // display's
  if (e.target.classList.contains("graph-X-button")) {
    popUp.style.display = "none";
  }
  main.style.display = "flex";
  popUpBox.style.display = "none";
  popUp.style.display = "none";
  resetButton.style.display = "block";

  // functionality for header totals
  runningTotal = initialMoneyValue -= +moneySpent.value;
  totalSpent += +moneySpent.value;
  spentValue.textContent = `Spent: $${totalSpent}`;
  headerTotal.textContent = `Total: $${runningTotal}`;

  // graph functionality for spent bar

  if (category === "food") {
    // graph functionality for spent bar
    food += +moneySpent.value;
    let foodPercent = (food / +initialMoney.value) * 100;
    foodBar.style.height = `${foodPercent * 3}px`;
    foodBar.style.backgroundColor = "rgb(245, 245, 112)";
    foodBar.style.border = "rgb(245, 245, 112)";

    //functionality for itemized list
    const newLi = document.createElement("li");
    newLi.setAttribute("class", "food-li");
    newLi.innerText = `Item: ${graphInputItem.value} | Price: $${graphInputPrice.value}`;
    graphFood.append(newLi);
  } else if (category === "entertainment") {
    // graph functionality for spent bar
    entertainment += +moneySpent.value;
    let entertainPercent = (entertainment / +initialMoney.value) * 100;
    entertainmentBar.style.height = `${entertainPercent * 3}px`;
    entertainmentBar.style.backgroundColor = "lightgreen";
    entertainmentBar.style.border = "lightgreen";

    //functionality for itemized list
    const newLi = document.createElement("li");
    newLi.setAttribute("class", "entertainment-li");
    newLi.innerText = `Item: ${graphInputItem.value} | Price: $${graphInputPrice.value}`;
    graphEntertainment.append(newLi);
  } else if (category === "clothing") {
    // graph functionality for spent bar
    clothing += +moneySpent.value;
    let clothingPercent = (clothing / +initialMoney.value) * 100;
    clothingBar.style.height = `${clothingPercent * 3}px`;
    clothingBar.style.backgroundColor = "lightcoral";
    clothingBar.style.border = "lightcoral";

    //functionality for itemized list
    const newLi = document.createElement("li");
    newLi.setAttribute("class", "clothing-li");
    newLi.innerText = `Item: ${graphInputItem.value} | Price: $${graphInputPrice.value}`;
    graphClothing.append(newLi);
  } else if (category === "bills") {
    // graph functionality for spent bar
    bills += +moneySpent.value;
    let billsPercent = (bills / +initialMoney.value) * 100;
    billsBar.style.height = `${billsPercent * 3}px`;
    billsBar.style.backgroundColor = "lightskyblue";
    billsBar.style.border = "lightskyblue";

    //functionality for itemized list
    const newLi = document.createElement("li");
    newLi.setAttribute("class", "bills-li");
    newLi.innerText = `Item: ${graphInputItem.value} | Price: $${graphInputPrice.value}`;
    graphBills.append(newLi);
  }

  //graph functionality for total bar
  totalBar.style.height = `${(runningTotal / 10) * 4}px`;
  totalBar.style.backgroundColor = "grey";
  totalBar.style.border = "gray";
  console.log(runningTotal);
  condescendingMessagefunction();
});

allTheBars.addEventListener("click", (e) => {
  if (e.target.classList.contains("bars")) {
    graphPopUp.style.display = "block";
  } else if (e.target.classList.contains("total-bar", "bar-container")) {
    graphPopUp.style.display = "block";
  } else
    e.target.classList.contains(
      "food-bar",
      "entertain-bar",
      "clothing-bar",
      "bills-bar"
    );
  {
    graphPopUp.style.display = "block";
  }
});

graphPopUp.addEventListener("click", (e) => {
  if (e.target.classList.contains("graph-X-button")) {
    graphPopUp.style.display = "none";
  }
});
