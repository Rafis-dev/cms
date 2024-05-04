'use strict';

{
  const rain = Math.round(Math.random());

  if (rain === 1) {
    console.log('Пошёл дождь. Возьмите зонт!');
  } else {
    console.log('Дождя нет!');
  }
}

{
  const math = +prompt('введите количество баллов по математике', '85');
  const russ = +prompt('введите количество баллов по русскому языку', '75');
  const inf = +prompt('введите количество баллов по информатике', '95');
  const sum = math + russ + inf;

  if (sum >= 265) {
    console.log('Поздравляю, вы поступили на бюджет!');
  } else {
    console.log('Сожалею, вы не поступили на бюджет')
  }
}

{
  const money = prompt('Сколько денег вы хотите снять?', '100');

  if (money % 100 === 0) {
    console.log('Операция выполняется');
  } else {
    console.log('Ошибка! Введите сумму кратную 100')
  }

}