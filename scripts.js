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
];

// função para reserva do armário, incluindo as regras.
function reservarArmario() {

  // obter tipo de armário selecionado pelo usuário no html.
  let tipoSelecionado = document.getElementById("tipoArmario").value;
  
  // na lista, filtrar apenas os armários que estão disponíveis e que são acessiveis ao usuário.
  let armariosDisponiveis = armarios.filter(a => a.formato === tipoSelecionado && a.status === true && usuario.acessibilidade === a.acessivel);

  // caso não exista armário disponível, retorna para o usuário mensagem.
  if (armariosDisponiveis.length === 0) {
    document.getElementById("resultado").innerText = `Olá, ${usuario.nome}! Nenhum armário disponível para o tipo selecionado.`;
    return;
  }
  
  // Caso exista armário(s) disponíveil, seguimos sorteando uma opção. 
  let armarioSorteado = armariosDisponiveis[Math.floor(Math.random() * armariosDisponiveis.length)];
  
  //Data e hora atual são armazenadas
  armarioSorteado.dataHora = Date.now();
  
  //Data e hora de entrega é calculada somando 86400000 milisegundos a dataHora do armario sorteado
  armarioSorteado.dataHoraEntrega = armarioSorteado.dataHora + 86400000;

  // Depois localizamos o armário emprestado na lista de armarios e mudamos o status do armário.
  let armarioEmprestado = armarios.find(armario => armario.id === armarioSorteado.id).status = false;

  // Finalmente, mudamos a pendencia do usuário para verdadeira.
  usuario.pendencia = true;
  
  // Impmimimos uma mensagem de reserva para o usuário.
  document.getElementById("resultado").innerText = `Olá, ${usuario.nome}! O armário ${armarioSorteado.id} foi reservado com sucesso, agora às ${new Date(armarioSorteado.dataHora).toLocaleString("pt-BR")}. Entregue a chave até ${new Date(armarioSorteado.dataHoraEntrega).toLocaleString("pt-BR")}`;

  console.log(usuario);
  console.log(armarios);
}
