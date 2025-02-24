// objeto do usuário
const usuario = { nome: "Raphael", matricula: "123456", pendencia: false, acessibilidade: true, dataHora: 0, dataHoraEntrega: 0 };

// lista objetos de armários
const armarios = [
  { id: 1, formato: "padrao", status: true, acessivel: false, dataHora: 0, dataHoraEntrega: 0 },
  { id: 2, formato: "padrao", status: true, acessivel: false, dataHora: 0, dataHoraEntrega: 0 },
  { id: 3, formato: "padrao", status: true, acessivel: false, dataHora: 0, dataHoraEntrega: 0 },
  { id: 4, formato: "padrao", status: false, acessivel: true, dataHora: 0, dataHoraEntrega: 0 },
  { id: 5, formato: "padrao", status: false, acessivel: true, dataHora: 0, dataHoraEntrega: 0 },
  { id: 6, formato: "duplo", status: true, acessivel: true, dataHora: 0, dataHoraEntrega: 0 },
  { id: 7, formato: "duplo", status: false, acessivel: true, dataHora: 0, dataHoraEntrega: 0 },
  { id: 8, formato: "duplo", status: false, acessivel: true, dataHora: 0, dataHoraEntrega: 0 },  
  { id: 9, formato: "padrao", status: false, acessivel: true, dataHora: 0, dataHoraEntrega: 0 },
];

// função para reserva do armário, incluindo as regras.
function reservarArmario() {
  let tipoSelecionado = document.getElementById("tipoArmario").value;
  
  let armariosDisponiveis = armarios.filter(a => a.formato === tipoSelecionado && a.status === true && usuario.acessibilidade === a.acessivel);
  
  if (armariosDisponiveis.length === 0) {
    document.getElementById("resultado").innerText = `Olá, ${usuario.nome}! Nenhum armário disponível para o tipo selecionado.`;
    return;
  }
  
  let armarioSorteado = armariosDisponiveis[Math.floor(Math.random() * armariosDisponiveis.length)];
  
  armarioSorteado.dataHora = Date.now();
  armarioSorteado.dataHoraEntrega = dataHora + 86400000;
  armarios.find(armario => armario.id === armarioSorteado.id).status = false;
  usuario.pendencia = true;
  
  document.getElementById("resultado").innerText = `Olá, ${usuario.nome}! O armário ${armarioSorteado.id} foi reservado com sucesso, agora às ${new Date(armarioSorteado.dataHora).toLocaleString("pt-BR")}. \nA data e hora de entrega máxima será ${armarioSorteado.dataHoraEntrega}`;

  console.log(usuario);
  console.log(armarios);
}
