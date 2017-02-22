(function (doc) {
  let $busca = doc.querySelector('#busca')

  $busca.addEventListener('input', function() {
    let conteudoBusca = this.value
    let $cartoes = doc.querySelectorAll('.cartao')

    removeClassCartaoSome($cartoes)

    $cartoes.forEach(function ($cartao) {
      let conteudoCartao = $cartao.querySelector('.cartao-conteudo').textContent

      if (!conteudoCartao.match(new RegExp(conteudoBusca, 'i'))) {
        $cartao.classList.add('cartao--some')

        $cartao.addEventListener('transitionend', function() {
          $cartao.classList.add('hidden')
        })
      }
    })
  })

  function removeClassCartaoSome($cartoes) {
    $cartoes.forEach(function ($cartao) {
      $cartao.classList.remove('cartao--some')
      $cartao.classList.remove('hidden')
    })
  }
})(document)
