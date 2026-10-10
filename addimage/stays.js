
// Find the slider and its navigation buttons

const slider = document.querySelector(".card-slider");

const nextButton = document.querySelector(".next-btn");

const previousButton = document.querySelector(".prev-btn");


// Calculate how far to move the slider

function getScrollAmount() {

    const card = slider.querySelector(".stay-card");

    const sliderStyles = getComputedStyle(slider);

    const gap = parseFloat(sliderStyles.columnGap) || 0;

    return card.getBoundingClientRect().width + gap;

}


// Move to the next card

nextButton.addEventListener("click", function () {

    slider.scrollBy({
        left: getScrollAmount(),
        behavior: "smooth"
    });

});


// Move to the previous card

previousButton.addEventListener("click", function () {

    slider.scrollBy({
        left: -getScrollAmount(),
        behavior: "smooth"
    });

});

