'use strict';

const guessNumber = () => {
  const randomNumber = Math.round((Math.random() * 99) + 1);
  console.log(randomNumber);
  let userGuess;

  do {
    userGuess = prompt('Угадайте число от 1 до 100');

    switch (true) {
      case userGuess === null:
        alert("Игра окончена.");
        break;
      case Number.isNaN(+userGuess):
      case +userGuess > 100:
      case +userGuess < 1:
        alert("Ошибка! Введите число от 1 до 100");
        break;
      case userGuess > randomNumber:
        alert("Меньше! Попробуйте снова.");
        break;
      case userGuess < randomNumber:
        alert("Больше! Попробуйте снова.");
        break;
      default:
        alert("Поздравляю! Вы угадали");
    }

  } while (+userGuess !== randomNumber && userGuess !== null);
}

guessNumber();