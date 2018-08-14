// У вас есть str = “урок-3-был слишком легким”

// Делаем первую букву заглавной, убираем "-" и изменяем две последние буквы 
var str = 'урок-3-был слишком легким';
var newStr = str[0].toUpperCase() + str.slice(1);
var x = newStr.replace(/-/g, ' ');
var y = x.slice(0,19) + x.slice(19).replace('им', 'оо');
	
// console.log(y);

// 
var arr = [20, 33, 1, 'Человек', 2, 3];
var newArr =[];

for (var i = 0; i < arr.length; i++) {
	if (!isNaN(arr[i])) {
		newArr.push(arr[i]);
	}
}

// У вас также есть массив arr = [20, 33, 1, “Человек”, 2, 3] 

let result = [];
let ans;
function erectTo(callback) {

	// Возводим каждый элемент массива newArr в куб 
	for (var i = 0; i< newArr.length; i++) {
		let x = Math.pow(newArr[i], 3);
		result.push(x);
	}
	callback();
}
// Суммируем все значения массива result и сохраняем их в ans 
erectTo(function (call){
	let y = result[0];
	for (var i = 1; i< result.length; i++) {
		y += result[i];
	}
	ans = y;
});
// Выводим корень получившегося числа 
// console.log(Math.sqrt(ans));


// Создайте функцию, которая принимает 1 аргумент

function string (x) {
	let y;

	if (!isNaN(x) || x == '') {
		alert('Вы ввели не строку или пустую строку');
	} else if (x.length > 50) {
		y = x.slice(0,50) + '...';
	} else {
		y = x; 
	};
	let z = y.trim();
	console.log(z);
} 
// string();



