const page = document.body;
const content = document.getElementById('preloader');

const slider = document.querySelectorAll('.banner__section-slider')
const slideNumbers = document.querySelector('.slider__numbers')


function preloader(page) {
    // Create a curtain element.
    // let curtain = document.createElement("div");
    content.style.width = "100%";
    content.style.height = "100%";
    content.style.background = "black";
    content.style.opacity = 0.5;

    // Add the curtain to the document.
    document.body.appendChild(content);

    // Start a timer to unveil the page.
    var timer = setInterval(function () {
        content.style.opacity -= 0.01;
        if (content.style.opacity <= 0) {
            document.body.removeChild(content);
            document.body.appendChild(page);
            clearInterval(timer);
        }
    }, 100);
}


slider.forEach((slide, index) => {
    const slideNumber = document.createElement('span');
    slideNumber.textContent = index + 1
    slideNumber.classList.add('slide-number');
    if (index === 0) {
        slideNumber.classList.add('current-slide')
    }
    slideNumbers.appendChild(slideNumber)
})

const prevSliderButton = document.getElementById('prev'), nextSliderButton = document.getElementById('next')
let currentSlide = document.getElementsByClassName('current-slide')

function nextSlide() {
    currentSlide++
    if (currentSlide >= 10) {
        currentSlide = 0
    }
}

nextSliderButton.addEventListener('click', nextSlide)

function showSlide(slideNumber) {

}