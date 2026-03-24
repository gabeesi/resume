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

const modal = document.getElementById("imageModal");
const modalImg = document.getElementById("modalImg");
const closeBtn = document.querySelector(".close");

document.querySelectorAll(".carrossel").forEach(carousel => {

    const modal = document.getElementById("imageModal");
    const modalImg = document.getElementById("modalImg");

    carousel.addEventListener("click", () => {
        const activeImg = carousel.querySelector(".carousel-img.active");
        
        if (activeImg) {
            modal.style.display = "block";
            modalImg.src = activeImg.src;
        }
    });

});

closeBtn.addEventListener("click", () => {
        modal.style.display = "none";
    });

    modal.addEventListener("click", (e) => {
        if (e.target === modal) {
            modal.style.display = "none";
        }
    });

