var generateButton = document.getElementById('generate');
var clearButton = document.getElementById('clear');
var clearNumsButton = document.getElementById('clearNums');

//get all input numbers

generateButton.addEventListener('click', function () {
  var bets = document.getElementById('history').children;

  var n1 = document.querySelector('#n1').value;
  var n2 = document.querySelector('#n2').value;
  var n3 = document.querySelector('#n3').value;
  var n4 = document.querySelector('#n4').value;
  var n5 = document.querySelector('#n5').value;
  var n6 = document.querySelector('#n6').value;
  var n7 = document.querySelector('#n7').value;
  var n8 = document.querySelector('#n8').value;
  var n9 = document.querySelector('#n9').value;
  var n10 = document.querySelector('#n10').value;
  var n11 = document.querySelector('#n11').value;
  var n12 = document.querySelector('#n12').value;
  var n13 = document.querySelector('#n13').value;
  var n14 = document.querySelector('#n14').value;
  var n15 = document.querySelector('#n15').value;
  var n16 = document.querySelector('#n16').value;
  var n17 = document.querySelector('#n17').value;
  var n18 = document.querySelector('#n18').value;
  var n19 = document.querySelector('#n19').value;
  var n20 = document.querySelector('#n20').value;
  var n21 = document.querySelector('#n21').value;
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

  if (bets.length >= 200) return null;

  let hasValue = false;

  var lastResults = inputNums.map((n) => {
    if (n) {
      hasValue = true;
      return Number(n);
    }
    return null;
  });

  //get random numbers
  var numbers = [];

  const numOfEachBet = hasValue ? 7 : 6;

  while (numbers.length < numOfEachBet) {
    var random = Math.floor(Math.random() * 49) + 1;

    if (numbers.indexOf(random) === -1 && !lastResults.includes(random)) {
      numbers.push(random);
    }
  }

  //add numbers to history
  var history = [];
  var historyDiv = document.getElementById('history');
  var para = document.createElement('li');
  history.push(numbers.join(' - '));

  for (var k in history) {
    var node = document.createTextNode(history[k]);
    para.appendChild(node);
    historyDiv.appendChild(para);
  }
});

clearNumsButton.addEventListener('click', () => {
  n1.value = '';
  n2.value = '';
  n3.value = '';
  n4.value = '';
  n5.value = '';
  n6.value = '';
  n7.value = '';
  n8.value = '';
  n9.value = '';
  n10.value = '';
  n11.value = '';
  n12.value = '';
  n13.value = '';
  n14.value = '';
  n15.value = '';
  n16.value = '';
  n17.value = '';
  n18.value = '';
  n19.value = '';
  n20.value = '';
  n21.value = '';
});
clearButton.addEventListener('click', () => {
  var ul = document.getElementById('history');
  ul.innerHTML = '';
});
