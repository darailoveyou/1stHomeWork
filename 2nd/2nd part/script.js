// Первая часть 

var week = new Array(7);
	week[0] = 'Воскресенье';
	week[1] = 'Понедельник';
	week[2] = 'Вторник';
	week[3] = 'Среда';
	week[4] = 'Четверг';
	week[5] = 'Пятница';
	week[6] = 'Суббота';

// Получаем сегодняшнюю дату из массива
var day = new Date();
var todayIs = week[day.getDay()];

// Условия 
for (var i = 0; i < week.length; i++) {
	
	if (week[i] === 'Воскресенье' || week[i] === 'Суббота') {
		document.write(week[i].bold() + '</br>');
	} else if (week[i] === todayIs) {
		document.write('<em>' + week[i] + '</em>' + '</br>');
	} else {
		document.write(week[i] + '</br>');
	}

};

// Вторая часть 

var arr = ['34567', '565455', '7998695', '567376', '33567', '7785656', '565789'];
var newArr =[];

for (let i = 0; i < arr.length; i++) {
	let sym = arr[i].charAt(0);
	newArr.push(sym);

	if (newArr[i].match(/3/i) || newArr[i].match(/7/i)) {
		console.log(arr[i]);
	}
};


