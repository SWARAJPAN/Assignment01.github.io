//navLINKS HIGHLIGHTS

var section = document.querySelectorAll('section');
var navLi = document.querySelectorAll('nav .navlinks ul li');

window.addEventListener('scroll', () => {
	let current = '';
	section.forEach(section => {
		const sectionTop = section.offsetTop;
		const sectionHeight = section.clientHeight;
		if(pageYOffset >= (sectionTop - sectionHeight / 3)){
			current = section.getAttribute('id');
		}
	})

	navLi.forEach( li => {
		li.classList.remove('active');
		if(li.classList.contains(current)){
			li.classList.add('active');
		}
	})
})

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
	if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
		document.getElementById("head").style.padding = "10px 8% 10px";
		//document.getElementsByClassName("logo").style.fontSize = "15px";
	}
	else {
		document.getElementById("head").style.padding = "40px 8% 40px";
		//document.getElementsByClassName("logo").style.fontSize = "35px";
	}
}
/*IMAGE SLIDER*/

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("slideFade");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

/*MODAL IMAGE*/

document.querySelectorAll('.image-container img').forEach(image => {
	image.onclick = () =>{
		document.querySelector('.popup-image').style.display = 'block';
		document.querySelector('.popup-image img').src = image.getAttribute('src');
	}
	
});
document.querySelector('.popup-image span').onclick = () => {
	document.querySelector('.popup-image').style.display = 'none';
}



