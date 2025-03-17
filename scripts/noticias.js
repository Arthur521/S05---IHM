document.addEventListener("DOMContentLoaded", function () {
    const noticiasContainer = document.querySelector("#carousel-container .carousel");

    if (window.eventData) {
        noticiasContainer.innerHTML = ""; // Limpa o conteúdo inicial

        window.eventData.forEach(event => {
            const slide = document.createElement("div");
            slide.classList.add("card");

            slide.innerHTML = `
                <img src="${event.image}" alt="${event.title}">
                <div class="info">
                    <h4>${event.title}</h4>
                    <p>${event.description}</p>
                    <p class = "events"><span class="material-symbols-outlined icon">event</span> ${event.date} às ${event.time} <span class="material-symbols-outlined icon">pin_drop</span> ${event.location}</p>
                </div>

            `;

            noticiasContainer.appendChild(slide);
        });

        // Ativa o primeiro slide por padrão
        noticiasContainer.firstElementChild.classList.add("active");
    }
});
