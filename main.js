// Задание 1  
console.log("Задание 1");

let myCar = {
    carName: prompt('Название машины', ["Например: Ford Mustang"]),
    color: prompt('Цвет', ["Например: синий"]),
    horsePowers: prompt('Количество лошадинных сил', ["Например: 150"]),
    year: prompt('Год выпуска', ["Например: 1983"]),
    cost: prompt('Цена', ["Например: 2500000"]),
};
console.log('Свойства: ', Object.keys(myCar).toString());
console.log('Вы продаёте ' + myCar.color + ' ' + myCar.carName + ' ' + myCar.year + ' года выпуска, ' + 'мощностью ' + myCar.horsePowers + ' за ' + myCar.cost + 'рублей');

// Задание 2
console.log("Задание 2");

let array = [5, 4, 3, 2, 1]; 
console.log(`Начальный массив ${array.join(', ')}`)
function newArray(array) {
   for(let i = array.length; i > 0; i--) {
       if(i != 1) { 
           console.log(`Удалили ${array.pop()}, осталось ${array.join(', ')}`);
        }
   } 
};
newArray(array);

// Задание 3
console.log("Задание 3")

let word = prompt('Введите слово для проверки')

function isPalindrome(word) {
    const length = word.length,
        wordReverse = word.split('').reverse().join('');
    if (wordReverse == word) {
      console.log(word + ' - палиндром');
    } else {
        console.log(word + ' не палиндром');
    }
  };

isPalindrome(word);

// Задание 4
console.log("Задание 4");
function scalarMultiplication(number,matrix) {
    for (let i=0;i<matrix.length;i++) {
        let array=[];
        let str="";
        for (let j=0;j<matrix[i].length;j++) {
            matrix[i][j]=matrix[i][j]*number;
            array.push(matrix[i][j])
            if (String(matrix[i][j]).length == 1){
                str+=matrix[i][j] + '  ';
            }
            else {
                str+=matrix[i][j] + ' ';
            }
        }
        console.log(str)
    }
}
scalarMultiplication(3, [[1,2,3],[4,5,6],[7,8,9]])