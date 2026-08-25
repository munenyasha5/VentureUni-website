document.getElementById("about-button").addEventListener("click", function() {
    window.location.href = "about.html";
});

document.getElementById("discovertrips-button").addEventListener("click", function() {
    window.location.href = "VENTUREtrips.html";
});
document.getElementById("discovertripstop-button").addEventListener("click", function() {
    window.location.href = "VENTUREtrips.html";
});
const images= [
    "addimage/images/pic5.jpg",
    "addimage/images/pic 4.jpg",
    "addimage/images/pic 1.jpg",
    "addimage/images/ChatGPT Image Aug 24, 2026, 02_18_19 PM.png"
];

let currentImage = 0;

const hero = document.getElementById("hero");

setInterval(() => {

    currentImage++;

    if (currentImage >= images.length) {
        currentImage = 0;
    }

    hero.style.backgroundImage = `url("${images[currentImage]}")`;

}, 5000);