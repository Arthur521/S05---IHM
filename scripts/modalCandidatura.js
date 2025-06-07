function candidatarVaga() {
  const nome = document.getElementById("nome").value;
  const curso = document.getElementById("curso").value;
  const periodo = document.getElementById("periodo").value;

  document.getElementById("revisao-nome").value = nome;
  document.getElementById("revisao-curso").value = curso;
  document.getElementById("revisao-periodo").value = periodo;

  document.getElementById("vaga-modal-overlay").style.display = "none";
  document.getElementById("candidatura-modal-overlay").style.display = "flex";
}


function fecharModalCandidatura() {
  document.getElementById("candidatura-modal-overlay").style.display = "none";
}

function enviarCandidatura() {
  const nome = document.getElementById("revisao-nome").value.trim();
  const curso = document.getElementById("revisao-curso").value.trim();
  const periodo = document.getElementById("revisao-periodo").value.trim();
  const carta = document.getElementById("carta-apresentacao").value.trim();
  const curriculo = document.getElementById("curriculo").files[0];
  const arquivos = document.getElementById("outros-arquivos").files;

  let erro = "";

  if (!nome || !curso || !periodo)
    erro += "Preencha todos os dados do aluno.\n";
  
  if (!carta)
    erro += "A carta de apresentação é obrigatória.\n";

  if (!curriculo)
    erro += "Anexe seu currículo em PDF.\n";

  if (erro) {
    alert(erro);
    return;
  }

  // Aqui você pode adicionar lógica de validação/envio
  alert("Candidatura enviada com sucesso!");

  fecharModalCandidatura();
}