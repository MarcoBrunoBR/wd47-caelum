var $botaoesRemove = document.querySelectorAll('.opcoesDoCartao-remove')

for (var index = 0; index < $botaoesRemove.length; index++) {
  $botaoesRemove[index].addEventListener('click', function () {
    var $cartao = document.querySelector('#cartao_' + this.getAttribute('data-ref'))

    $cartao.classList.add('cartao--some')
    $cartao.addEventListener('transitionend', () => {
      $cartao.remove()
    })
  })
}
