// ACCORDEON

const accordeonItem = document.querySelectorAll(".info__accordeon-item");

accordeonItem.forEach((currentTab) =>{
	let headPart = currentTab.querySelector(".info__accordeon-head");
	let hiddenPart = currentTab.querySelector(".info__accordeon-hide");

	headPart.addEventListener('click' , (e) =>{
		let hiddenPartHeight = hiddenPart.scrollHeight;
		currentTab.classList.toggle("active");

		currentTab.classList.contains("active") ? hiddenPart.style.maxHeight = hiddenPartHeight + 'px' : hiddenPart.style.maxHeight = null
	})
})

// SWIPER

const swiper = new Swiper('.swiper__main', {
	loop: true,
	autoplay: {
		delay: 4000,
	},
	speed: 900,
	spaceBetween: 70,
	centeredSlides: true,
	breakpoints: {
		320: {
			slidesPerView: 1,
			spaceBetween: 60,
		},
		600: {
			slidesPerView: 1.8
		},
		768: {
			slidesPerView: 2.2
		},
		1024: {
			slidesPerView: 3,
		},
		1640: {
			slidesPerView: 4.6,
		}
	},
});

const swiperBg = new Swiper('.swiper__bg', {
	loop: true,
	centeredSlides: true,
	slidesPerView: 4.6,
	spaceBetween: 70,
	breakpoints: {
		320: {
			slidesPerView: 1,
		},
		600: {
			slidesPerView: 1.8
		},
		768: {
			slidesPerView: 2.2
		},
		1024: {
			slidesPerView: 3,
		},
		1640: {
			slidesPerView: 4.6,
		}
	},
});

swiper.controller.control = swiperBg

const swiperReviews = new Swiper('.reviews__swiper', {
	direction: 'horizontal',
	loop: true,
	autoplay: {
		delay: 4000,
	},
	slidesPerView: 1,

	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},

	scrollbar: {
		el: '.swiper-scrollbar',
	},
});

// BURGER

const burgerBtn = document.querySelector('.burger')
const burgerContent = document.querySelector('.mobile')

burgerBtn.addEventListener('click',function () {
	burgerBtn.classList.toggle('active')
	burgerContent.classList.toggle('active')
	document.querySelector('body').classList.toggle('hidden')
})

//FORM

document.querySelector('.reg__icon').addEventListener('click',function (){
	document.getElementById('#addfile').click()
})

const btnPop = document.querySelectorAll('.btn__target')
const popupContent = document.querySelector('.reg')
const contentExit = document.querySelector('.reg__exit')
const contentOut = document.querySelector('.reg__out')

btnPop.forEach(function (item){
	item.addEventListener('click',function (e){
		e.preventDefault()
		popupContent.classList.add('active')
		document.querySelector('body').classList.add('active')
		contentExit.addEventListener('click',function (e){
			e.preventDefault()
			popupContent.classList.remove('active')
			document.querySelector('body').classList.remove('active')
		})
		contentOut.addEventListener('click',function (){
			popupContent.classList.remove('active')
		})
	})
})

//HEADER
const section = document.querySelectorAll('section')
const header = document.querySelector('.header')


section.forEach(function (item){
	console.log(item);
	window.addEventListener('scroll',function (){
		if(window.scrollY >= item.offsetTop){
			const sectionAttr = item.getAttribute("data-theme")
			if (sectionAttr === "black"){
				header.classList.remove('black')
			}
			if (sectionAttr === "white") {
				header.classList.remove('white')
				header.classList.add('black')
			}
		}
	})

})

