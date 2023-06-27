// const page = document.body
// const content = page.getElementById('preloader');

// Read the contents of the config.json file
const fs = require('fs');
const configData = fs.readFileSync('config.json', 'utf-8');
// Parse the JSON data
const config = JSON.parse(configData);
// Access the API key
const apiKey = config.apiKey;
const apiUrl = 'https://www.themoviedb.org/movie/now-playing'
const urlWithApiKey = `${apiUrl}?api_key=${apiKey}`

// const slider = document.querySelectorAll('.banner__section-slider')
// const slideNumbers = document.querySelector('.slider__numbers')

// /* 
//    preloader functions
//*/
// function preloader(page) {
//     // Create a curtain element.
//     // let curtain = document.createElement("div");
//     content.style.width = "100%";
//     content.style.height = "100%";
//     content.style.background = "black";
//     content.style.opacity = 0.5;

//     // Add the curtain to the document.
//     document.body.appendChild(content);

//     // Start a timer to unveil the page.
//     var timer = setInterval(function () {
//         content.style.opacity -= 0.01;
//         if (content.style.opacity <= 0) {
//             document.body.removeChild(content);
//             document.body.appendChild(page);
//             clearInterval(timer);
//         }
//     }, 100);
// }


/*
    tried making the slider arrows work
*/

// slider.forEach((slide, index) => {
//     const slideNumber = document.createElement('span');
//     slideNumber.textContent = index + 1
//     slideNumber.classList.add('slide-number');
//     if (index === 0) {
//         slideNumber.classList.add('current-slide')
//     }
//     slideNumbers.appendChild(slideNumber)
// })

// const prevSliderButton = document.getElementById('prev'), nextSliderButton = document.getElementById('next')
// let currentSlide = document.getElementsByClassName('current-slide')

// function nextSlide() {
//     currentSlide++
//     if (currentSlide >= 10) {
//         currentSlide = 0
//     }
// }

/*
    adding tmdb integration to the website
*/
fetch(urlWithApiKey)
    .then(response => response.json())
    .then(data => {
        console.log(data)
    })
    .catch(error => {
        console.error("Something is wrong", error)

    })
