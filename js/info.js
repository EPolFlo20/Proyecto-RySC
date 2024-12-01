function revelarPagina(indice) {
    const bloques = document.querySelectorAll('.bloque_tema');

    bloques.forEach((bloque, i) => {
        if (i === indice) {
            bloque.classList.remove('info_hidden');
            bloque.classList.add('info_visible');
        } else {
            bloque.classList.remove('info_visible');
            bloque.classList.add('info_hidden');
        }
    });
}