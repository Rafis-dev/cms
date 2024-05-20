'use strict';

const names = ['Noah', 'Liam', 'Mason', 'Jacob', 'Robot', 'William', 'Ethan', 'Michael', 'Alexander'];

const addPrefix = (arr, prefix) => {
  let name = [];
  for (let i of arr) {
    name.push(prefix + ' ' + i);
  }

  return name;
}

console.log(addPrefix(names, 'Mr'));