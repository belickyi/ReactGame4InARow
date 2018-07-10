function makeCounter() {
  var currentCount = 1;

  // возвращаемся к функции
  function counter() {
    return currentCount++;
  }

  // ...и добавляем ей методы!
  counter.set = function(value) {
    currentCount = value;
  };

  counter.reset = function() {
    currentCount = 1;
  };

  return counter;
}

var counter = makeCounter();

alert( counter() ); // 1
alert( counter() ); // 2
alert( counter() ); // 3
alert( counter() ); // 4
alert( counter() ); // 5
alert( counter() ); // 6

counter.set(5);
alert( counter() ); // 5