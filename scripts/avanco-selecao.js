// Dados simulados das vagas e etapas da seleção
// status: 'concluido', 'atual', 'pendente'
const vagas = [
    {
        nome: "Desenvolvedor Front-end",
        subtitulo: "Empresa: Solutions Tech",
        etapas: [
            { nome: "Inicio", status: "concluido" },
            { nome: "Inscrição", status: "concluido" },
            { nome: "Avaliação", status: "concluido" },
            { nome: "Entrevista", status: "atual" },
            { nome: "Ofertar", status: "pendente" }
        ]
    },
    {
        nome: "Gestor de Projetos",
        subtitulo: "Empresa: Solutions Tech",
        etapas: [
            { nome: "Inicio", status: "concluido" },
            { nome: "Inscrição", status: "concluido" },
            { nome: "Avaliação", status: "pendente" },
            { nome: "Entrevista", status: "pendente" },
            { nome: "Ofertar", status: "pendente" }
        ]
    },
    {
        nome: "Analista de Dados",
        subtitulo: "Empresa: Solutions Tech",
        etapas: [
            { nome: "Inicio", status: "concluido" },
            { nome: "Inscrição", status: "concluido" },
            { nome: "Avaliação", status: "concluido" },
            { nome: "Entrevista", status: "concluido" },
            { nome: "Ofertar", status: "atual" }
        ]
    }
];

// Função para criar o gráfico SVG para uma vaga
function criarGrafo(vaga) {
    const svgNS = "http://www.w3.org/2000/svg";
    const largura = 320;
    const altura = 80;
    const raio = 15;
    const espacamento = (largura - 2 * raio) / (vaga.etapas.length - 1);

    const svg = document.createElementNS(svgNS, "svg");
    svg.setAttribute("width", largura);
    svg.setAttribute("height", altura);

    // Criar linhas entre os círculos
    for (let i = 0; i < vaga.etapas.length - 1; i++) {
        const linha = document.createElementNS(svgNS, "line");
        linha.setAttribute("x1", raio + i * espacamento);
        linha.setAttribute("y1", altura / 2);
        linha.setAttribute("x2", raio + (i + 1) * espacamento);
        linha.setAttribute("y2", altura / 2);

        // Se as duas etapas forem concluídas ou atual, a linha fica verde
        const statusAtual = vaga.etapas[i].status;
        const statusProx = vaga.etapas[i + 1].status;
        if ((statusAtual === "concluido" || statusAtual === "atual") &&
            (statusProx === "concluido" || statusProx === "atual")) {
            linha.classList.add("linha-concluida");
        } else {
            linha.classList.add("linha");
        }

        svg.appendChild(linha);
    }

    // Criar círculos e labels
    vaga.etapas.forEach((etapa, idx) => {
        const cx = raio + idx * espacamento;
        const cy = altura / 2;

        const circulo = document.createElementNS(svgNS, "circle");
        circulo.setAttribute("cx", cx);
        circulo.setAttribute("cy", cy);
        circulo.setAttribute("r", raio);
        switch (etapa.status) {
            case "concluido":
                circulo.classList.add("circulo-concluido");
                break;
            case "atual":
                circulo.classList.add("circulo-atual");
                break;
            case "pendente":
            default:
                circulo.classList.add("circulo-pendente");
                break;
        }
        svg.appendChild(circulo);

        // Texto da etapa
        const texto = document.createElementNS(svgNS, "text");
        texto.setAttribute("x", cx);
        texto.setAttribute("y", cy + raio + 15);
        texto.setAttribute("class", "etapa-label");
        texto.textContent = etapa.nome;
        
        svg.appendChild(texto);
    });

    return svg;
}
document.addEventListener("DOMContentLoaded", () => {
    const container = document.getElementById("grafo-container");
    vagas.forEach(vaga => {
        const divVaga = document.createElement("div");
        divVaga.classList.add("vaga-grafo");

        const titulo = document.createElement("div");
        titulo.classList.add("vaga-titulo");
        titulo.textContent = vaga.nome;

        const subtitulo = document.createElement("div");
        subtitulo.classList.add("vaga-subtitulo");
        subtitulo.textContent = vaga.subtitulo;

        const grafico = criarGrafo(vaga);

        // === Criação do botão com base na etapa atual ===
        const etapaAtual = vaga.etapas.find(etapa => etapa.status === "atual");
        const divAcoes = document.createElement("div");
        divAcoes.classList.add("vaga-acoes");

        if (etapaAtual?.nome === "Entrevista") {
            const botao = document.createElement("button");
            botao.className = "botao-estagios";
            botao.textContent = "Aceitar Entrevista";
            botao.onclick = () => {
                window.location.href = "https://api.whatsapp.com/send?phone=5562985486227&text=Ol%C3%A1%2C%20fui%20aprovado%20na%20sele%C3%A7%C3%A3o%20de%20curr%C3%ADculos%20e%20gostaria%20de%20marcar%20um%20hor%C3%A1rio%20para%20entrevista%20na%20vaga%20de%20est%C3%A1gio";
            };
            divAcoes.appendChild(botao);
        } else if (etapaAtual?.nome === "Ofertar") {
            const botao = document.createElement("button");
            botao.className = "botao-estagios";
            botao.textContent = "Termos da candidatura no Dashboard";
            botao.onclick = () => {
                window.location.href = "index.html";
            };
            divAcoes.appendChild(botao);
        }

        // === Adiciona os elementos ao container da vaga ===
        divVaga.appendChild(titulo);
        divVaga.appendChild(subtitulo);
        divVaga.appendChild(grafico);
        divVaga.appendChild(divAcoes);

        container.appendChild(divVaga);
    });
});
