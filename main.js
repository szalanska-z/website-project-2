const iconBurger = document.querySelector('.fa-bars');
const nav = document.querySelector('nav.burger');


menuBurger = function () {
	console.log('ok');
	nav.classList.toggle('active');
}




iconBurger.addEventListener('click', menuBurger)