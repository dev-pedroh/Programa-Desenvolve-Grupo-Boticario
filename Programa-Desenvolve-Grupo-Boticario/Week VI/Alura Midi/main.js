const listaTeclas = document.querySelectorAll('.tecla')

const tocaSom = function (idElementoAudio) {
    document.querySelector(idElementoAudio).play();
}

for (let contador = 0; contador < listaTeclas.length; contador++ ) {

    const tecla = listaTeclas[contador];
    const instrumento = tecla.classList[1];
    const idAudio = `#som_${instrumento}`;

    tecla.onclick = function () {
        tocaSom(idAudio);
    }

    tecla.onkeydown = function (evento) {
        if (evento.code === 'Space' || evento.code === 'Enter') {
            tecla.classList.add('ativa');
        }
    }

    tecla.onkeyup = function () {
        tecla.classList.remove('ativa');
    }
    
}