// ДЗ 2 обязательное

var mainList = {
	incom: +"",
	marketName: "",
	shopGoods: [],
	employers: {},
	open: false
};

// Цикл while 
var i = 0;

while (i < 3) {
	var a = prompt("Какой тип товаров будем продавать?");
	i++;
	if (typeof(a) === 'string' && typeof(a) != null && a!= '' && a.length < 50) {
		mainList.shopGoods[i] = a;
	} 
};

console.log(mainList.shopGoods);

// Цикл do...while 
/*
var i = 0;
do {
	var a = prompt("Какой тип товаров будем продавать?");
	i++;
	if (typeof(a) === 'string' && typeof(a) != null && a!= '' && a.length < 50) {
		mainList.shopGoods[i] = a;
	} 
} while (i < 3);

console.log(mainList.shopGoods);
*/
























