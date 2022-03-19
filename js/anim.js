const body = document.querySelector('body')

//SCROLL ANIM

var isScrolling = false;

window.addEventListener("scroll",  throttleScroll, false);
throttleScroll() ;

function throttleScroll(e) {
	if (isScrolling == false) {
		window.requestAnimationFrame(function () {
			scrolling(e);
			isScrolling = false;
		});
	}
	isScrolling = true;
}
let fadeArr = document.querySelectorAll('.fade');

function scrolling(e) {
	setTimeout(() => {
// fade
		for (var i = 0; i < fadeArr.length; i++) {
			var fadeItem = fadeArr[i];
			if (isPartiallyVisible(fadeItem)) {
				fadeItem.classList.add("fade-on");
			} else { }
		}
	},300)
}

function isPartiallyVisible(el) {
	var elementBoundary = el.getBoundingClientRect();

	var top = elementBoundary.top;
	var bottom = elementBoundary.bottom;
	var height = elementBoundary.height;

	return ((top + height >= 0) && (height + window.innerHeight >= bottom));
}
function isFullyVisible(el) {
	var elementBoundary = el.getBoundingClientRect();

	var top = elementBoundary.top;
	var bottom = elementBoundary.bottom;

	return ((top >= 0) && (bottom <= window.innerHeight + 150));
}

//Smooth scroll

function scrollTo(element) {
	window.scroll({
		left: 0,
		top: element.offsetTop - 50,
		behavior: 'smooth'
	})
}

var btnScroll = document.querySelector('.intro__navigate');
var project = document.querySelector('.project');

btnScroll.addEventListener('click', () => {
	scrollTo(project);
	body.classList.add('hidden-off')
})
