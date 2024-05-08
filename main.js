'use strict';
{
  const product = 'headphones';
  const quantity = 17;
  const category = 'audio';
  const price = 7;

  console.log(product);
  console.log(quantity * price);
}


{
  const askProduct = prompt('Введите наименование товара', 'Колонки');
  const askQuantity = +prompt('Введите количество товара', '35');
  const askCategory = prompt('Введите категорию товара', 'Аудио');
  const askPrice = +prompt('Введите цену товара', '150');


  if (isNaN(askQuantity) || isNaN(askPrice)) {
    alert('Вы ввели некорректные данные');
  } else {
    console.log(`На складе ${askQuantity} единиц(-ы) товара ${askProduct} на сумму ${askPrice * askQuantity} рубля(-ей)`);
  }


}

