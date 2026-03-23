document.addEventListener("DOMContentLoaded", () => {

document.querySelectorAll(".carrossel").forEach(carousel => { 
    
    const images = carousel.querySelectorAll(".carousel-img");
    const btnLeft = carousel.querySelector(".carousel-btn.left");
    const btnRight = carousel.querySelector(".carousel-btn.right");
    
    let index = 0;

    function showImage(i) {
        images.forEach(img => img.classList.remove("active"));
        images[i].classList.add("active");
    }

    if (btnLeft && btnRight) {
        btnRight.addEventListener("click", () => {
            index = (index + 1) % images.length;
            showImage(index);
        });

        btnLeft.addEventListener("click", () => {
            index = (index - 1 + images.length) % images.length;
            showImage(index);
        });
    }

    setInterval(() => {
        index = (index + 1) % images.length;
        showImage(index);
    }, 3000);

});

});