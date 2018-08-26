var btn 			 = document.getElementById('open-btn'),
	inputValue		 = document.getElementsByClassName('goods-item'),
	buttons 		 = document.getElementsByTagName('button')[1],
	chooseItem 	 	 = document.querySelector('div.main-functions input.choose-item'),
	timeValue 		 = document.querySelector('div.main-functions input.time-value'),
	countBudgetValue = document.querySelector('div.main-functions input.count-budget-value'),
	employersItems 	 = document.querySelectorAll('div.main-functions input.hire-employers-item'),
	budgetVal 		 = document.getElementsByClassName('budget-value')[0],
	items 			 = document.getElementsByClassName('items-value')[0],
	employersVal 	 = document.getElementsByClassName('employers-value')[0],
	discount 		 = document.getElementsByClassName('discount-value')[0],
	isOpen 		     = document.getElementsByClassName('isopen-value')[0],
	shopName 		 = document.getElementsByClassName('name-value')[0],
	goodsBtn         = document.querySelector('.goods-item-btn'),
	goodsVal 		 = document.querySelector('.goods-value'),
	countBudg 		 = document.querySelector('.count-budget-btn'),
	hireEmp 		 = document.querySelector('.hire-employers-btn'),
	btnYes      	 = document.getElementById('btnYes'), 
	btnNo      		 = document.getElementById('btnNo'); 


var money;

var mainList = {
	budget: money,
	marketName: shopName,
	shopGoods: [],
	employers: {},
	open: false,
	discount: true   
	}	

// Вставляем значение бюджета 
btn.addEventListener('click', () => {
	money = prompt('Ваш бюджет ?', '');

	while (isNaN(money) || money == '' || money == null) {
		money = prompt('Ваш бюджет ?', '');
	}
	budgetVal.textContent = money;

	shopName.textContent = prompt('Название вашего магазина ?', '');;
});

// Вставляем значения категорий товаров 
goodsBtn.addEventListener('click', () => {
	for (var i = 0; i < inputValue.length; i++) {
		let a = inputValue[i].value;

			if ((typeof(a)) === 'string' && (typeof(a)) != null && a.length < 50)
			{
				mainList.shopGoods[i] = a;
				goodsVal.textContent = mainList.shopGoods;			} 
			else  
			{
				i--;
			}
	}
	console.log(mainList.shopGoods);
});

// Вставляем значнеия видов продуктов  
chooseItem.addEventListener('change', () => {
	let itemsV = chooseItem.value;
		if (isNaN(itemsV) && items != '') {
			mainList.shopItems = itemsV.split(',');
			mainList.shopItems.sort();	
		}
	items.textContent = mainList.shopItems;
});

// Время работы магазина 
timeValue.addEventListener('change', (time) => {
	time = timeValue.value;
	if 	(time >= 8 && time <= 20){
			mainList.open = true;
			isOpen.style.background = 'green';
		} else {
			mainList.open = false;
			isOpen.style.background = 'red';
		}
});

// Дневной бюджет 
countBudg.addEventListener('click', () => { 
	countBudgetValue.value = parseInt(money) / 30;

});

hireEmp.addEventListener('click', () => {
	for (let i = 0; i < employersItems.length; i++) {
		let name = employersItems[i].value;
		mainList.employers[i] = name;
		employersVal.textContent += mainList.employers[i] + ', ';
	}
});

// Блокируем ввод бюджета вручную 
countBudgetValue.readOnly = true;

// Пишем систему скидок

btnYes.addEventListener('click', () => {
	mainList.discount = true;
	discount.style.background = 'green';

});
btnNo.addEventListener('click', () => {
	mainList.discount = false;
	discount.style.background = 'red';
});



