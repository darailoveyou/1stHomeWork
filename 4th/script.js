// 4-e домашнее задание 

var money,
	shopName,
	price

var mainList = {
	budget: money,
	marketName: shopName,
	shopGoods: [],
	employers: {},
	open: false,
	discount: true,
	shopItems: [],
	chooseGoods: function chooseGoods () {
		for (var i = 0; i < 3; i++) {
			let a = prompt("Какой тип товаров будем продавать?", '');

				if ((typeof(a)) === 'string' && (typeof(a)) != null && a!= '' && a.length < 50)
				{
					mainList.shopGoods[i] = a;
				} 
				else if (a === null || a == '') 
				{
					i--;
				}
		}
	},
	workTime: function workTime(time) {
		if (time < 0)
		{
			console.log('Такого быть не может !');
		} else if (time > 8 && time < 20)
		{
			console.log('Время работать !');
			mainList.open = true;
		} else if (time < 24)
		{
			console.log('Уже слишом поздно =(');
		} else 
		{
			console.log('В сутках 24 часа =)');
		}
	},
	dayBudget: function dayBudget(){
		let x = mainList.money / 30;
		console.log('Дневной бюджет = ' + Math.round(x));
	},
	discount: function discount() {
		if (mainList.discount === true) 
		{
			price = price * 0.8;
		} else 
		{
			return false;
		}
	},
	employers: function employers() {
		for(var i = 0; i < 4; i++) {
			let x = prompt('Имя сотрудника ?', '');

			while ((typeof(x)) != 'string' || x == null || x == '') {
				x = prompt('Имя сотрудника ?', '');
			}
			mainList.employers[i] = x;
		}
	},
	chooseShopItems: function chooseShopItem() {
		let items = prompt('Перечислите товары через запятую', '');
		let t = 1;

		while (!isNaN(items) || items == null || items == '') 
		{
			items = prompt('Перечислите товары через запятую', '');
		}
		mainList.shopItems = items.split(',');
		mainList.shopItems.sort();

		mainList.shopItems.forEach(function(element) {
  			alert('У нас вы можете купить ' + t++ + ' - ' + element);
		});

		for (let key in mainList.shopItems) { 
			console.log("Наш магазин включает в себя: " + mainList.shopItems[key]);
		}
	}
}	

console.log(mainList);





































































































