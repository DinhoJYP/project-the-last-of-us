/*
Objetivo - clicando no botão,mostrar a imagem de fundo correspondente

passo1 - Pegar elemento html dos botões

passo2 - identificar clique do usuário no botão

passo3 - desmarcar botão anterior selecionado

passo4 - marcar botão clicado como se estivesse selecionado

passo5 - esconder a img ativa do fundo anterior

passo6 - fazer aparecer a img de fundo correspondente ao botão clicado
*/
//passo1
const botoesCarrosel = document.querySelectorAll('.botao');
const imagens = document.querySelectorAll('.imagem');
//passo2
botoesCarrosel.forEach((botao, indice) => {
    botao.addEventListener('click', () =>{
        //passo3
        desativarBotaoSelecionado();
        //passo4
        selecionarBotaoCarrosel(botao);
        //passo5
        esconderImagemAtiva();
        //passo6
        mostrarImagemDeFundo(indice);
    })
})

function mostrarImagemDeFundo(indice) {
    imagens[indice].classList.add('ativa');
}

function selecionarBotaoCarrosel(botao) {
    botao.classList.add('selecionado');
}

function esconderImagemAtiva() {
    const imagemAtiva = document.querySelector('.ativa');
    imagemAtiva.classList.remove('ativa');
}

function desativarBotaoSelecionado() {
    const botaoSelecionado = document.querySelector('.selecionado');
    botaoSelecionado.classList.remove('selecionado');
}
