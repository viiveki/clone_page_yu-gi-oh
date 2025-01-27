const btnVoltar = document.getElementById("btn-voltar");
const btnAvancar = document.getElementById("btn-avancar");
const cartoes = document.querySelectorAll(".cartao");
let cartaoAtual = 0;

btnVoltar.addEventListener("click", function() {
    if (cartaoAtual === 0) {
        return
    }

    esconderCartaoSelecionado();
    cartaoAtual--;
    cartoes[cartaoAtual].classList.add("selecionado");
});

btnAvancar.addEventListener("click", function() {
    if (cartaoAtual === (cartoes.length-1)) {
        return
    }

    esconderCartaoSelecionado();
    cartaoAtual++;
    cartoes[cartaoAtual].classList.add("selecionado");
});

cartoes.forEach(cartao => {
    cartao.addEventListener("click", function() {
        const cartaVirada = cartao.querySelector(".carta-virada");
        
        cartao.classList.toggle("virar");
        cartaVirada.classList.toggle("mostrar-fundo-carta");

        const descricao = cartao.querySelector(".descricao");
        descricao.classList.toggle("esconder");
    });
});

function esconderCartaoSelecionado() {
    const cartaoSelecionado = document.querySelector(".selecionado");
    cartaoSelecionado.classList.remove("selecionado");
}
