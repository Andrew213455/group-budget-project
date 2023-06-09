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
const xButton = document.querySelector(".graph-X-button");
const submitButton = document.querySelector(".submit-button");
const disButton = document.querySelectorAll(".dis-button");
const addMoneyPopup = document.querySelector(".form-add-money");
const addMoneyPopup2 = document.querySelector(".add-money-popup");
const foodLi = document.querySelector(".food-li");
const entertainmentLi = document.querySelector(".entertainment-li");
const clothingLi = document.querySelector(".clothing-li");
const billsLi = document.querySelector(".bills-li");

//selectors for pop up on graph
const graphPopUp = document.querySelector(".graph-pop-up");
const graphFood = document.querySelector(".graph-food");
const graphEntertainment = document.querySelector(".graph-entertainment");
const graphClothing = document.querySelector(".graph-clothing");
const graphBills = document.querySelector(".graph-bills");
const graphInputItem = document.querySelector("#item");
const graphInputPrice = document.querySelector("#spentValue");
const addMoneyInput = document.querySelector("#add-money");

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
const item = document.querySelector("#item")
let initialMoney = document.querySelector("#budget");
let totalSpent = 0;
let runningTotal = 0;
let initialMoneyValue = null;

let numberFood = 0;
let numberEntertainment = 0;
let numberClothing = 0;
let numberBills = 0;

let entertainment = 0;
let food = 0;
let clothing = 0;
let bills = 0;

let category = "";



const condescendingMessagefunction = () => {
   if (runningTotal > totalSpent) {
    dynamicMessage.innerText = `hey ${name.value}, looking good on that spending!`
  } else if (runningTotal === totalSpent) {
    dynamicMessage.innerText = `woaaaahhhh were halfway there, WOAHHHHH, livin' on a prayer`
  } else if (runningTotal === 0) {
    dynamicMessage.innerText = "You're out!! what a disappointment. whats the matter with you?? Add more funds to continue spending"
  } else if (totalSpent > +initialMoney.value) {
    dynamicMessage.innerText = `Give me money. Money me. Money now. Me a money needing a lot now. Add more funds to continue spending`
  } else if (runningTotal < totalSpent) {
    dynamicMessage.innerText = `Jeez ${name.value}, you're spending a LOT`
  } else if (runningTotal > +initialMoney.value) {
    dynamicMessage.innerText = `dang ${name.value}, you actually managed to make money?! nice!!!`
  }

};

popUpBox.addEventListener("submit", (e) => {
  e.preventDefault();

  // initial pop up when you first get on website

  initialMoneyValue = +initialMoney.value;
  startingInfoForm.style.display = "none";
  main.style.display = "flex";
  headerTotal.textContent = `Total: $` + initialMoneyValue;
  submitButton.style.display = "flex";
  resetButton.style.display = "block";

  runningTotal = initialMoneyValue;
  spentValue.textContent = `Spent: $${totalSpent}`;
  headerTotal.textContent = `Total: $${runningTotal}`;

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
  } else if (e.target.classList.contains("add-funds")) {
    graphPopUp.style.display = "none";
    main.style.display = "none";
    resetButton.style.display = "none";
    popUp.style.display = "none";
    addMoneyPopup.style.display = "flex";
    addMoneyPopup2.style.display = "flex";
    category = "add-funds"
  }

  condescendingMessagefunction();
});

expensesForm.addEventListener("submit", (e) => {
  e.preventDefault();
  // displays
  main.style.display = "flex";
  popUpBox.style.display = "none";
  popUp.style.display = "none";
  resetButton.style.display = "block";

  // functionality for header totals
  runningTotal -= +moneySpent.value;
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

    // functionality for itemized list
    const newLi = document.createElement("li");
    newLi.setAttribute("class", "food-li");
    newLi.setAttribute("data-price", graphInputPrice.value);
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
    newLi.setAttribute("data-price", graphInputPrice.value);
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
    newLi.setAttribute("data-price", graphInputPrice.value);
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
    newLi.setAttribute("data-price", graphInputPrice.value);
    newLi.innerText = `Item: ${graphInputItem.value} | Price: $${graphInputPrice.value}`;
    graphBills.append(newLi);

  }

  //graph functionality for total bar
  totalBar.style.height = `${(runningTotal / 10) * 4}px`;
  totalBar.style.backgroundColor = "grey";
  totalBar.style.border = "gray";
  //console.log(runningTotal);
  if (runningTotal <= 1) {
    totalBar.style.display = "none";
  }
  
  if(runningTotal <= 0) {
    disButton.forEach((button) => {
        button.disabled = true;
      })
    }
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

  if(e.target.classList.contains("food-li")) {
    const selectedPrice = e.target.getAttribute("data-price");
    runningTotal += +selectedPrice;
    totalSpent -= +selectedPrice;
    spentValue.textContent = `Spent: $${totalSpent}`;
    headerTotal.textContent = `Total: $${runningTotal}`;
    food -= selectedPrice;
    let foodPercent = (food / +initialMoney.value) * 100;
    foodBar.style.height = `${foodPercent * 3}px`;
    disButton.forEach((button) => {
      button.disabled = false;
    })
    condescendingMessagefunction();
    e.target.remove();

  } else if (e.target.classList.contains("entertainment-li")) {
    const selectedPrice = e.target.getAttribute("data-price");
    runningTotal += +selectedPrice;
    totalSpent -= +selectedPrice;
    spentValue.textContent = `Spent: $${totalSpent}`;
    headerTotal.textContent = `Total: $${runningTotal}`;
    entertainment -= selectedPrice;
    let entertainmentPercent = (entertainment / +initialMoney.value) * 100;
    entertainmentBar.style.height = `${entertainmentPercent * 3}px`;
    disButton.forEach((button) => {
      button.disabled = false;
    });
    condescendingMessagefunction();
    e.target.remove();
  } else if (e.target.classList.contains("clothing-li")) {
    const selectedPrice = e.target.getAttribute("data-price");
    runningTotal += +selectedPrice;
    totalSpent -= +selectedPrice;
    spentValue.textContent = `Spent: $${totalSpent}`;
    headerTotal.textContent = `Total: $${runningTotal}`;
    clothing -= selectedPrice;
    let clothingPercent = (clothing / +initialMoney.value) * 100;
    clothingBar.style.height = `${clothingPercent * 3}px`;
    disButton.forEach((button) => {
      button.disabled = false;
    });
    condescendingMessagefunction();
    e.target.remove();
  } else if (e.target.classList.contains("bills-li")) {
    const selectedPrice = e.target.getAttribute("data-price");
    runningTotal += +selectedPrice;
    totalSpent -= +selectedPrice;
    spentValue.textContent = `Spent: $${totalSpent}`;
    headerTotal.textContent = `Total: $${runningTotal}`;
    bills -= selectedPrice;
    let billsPercent = (bills / +initialMoney.value) * 100;
    billsBar.style.height = `${billsPercent * 3}px`;
    disButton.forEach((button) => {
      button.disabled = false;
    })
    condescendingMessagefunction();
    e.target.remove();
  }
});

xButton.addEventListener("click", (e) => {
  if (e.target.classList.contains("graph-X-button")) {
    popUp.style.display = "none";
    main.style.display = "flex";
    resetButton.style.display = "block";
  }
});

addMoneyPopup2.addEventListener("click", (e) => {
  if (e.target.classList.contains("X-button")) {
    main.style.display = "flex";
    resetButton.style.display = "block";
    addMoneyPopup.style.display = "none";
    addMoneyPopup2.style.display = "none";
  }
})

addMoneyPopup.addEventListener("submit", (e) => {
  e.preventDefault();

  if(category === "add-funds") {
    runningTotal += +addMoneyInput.value;
    headerTotal.textContent = `Total: $${runningTotal}`;
    addMoneyPopup.style.display = "none";
    main.style.display = "flex";
    resetButton.style.display = "block";
    addMoneyPopup2.style.display = "none";
    console.log(runningTotal);
  }

  if(runningTotal >= 0) {
    disButton.forEach((button) => {
      button.disabled = false;
      totalBar.style.display ="flex";
      totalBar.style.height = `${(runningTotal / 10) * 4}px`;
    })
  }
  condescendingMessagefunction();
})