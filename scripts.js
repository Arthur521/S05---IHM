// objeto do usuário
const usuario = { nome: "Raphael", matricula: "123456", pendencia: false, acessibilidade: true, dataHora: 0 };

// lista objetos de armários
const armarios = [
  { id: 1, formato: "padrao", status: true, acessivel: false, dataHora: 0 },
  { id: 2, formato: "padrao", status: true, acessivel: false, dataHora: 0 },
  { id: 3, formato: "padrao", status: true, acessivel: false, dataHora: 0 },
  { id: 4, formato: "padrao", status: false, acessivel: true, dataHora: 0 },
  { id: 5, formato: "padrao", status: false, acessivel: true, dataHora: 0 },
  { id: 6, formato: "duplo", status: true, acessivel: true, dataHora: 0 },
  { id: 7, formato: "duplo", status: false, acessivel: true, dataHora: 0 },
  { id: 8, formato: "duplo", status: false, acessivel: true, dataHora: 0 },  
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

  armarioSorteado.dataHora = Date.now();
  
  // Depois localizamos o armário emprestado na lista de armarios e mudamos o status do armário.
  let armarioEmprestado = armarios.find(armario => armario.id === armarioSorteado.id).status = false;
  
  // Finalmente, mudamos a pendencia do usuário para verdadeira.
  usuario.pendencia = true;
  
  // Impmimimos uma mensagem de reserva para o usuário.
  document.getElementById("resultado").innerText = `Olá, ${usuario.nome}! O armário ${armarioSorteado.id} foi reservado com sucesso, agora as ${armarioSorteado.dataHora}!`;

  console.log(usuario);
  console.log(armarios);

}