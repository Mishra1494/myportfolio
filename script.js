let slideIndex = 0;

function showSlides() {
    const slides = document.getElementsByClassName('slide');
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}
    slides[slideIndex-1].style.display = 'block';
    setTimeout(showSlides, 5000); // Change image every 2 seconds
}

// function moveSlide(n) {
//     const slides = document.getElementsByClassName('slide');
//     slideIndex += n;
//     if (slideIndex > slides.length) {slideIndex = 1}
//     if (slideIndex < 1) {slideIndex = slides.length}
//     for (let i = 0; i < slides.length; i++) {
//         slides[i].style.display = 'none';
//     }
//     slides[slideIndex-1].style.display = 'block';
// }

document.addEventListener("DOMContentLoaded", function() {
    showSlides();
});
