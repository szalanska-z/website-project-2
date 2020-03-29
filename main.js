const iconBurger = document.querySelector('.fa-bars');
const nav = document.querySelector('nav.burger');
const navHeight = nav.scrollHeight;
const divMove = document.querySelector('div.move');


menuBurger = function () {
	console.log('ok');
	nav.classList.toggle('active');
	if (nav.classList.contains('active')) {
		divMove.style.top = navHeight + 'px';
	} else {
		divMove.style.top = 0;
	}
}


iconBurger.addEventListener('click', menuBurger)



const divArrow = document.querySelector('div.scroll-up');

window.addEventListener('scroll', function () {
	if (window.scrollY > 150) {
		divArrow.classList.add('active');
	} else {
		divArrow.classList.remove('active');
	}
})

divArrow.addEventListener('click', function () {
	window.scrollTo({
		top: 0,
		behavior: 'smooth'
	})

})