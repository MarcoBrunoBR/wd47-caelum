var $botaoesRemove = document.querySelectorAll('.opcoesDoCartao-remove')

for (var index = 0; index < $botaoesRemove.length; index++) {
  $botaoesRemove[index].addEventListener('click', function () {
    var idDoBotao = this.getAttribute('data-ref')
    var idDoCartao = `#cartao_${idDoBotao}` // "#cartao_" + idDoBotao
    var $cartao = document.querySelector(idDoCartao)

    $cartao.classList.add('cartao--some')
    $cartao.addEventListener('transitionend', () => {
      $cartao.remove()
    })
  })
}
