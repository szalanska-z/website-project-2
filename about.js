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