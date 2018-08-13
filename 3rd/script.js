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
function spendMoneyDay(momey){
	let x = money / 30;
	console.log('Дневной бюджет = ' + Math.round(x));
}


// Функция скидок 
function discount (price) {
	if (mainList.discount === true) {
		let newPrice = price * 0.8;
		console.log(newPrice);
	} else {
		return false;
	}
}


// Функция найма сотрудников 
function employers() {
	let y = 0;
	
	for(var i = 0; i < 4; i++) {
		let x = prompt('Имя сотрудника ?');

		while ((typeof(x)) != 'string' || x == null || x == '') {
			x = prompt('Имя сотрудника ?');
		}
		y++
		mainList.employers[i] = y + ' - ' + x;
	}
}
employers();

console.log(mainList.employers);

















