var button = document.getElementById('generate');

button.addEventListener('click', function () {
  //get random numbers

  var numbers = [];
  var ball = document.getElementsByClassName('ball');

  while (numbers.length < 7) {
    const takeOutNum = Math.floor(Math.random() * 49) + 1;

    var random = Math.floor(Math.random() * 49) + 1;

    if (numbers.indexOf(random) == -1 && random !== takeOutNum) {
      numbers.push(random);
    }
  }

  //color balls

  for (var i = 0; i < ball.length; i++) {
    ball[i].style.backgroundColor = 'white';
    ball[i].style.color = '#3d3c3a';

    for (var j = 0; j < numbers.length; j++) {
      if (numbers[j] == parseInt(ball[i].innerHTML)) {
        ball[i].style.backgroundColor = '#fa8b60';
        ball[i].style.color = 'white';
      }
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
