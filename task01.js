'use strict';

const allStudents = ['Иванов', 'Петров', 'Сидоров', 'Кузнецов', 'Смирнов', 'Попов', 'Соколов'];
const failedStudents = ['Сидоров', 'Смирнов', 'Попов'];

const filter = (arr1, arr2) => {
  const successStudents = [];

  for (const student of arr1) {
    if (!arr2.includes(student)) {
      successStudents.push(student);
    }
  }
  return successStudents;
}


console.log(filter(allStudents, failedStudents));
