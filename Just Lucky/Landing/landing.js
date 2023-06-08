// Wait for the page to fully load
// window.addEventListener("load", function () {
//     // Add the "loaded" class to the body to trigger the unveiling animation
//     document.body.classList.add("loaded");
// });

const page = document.body;
const content = document.getElementById('preloader');

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
