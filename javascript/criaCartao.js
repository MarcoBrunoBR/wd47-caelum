function criaCartao(id, conteudo) {

  return `
  <section id="cartao_${id}" class="cartao">
    <div class="opcoesDoCartao">
      <button data-ref="${id}" class="opcoesDoCartao-remove opcoesDoCartao-opcao">Remove</button>
    </div>
    <p class="cartao-conteudo">${conteudo}</p>
  </section>
`
}

function criaIdDoNovoCartao(todosOsCartoes) {
  var resposta = 1

  if (todosOsCartoes.length) {
    var $botaoDoUltimoCartao = todosOsCartoes[todosOsCartoes.length - 1].querySelector('.opcoesDoCartao-remove')

    resposta = parseInt($botaoDoUltimoCartao.getAttribute('data-ref')) + 1
  }

  return resposta
}
