'use strict';

const guessNumber = () => {
  let randomNumber = Math.round((Math.random() * 100) + 1);
  console.log(randomNumber);

  let userGuess;

  do {
    userGuess = prompt('Угадайте число от 1 до 100', 'Введите число');

    if (userGuess === null) {
      alert("Игра окончена.");
      return;
    } else if (Number.isNaN(Number(userGuess))) {
      alert("Ошибка! Введено не число. Попробуйте снова.");
    } else if (userGuess > randomNumber) {
      alert("Меньше! Попробуйте снова.");
    } else if (userGuess < randomNumber) {
      alert("Больше! Попробуйте снова.");
    } else {
      alert("Поздравляю! Вы угадали");
      return
    }


  } while (userGuess !== randomNumber && userGuess !== null);


}

guessNumber();