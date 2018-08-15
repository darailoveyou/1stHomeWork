// Третье домашнее задание 

var money,
	shopName,
	price

var mainList = {
	budget: money,
	marketName: shopName,
	shopGoods: [],
	employers: {},
	open: false,
	discount: true   
	}	

// Функция спрашивающая наш бюджет и сохраняющая значение в объект mainList 
function start () {
	money = prompt('Ваш бюджет ?');

	while (isNaN(money) || money == null || money == '') {
		money = prompt('Ваш бюджет ?');
	}
	mainList.budget = money;

}


// Функция сохраняющая значения типов товаров в объект mainList 
function chooseGoods () {
	for (var i = 0; i < 3; i++) {

		let a = prompt("Какой тип товаров будем продавать?");
			if ((typeof(a)) === 'string' && (typeof(a)) != null && a!= '' && a.length < 50)
			{
				mainList.shopGoods[i] = a;
			} else if (a === null || a == '') {
				i--;
			}
	}
}


// Функция выдающая дневной бюджет 
function dayBudget(){
	let x = mainList.money / 30;
	console.log('Дневной бюджет = ' + Math.round(x));
}


// Функция скидок 
function discount () {
	if (mainList.discount === true) {
		price = price * 0.8;
	} else {
		return false;
	}
}


// Функция найма сотрудников 
function employers() {
	for(var i = 0; i < 4; i++) {
		let x = prompt('Имя сотрудника ?');

		while ((typeof(x)) != 'string' || x == null || x == '') {
			x = prompt('Имя сотрудника ?');
		}
		mainList.employers[i] = x;
	}
}
employers();

console.log(mainList.employers);

















