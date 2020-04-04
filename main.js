const iconBurger = document.querySelector('.fa-bars');
const nav = document.querySelector('nav.burger');
// const navHeight = nav.scrollHeight;
const divMove = document.querySelector('div.move');
const footer = document.querySelector('footer');

// ---POJAWIANIE SIE I ZNIKANIE MENU HAMBURGER + ZMIANA STOPKI---

menuBurger = function () {

	const navHeight = nav.scrollHeight;
	nav.classList.toggle('active');

	if (nav.classList.contains('active')) {
		divMove.style.top = navHeight + 'px';
		footer.style.bottom = -navHeight + 'px';
	} else {
		divMove.style.top = 0;
		footer.style.bottom = 0;
	}
}

iconBurger.addEventListener('click', menuBurger)


// ---RESETOWANIE PRZY ZMIANACH SZEROKOŚCI STRONY: STOPKA, TOP---

window.addEventListener('resize', function () {
	const navHeight = nav.scrollHeight;
	if (window.innerWidth <= 639 && nav.classList.contains('active')) {
		divMove.style.top = navHeight + 'px';
		footer.style.bottom = -navHeight + 'px';
	} else if (window.innerWidth >= 640 && window.innerWidth < 768 && nav.classList.contains('active')) {
		divMove.style.top = navHeight + 'px';
		footer.style.bottom = -navHeight + 'px';
	} else if (window.innerWidth >= 768) {
		divMove.style.top = 0;
		nav.classList.remove('active');
		footer.style.bottom = 0;
	}
})

// ----PRZEWIJANIE STRONY DO GÓRY ZA POMOCĄ IKONKI-STRZAŁKI----

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

// -----SECTION HOBBY W ABOUT.HTML, ZMIANA ZDJĘĆ----------

const hobbyList = [{
		img: 'img_P2/mountains.jpg',
		txt: 'chodzić po górach'
	},
	{
		img: 'img_P2/dog.jpg',
		txt: 'spędzać czas z moim pieskiem'
	},
	{
		img: 'img_P2/bigben.jpg',
		txt: 'podróżować'
	},
	{
		img: 'img_P2/friends.jpg',
		txt: 'spędzać czas z przyjaciółkami'
	}
]

const hobbyImage = document.querySelector('.slide-img');
const hobbyTxt = document.querySelector('.slide-text');
const arrowLeft = document.querySelector('.fa-angle-left');
const arrowRight = document.querySelector('.fa-angle-right');

const time = 2000
let activeHobby = 0;

const changeHobby = () => {
	activeHobby++;
	if (activeHobby == hobbyList.length) {
		activeHobby = 0;
	}
	hobbyImage.src = hobbyList[activeHobby].img
	hobbyTxt.textContent = hobbyList[activeHobby].txt
}

let hobbySlides = setInterval(changeHobby, time)


const arrowChangeHobby = (e) => {
	if (e.target.classList.contains('fa-angle-left')) {
		activeHobby--;
		if (activeHobby < 0) {
			activeHobby = 3;
		}
	} else if (e.target.classList.contains('fa-angle-right')) {
		activeHobby++;
		if (activeHobby > 3) {
			activeHobby = 0;
		}
	}
	hobbyImage.src = hobbyList[activeHobby].img
	hobbyTxt.textContent = hobbyList[activeHobby].txt
	clearInterval(hobbySlides)
	hobbySlides = setInterval(changeHobby, time)
}








arrowLeft.addEventListener('click', arrowChangeHobby);
arrowRight.addEventListener('click', arrowChangeHobby);