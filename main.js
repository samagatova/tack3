// Дан массив ["dlrow", "olleH"]. Измените его таким образом, чтобы в итоге получилось ["Hello", "world"]. Используйте методы массива.

// Дан массив ['а', 'б', 'в']. Добавьте ему в конец элементы 4,3,5,5.
let arr = ['а', 'б', 'в'];
arr.push(4, 3, 5, 5);

console.log(arr); 
// Дан массив ["Apple", "Orange", "Pinapple","Cherry"]
let arr2 = ["Apple", "Orange", "Pinapple", "Cherry"];
let firstElement = arr2.shift();
let pineappleIndex = arr2.indexOf("Pinapple");
arr2.splice(pineappleIndex + 1, 0, firstElement);
console.log(arr2); 

// Дан массив 18, -7, -21, 44, 31. Вывести в консоль наиболшее число из массива.
// Подсказка: нужно использовать метод sort().
let arr3 = [18, -7, -21, 44, 31];
arr3.sort((a, b) => b - a);
let maxNumber = arr3[0];
console.log(maxNumber);