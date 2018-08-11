// ПЕРВОЕ ДЗ
var mainList = {
	incom: +"",
	marketName: "",
	shopGoods: [],
	employers: {},
	open: ""
};
// присваеваем значение и выводим бюджет на 1 день 
var earn = prompt("Ваш бюджет на месяц?");
	mainList.incom = earn;
	alert(earn/30)

// сохраняем имя магазина в обьект mainList 
var marketName = prompt("Название вашего магазина?");
	mainList.marketName = marketName;
	console.log(marketName);

// цикл товаров + сохранение их в массиве shopGoods
for (var i = 0; i < 3; i++) {

	let ans = prompt("Какой тип товаров будем продавать?");
		mainList.shopGoods.push(ans);
		console.log(mainList.shopGoods);
};


