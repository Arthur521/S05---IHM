function criarQuadros(jsonData) {
    const hoje = "ter";
    const container = document.getElementById("schedule-container");
    container.innerHTML = ""; // Limpa o container antes de adicionar novos elementos

    const aulasDia = jsonData.filter(a => a.data === hoje);

    aulasDia.forEach(a => {
        const quadro = document.createElement("div");
        quadro.classList.add("quadro");
        if (a.prova_alert) {
            quadro.classList.add("alerta");
        }

        let provaDisplay = a.prova_alert ? '' : 'display: none;';

        let notaClasse = "nota-baixa";
        if (a.nota >= 8) {
            notaClasse = "nota-alta";
        } else if (a.nota > 6) {
            notaClasse = "nota-media";
        }

        quadro.innerHTML = `
            <div class="comp-aula">
                <div class="lable-prova p_lable" style="${provaDisplay}">PROVA: <b>${a.prova}</b></div>
                <div class="titulo_aula">${a.disciplina}</div>
                <p class="p">Local e Horário: <b>${a.local} - ${a.horario}</b></p>
                <div class="lables">
                    <div class="lable-frequencia p_lable">FALTAS: <b>${a.frequencia}</b></div>
                    <div class="lable-nota p_lable ${notaClasse}">CR: <b>${a.nota}</b></div>
                </div>
            </div>
        `;

        container.appendChild(quadro);
    });
}

const dados = [
    {
        "id": 1,
        "disciplina": "S05 - Interface Homem-máquina",
        "data": "ter",
        "horario": "10:00",
        "local": "P1-S17",
        "prova_alert": false,
        "prova": "12/05",
        "frequencia": "10/25",
        "nota": "9"
    },
    {
        "id": 2,
        "disciplina": "E01 - Circuitos Elétricos em Corrente Contínua",
        "data": "ter",
        "horario": "10:00",
        "local": "P1-S17",
        "prova_alert": true,
        "prova": "12/05",
        "frequencia": "10/25",
        "nota": "5"
    },
    {
        "id": 3,
        "disciplina": "M02 - Álgebra e Geometria Analítica",
        "data": "ter",
        "horario": "10:00",
        "local": "P1-S17",
        "prova_alert": true,
        "prova": "12/05",
        "frequencia": "10/25",
        "nota": "7"
    }
];

window.onload = function() {
    criarQuadros(dados);
};
