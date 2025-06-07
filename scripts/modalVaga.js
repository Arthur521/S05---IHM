function verDetalhes(titulo, empresa, local, bolsa, descricao) {
    const detalhesHTML = `
        <div class="vaga-linha"><span class="material-symbols-outlined">work</span>
        <div><span class="rotulo">Vaga:</span> <span class="valor">${titulo}</span></div>
        </div>
        <div class="vaga-linha"><span class="material-symbols-outlined">domain</span>
        <div><span class="rotulo">Empresa:</span> <span class="valor">${empresa}</span></div>
        </div>
        <div class="vaga-linha"><span class="material-symbols-outlined">location_on</span>
        <div><span class="rotulo">Local:</span> <span class="valor">${local}</span></div>
        </div>
        <div class="vaga-linha"><span class="material-symbols-outlined">payments</span>
        <div><span class="rotulo">Bolsa:</span> <span class="valor">${bolsa}</span></div>
        </div>
        <div class="vaga-linha"><span class="material-symbols-outlined">description</span>
        <div><span class="rotulo">Descrição:</span> <span class="valor">${descricao}</span></div>
        </div>
    `;

    document.getElementById('vaga-detalhes-texto').innerHTML = detalhesHTML;
    document.getElementById('vaga-modal-overlay').style.display = 'flex';
}

function abrirModal() {
  document.getElementById('vaga-modal-overlay').style.display = 'flex';
}

function fecharModal() {
  document.getElementById('vaga-modal-overlay').style.display = 'none';
}
