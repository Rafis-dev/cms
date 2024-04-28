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
  const askQuantity = prompt('Введите количество товара', '5');
  const askCategory = prompt('Введите категорию товара', 'Аудио');
  const askPrice = prompt('Введите цену товара', '400');

  console.log(typeof askProduct);
  console.log(typeof askQuantity);
  console.log(typeof askCategory);
  console.log(typeof askPrice);

  const quantityToNum = +askQuantity;
  const priceToNum = +askPrice;

  console.log(typeof quantityToNum);
  console.log(typeof priceToNum);

  console.log(`На складе ${askQuantity} единиц(-ы) товара ${askProduct} на сумму ${askPrice * askQuantity} рубля(-ей)`);

}