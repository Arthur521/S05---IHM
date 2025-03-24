document.addEventListener("DOMContentLoaded", function () {
    const noticiasContainer = document.querySelector("#carousel-container .carousel");
    let currentIndex = 0;
    let isDragging = false;
    let startX = 0;
    let interval;

    if (window.eventData) {
        noticiasContainer.innerHTML = ""; 
        window.eventData.forEach((event, index) => {
            const slide = document.createElement("div");
            slide.classList.add("card");

            slide.innerHTML = `
                <img src="${event.image}" alt="${event.title}">
                <div class="info">
                    <h4>${event.title}</h4>
                    <p>${event.description}</p>
                    <p class="events">
                        <span class="material-symbols-outlined icon">event</span> ${event.date} às ${event.time} 
                        <span class="material-symbols-outlined icon">pin_drop</span> ${event.location}
                    </p>
                </div>
            `;

            if (index === 0) slide.classList.add("active"); 

            noticiasContainer.appendChild(slide);
        });

        const slides = document.querySelectorAll(".card");

        function showSlide(index) {
            slides[currentIndex].classList.remove("active");
            currentIndex = (index + slides.length) % slides.length;
            slides[currentIndex].classList.add("active");
        }

        function showNextSlide() {
            showSlide(currentIndex + 1);
        }

        function showPrevSlide() {
            showSlide(currentIndex - 1);
        }

        function startAutoSlide() {
            interval = setInterval(showNextSlide, 5000);
        }

        function stopAutoSlide() {
            clearInterval(interval);
        }

        startAutoSlide();

        const prevButton = document.createElement("button");
        prevButton.classList.add("prev-btn");
        prevButton.innerHTML = "&#10094;"; 
        prevButton.addEventListener("click", showPrevSlide);

        const nextButton = document.createElement("button");
        nextButton.classList.add("next-btn");
        nextButton.innerHTML = "&#10095;"; 
        nextButton.addEventListener("click", showNextSlide);

        noticiasContainer.appendChild(prevButton);
        noticiasContainer.appendChild(nextButton);

        noticiasContainer.addEventListener("mouseenter", stopAutoSlide);
        noticiasContainer.addEventListener("mouseleave", startAutoSlide);

        noticiasContainer.addEventListener("touchstart", (e) => {
            isDragging = true;
            startX = e.touches[0].clientX;
        });

        noticiasContainer.addEventListener("touchmove", (e) => {
            if (!isDragging) return;
            const moveX = e.touches[0].clientX - startX;
        });

        noticiasContainer.addEventListener("touchend", (e) => {
            isDragging = false;
            const moveX = e.changedTouches[0].clientX - startX;

            if (moveX > 50) {
                showPrevSlide();
            } else if (moveX < -50) {
                showNextSlide();
            }
        });
    }
});
