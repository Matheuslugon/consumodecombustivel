document.addEventListener('DOMContentLoaded', function () {
    // Referências aos elementos
    var modal = document.getElementById('myModal');
    var openModalBtn = document.getElementById('openModalBtn');
    var closeBtn = document.getElementsByClassName('close')[0];

    // Evento de clique para abrir o modal
    openModalBtn.addEventListener('click', function () {
        modal.style.display = 'block';
    });

    // Evento de clique para fechar o modal
    closeBtn.addEventListener('click', function () {
        modal.style.display = 'none';
    });

    // Fechar o modal se o usuário clicar fora da área do modal
    window.addEventListener('click', function (event) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    });
});
