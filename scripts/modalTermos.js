function abrirModal() {
    document.getElementById('modal-overlay').classList.add('ativo');
}

function fecharModal(event) {
    const overlay = document.getElementById('modal-overlay');
    if (!event || event.target === overlay || event.target.classList.contains('fechar')) {
        overlay.classList.remove('ativo');
    }
}
function aceitarProposta() {
    alert("Você aceitou a proposta. Entraremos em contato em breve!");
    fecharModal();
}

function recusarProposta() {
    alert("Você recusou a proposta.");
    fecharModal();
}