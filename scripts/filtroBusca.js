
function filtroBusca() {
    const termoBusca = document.getElementById("filtroBusca").value.toLowerCase();
    const vagas = document.querySelectorAll(".estagio-item");

    vagas.forEach(vaga => {
        const textoVaga = vaga.innerText.toLowerCase();

        if (textoVaga.includes(termoBusca)) {
            vaga.style.display = "block";
        } else {
            vaga.style.display = "none";
        }
    });
}

