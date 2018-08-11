// ЯКОБЫ СЛОЖНОЕ ЗАДАНИЕ 
var num = 33721;
var x = num+"";
var y = x.split("");
var z = 3;
var t;
var ans;

// получаем произведение чисел 
for (var i = 1; i < y.length; i++) {
	z*= y[i];
}
// возводим в степень и выводим 2 числа 
t = Math.pow(z,3);

ans = t.toFixed();

console.log(ans.slice(0,2));
