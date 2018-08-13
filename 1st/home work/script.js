// ПЕРВОЕ ДЗ

var mainList = {
	incom: +"",
	marketName: "",
	shopGoods: [],
	employers: {},
	open: false
};
// присваеваем значение и выводим бюджет на 1 день 
var earn = prompt("Ваш бюджет на месяц?");
	mainList.incom = earn;
	alert(earn/30);

// сохраняем имя магазина в обьект mainList 
var marketName = prompt("Название вашего магазина?");
	mainList.marketName = marketName;

// цикл товаров + сохранение их в массиве shopGoods
/*for (var i = 0; i < 3; i++) {

	let a = prompt("Какой тип товаров будем продавать?");
		if ((typeof(a)) === 'string' && (typeof(a)) != null && a!= '' && a.length < 50)
		{
			console.log('verno!');
			mainList.shopGoods[i] = a;
		} else if(a === null) {
			console.log('neverno');
		}
};

*/


// ЗАДАНИЕ 2 
// Переписать наш цикл for еще двумя способами и закомментировать их.
for(var i = 0; i < 3; i++) {
	let ans = prompt('Имя ' + i +' друга ?')
	switch (ans) {
		case (typeof(ans)) === 'string' && (typeof(ans)) != null :
		mainList.shopGoods[i] = ans;
	}
};






console.log(mainList);















