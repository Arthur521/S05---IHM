
window.addEventListener("load", () => {
  const modal = document.getElementById("modal-overlay");
  const form = document.getElementById("student-form");
  const fecharBtn = document.getElementById("fechar-modal-aluno");

  // Fechar modal ao clicar no botão
  fecharBtn.addEventListener("click", () => {
    modal.style.display = "none";
  });

  // Submissão do formulário
  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const nome = document.getElementById("nome").value.trim();
    const curso = document.getElementById("curso").value.trim();
    const periodo = document.getElementById("periodo").value.trim();
    const arquivo = document.getElementById("curriculo").files[0];

    if (!nome || !curso || !periodo || !arquivo) {
      alert("Por favor, preencha todos os campos e envie o currículo.");
      return;
    }

    alert("Dados enviados com sucesso!\nNome: " + nome + "\nCurso: " + curso);
    modal.style.display = "none";
  });
});
