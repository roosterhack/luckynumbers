var generateButton = document.getElementById("generate");
var clearButton = document.getElementById("clear");
var clearNumsButton = document.getElementById("clearNums");
var clearHorseNumsButton = document.getElementById("clearHorseNums");
var markSixSelectButton = document.getElementById("markSixSelect");
var horseSelectButton = document.getElementById("horseSelect");
var clearHorseBetButton = document.getElementById("clearHorseBets");
var generateHorseBetsButton = document.getElementById("generateHorseBets");
var numOfResults = document.getElementById("numOfResults");

// number of results
function increment() {
  document.getElementById("numOfResults").stepUp();
  console.log("dashdaksjh");
}
function decrement() {
  document.getElementById("numOfResults").stepDown();
}
//get all input numbers

const showHideSection = () => {
  var horseSection = document.getElementById("horses");
  var markSixSection = document.getElementById("markSix");

  if (markSixSection.className === "hide") {
    markSixSection.classList.remove("hide");
    horseSection.classList.add("hide");
    horseSelectButton.disabled = false;
    markSixSelectButton.disabled = true;
  } else {
    markSixSection.classList.add("hide");
    horseSection.classList.remove("hide");
    horseSelectButton.disabled = true;
    markSixSelectButton.disabled = false;
  }
};

const generateNums = () => {
  var bets = document.getElementById("history").children;

  var n1 = document.querySelector("#n1").value;
  var n2 = document.querySelector("#n2").value;
  var n3 = document.querySelector("#n3").value;
  var n4 = document.querySelector("#n4").value;
  var n5 = document.querySelector("#n5").value;
  var n6 = document.querySelector("#n6").value;
  var n7 = document.querySelector("#n7").value;
  var n8 = document.querySelector("#n8").value;
  var n9 = document.querySelector("#n9").value;
  var n10 = document.querySelector("#n10").value;
  var n11 = document.querySelector("#n11").value;
  var n12 = document.querySelector("#n12").value;
  var n13 = document.querySelector("#n13").value;
  var n14 = document.querySelector("#n14").value;
  var n15 = document.querySelector("#n15").value;
  var n16 = document.querySelector("#n16").value;
  var n17 = document.querySelector("#n17").value;
  var n18 = document.querySelector("#n18").value;
  var n19 = document.querySelector("#n19").value;
  var n20 = document.querySelector("#n20").value;
  var n21 = document.querySelector("#n21").value;
  var inputNums = [
    n1,
    n2,
    n3,
    n4,
    n5,
    n6,
    n7,
    n8,
    n9,
    n10,
    n11,
    n12,
    n13,
    n14,
    n15,
    n16,
    n17,
    n18,
    n19,
    n20,
    n21,
  ];

  if (bets.length >= 500) return null;

  // let hasValue = false;

  var lastResults = inputNums.map((n) => {
    if (n) {
      // hasValue = true;
      return Number(n);
    }
    return null;
  });

  //get random numbers
  var numbers = [];

  const numOfEachBet = numOfResults.value;

  while (numbers.length < numOfEachBet) {
    var random = Math.floor(Math.random() * 49) + 1;

    if (numbers.indexOf(random) === -1 && !lastResults.includes(random)) {
      numbers.push(random);
    }
  }

  //add numbers to history
  var history = [];
  var historyDiv = document.getElementById("history");
  var para = document.createElement("li");
  history.push(numbers.join(" - "));

  for (var k in history) {
    var node = document.createTextNode(history[k]);
    para.appendChild(node);
    historyDiv.appendChild(para);
  }
};

const howManyBets = (numBets) => {
  for (i = 0; i < numBets; i++) {
    generateNums();
  }
};

generateButton.addEventListener("click", () => {
  var numberOfBets = document.querySelector("#numBets").value;
  howManyBets(numberOfBets || 1);
});

const generateHorseBets = () => {
  var bets = document.getElementById("horseHistory").children;

  // var numHorses = document.querySelector('#numOfHorse').value;
  var hN1 = document.querySelector("#hN1").value;
  var hN2 = document.querySelector("#hN2").value;
  var hN3 = document.querySelector("#hN3").value;
  var hN4 = document.querySelector("#hN4").value;
  var hN5 = document.querySelector("#hN5").value;
  var hN6 = document.querySelector("#hN6").value;
  var hN7 = document.querySelector("#hN7").value;
  var hN8 = document.querySelector("#hN8").value;
  var hN9 = document.querySelector("#hN9").value;
  var hN10 = document.querySelector("#hN10").value;
  var hN11 = document.querySelector("#hN11").value;
  var hN12 = document.querySelector("#hN12").value;
  var hN13 = document.querySelector("#hN13").value;
  var hN14 = document.querySelector("#hN14").value;

  var inputNums = [
    hN1,
    hN2,
    hN3,
    hN4,
    hN5,
    hN6,
    hN7,
    hN8,
    hN9,
    hN10,
    hN11,
    hN12,
    hN13,
    hN14,
  ];

  let hasValue = false;

  var lastResults = inputNums.map((n) => {
    if (n) {
      hasValue = true;
      return Number(n);
    }
    return null;
  });

  if (bets.length >= 30) return null;

  //get random numbers
  var numbers = [];

  while (numbers.length < 4) {
    var random = Math.floor(Math.random() * 14) + 1;

    if (numbers.indexOf(random) === -1 && !lastResults.includes(random)) {
      numbers.push(random);
    }
  }

  //add numbers to history
  var history = [];
  var historyDiv = document.getElementById("horseHistory");
  var para = document.createElement("li");
  history.push(numbers.join(" - "));

  for (var k in history) {
    var node = document.createTextNode(history[k]);
    para.appendChild(node);
    historyDiv.appendChild(para);
  }
};

const howManyHorseBets = (numBets) => {
  for (i = 0; i < numBets; i++) {
    generateHorseBets();
  }
};

generateHorseBetsButton.addEventListener("click", () => {
  var numberOfBets = document.querySelector("#numHorseBets").value;
  howManyHorseBets(numberOfBets || 1);
});

horseSelectButton.addEventListener("click", () => showHideSection());
markSixSelectButton.addEventListener("click", () => showHideSection());

clearNumsButton.addEventListener("click", () => {
  n1.value = "";
  n2.value = "";
  n3.value = "";
  n4.value = "";
  n5.value = "";
  n6.value = "";
  n7.value = "";
  n8.value = "";
  n9.value = "";
  n10.value = "";
  n11.value = "";
  n12.value = "";
  n13.value = "";
  n14.value = "";
  n15.value = "";
  n16.value = "";
  n17.value = "";
  n18.value = "";
  n19.value = "";
  n20.value = "";
  n21.value = "";
});

clearHorseNumsButton.addEventListener("click", () => {
  hN1.value = "";
  hN2.value = "";
  hN3.value = "";
  hN4.value = "";
  hN5.value = "";
  hN6.value = "";
  hN7.value = "";
  hN8.value = "";
  hN9.value = "";
  hN10.value = "";
  hN11.value = "";
  hN12.value = "";
  hN13.value = "";
  hN14.value = "";
});

clearButton.addEventListener("click", () => {
  var ul = document.getElementById("history");
  ul.innerHTML = "";
});

clearHorseBetButton.addEventListener("click", () => {
  var ul = document.getElementById("horseHistory");
  ul.innerHTML = "";
});
