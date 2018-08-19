var li 		= document.getElementsByTagName('li'),
	ul 		= document.getElementsByTagName('ul'),
	newElem = document.createElement('li'),
	title 	= document.getElementById('title'),
	column 	= document.getElementsByClassName('column'),
	adv 	= document.getElementsByClassName('adv'),
	prompT  = document.getElementById('prompt');

// Меняем местами
ul[0].insertBefore(li[2], li[1]);

// Добавляем 5 пункт 
newElem.classList.add('menu-item');
ul[0].appendChild(newElem);
newElem.textContent = 'Пятый пункт';

// Меняем bg
document.body.style.background = 'url(img/apple_true.jpg)';

// Заменяем текст заголовка 
title.textContent = 'Мы продаем только подлинную технику Apple';

// Удаляем рекламу 
column[1].removeChild(adv[0]);

// Спрашиваем у пользователя отношение к технике Apple 
var question = prompt('Ваше отношение к технике apple ?', '');
prompT.textContent = question;





























