var generateButton = document.getElementById('generate');
var clearButton = document.getElementById('clear');
var clearNumsButton = document.getElementById('clearNums');

//get all input numbers

generateButton.addEventListener(
  'click',
  function () {
    var n1 = document.querySelector('#n1').value;
    var n2 = document.querySelector('#n2').value;
    var n3 = document.querySelector('#n3').value;
    var n4 = document.querySelector('#n4').value;
    var n5 = document.querySelector('#n5').value;
    var n6 = document.querySelector('#n6').value;
    var n7 = document.querySelector('#n7').value;
    var inputNums = [n1, n2, n3, n4, n5, n6, n7];

    var lastResults = inputNums.map((n) => {
      if (n) {
        return Number(n);
      }
      return null;
    });

    //get random numbers
    // if (!lastResults.includes(null)) {
    var numbers = [];
    console.log(lastResults);
    while (numbers.length < 7) {
      // const takeOutNum = Math.floor(Math.random() * 49) + 1;

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
  }
  // }
);

clearNumsButton.addEventListener('click', () => {
  n1.value = '';
  n2.value = '';
  n3.value = '';
  n4.value = '';
  n5.value = '';
  n6.value = '';
  n7.value = '';
});
clearButton.addEventListener('click', () => {
  var ul = document.getElementById('history');
  ul.innerHTML = '';
});
