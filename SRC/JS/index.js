/* 
OBJETIVO - quando clicarmos na aba temos que mostrar o conteúdo da aba
que foi clicada pelo usuário e esconder o conteúdo da aba anterior

1º - dar um jeito de pegar o s elementos que representam as abas no HTML

2º - dar uma jeito de indentificar o clique no elemento da aba

3º - quando o usuário clicar, desmarcar a aba selecionada

4º - marca a aba clicada como selecionado

5º - esconder o conteúdo anterior

6º - mostrar o conteúdo da aba selecionada
*/


const abas = document.querySelectorAll(".aba");

abas.forEach(aba => {
    aba.addEventListener("click", function() {
        if(aba.classList.contains("selecionado")){
            return;
        }
        
        selecionarAba(aba)
        mostrarInformacoesDaAba(aba)
    });
});
function selecionarAba(aba){
    const abaSelecionada = document.querySelector(".aba.selecionado");
    abaSelecionada.classList.remove("selecionado")
    aba.classList.add("selecionado")
}

function mostrarInformacoesDaAba(aba){
       const informacaoSelecionada = document.querySelector(".informacao.selecionado");
       informacaoSelecionada.classList.remove("selecionado");

       const idDoElementoDeInformacoesDaAba = `informacao-${aba.id}` 
    
       const informacaoASerMostrada = document.getElementById(idDoElementoDeInformacoesDaAba)
       informacaoASerMostrada.classList.add("selecionado")
}