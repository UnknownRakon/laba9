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
