'use strict';
//IIFE - Immediately-Invoked Function Expression,
(function() {
  var $mural = document.querySelector('.mural')
  var $novoCartao = document.querySelector('.novoCartao')
  var $novoCartaoSalvar = document.querySelector('.novoCartao-salvar')
  var $novoCartaoConteudo = document.querySelector('.novoCartao-conteudo')

  $novoCartaoSalvar.addEventListener('click', function (event) {
    if ($novoCartaoConteudo.value == '' && !document.querySelector('.error')) {
      var $error = document.createElement('span')
      $error.classList.add('error')
      $error.textContent = 'Preecha o campo acima'

      $novoCartao.insertBefore($error, $novoCartaoSalvar)

      setTimeout(function () {
        $error.classList.add('error--aparece')
      }, 100)

      event.preventDefault()
    }
  })

  $novoCartaoConteudo.addEventListener('input', function() {
    var $error = document.querySelector('.error')
    if ($error) {
      $error.classList.add('error--some')

      $error.addEventListener('transitionend', () => {
        $error.remove()
      })
    }
  })

  $novoCartao.addEventListener('submit', function(event) {
    event.preventDefault()
    var $cartoes = document.querySelectorAll('.cartao')
    var conteudo = $novoCartaoConteudo.value

    var cartao = new Cartao(conteudo)

    $mural.innerHTML += cartao.novo($cartoes)
  })

  $mural.addEventListener('click', function(event) {
    var $origem = event.target

    if ($origem.classList.contains('opcoesDoCartao-remove')) {
      var dataRefDoBotao = $origem.getAttribute('data-ref')
      var $cartao = document.querySelector(`#cartao_${dataRefDoBotao}`)

      $cartao.classList.add('cartao--some')
      $cartao.addEventListener('transitionend', () => {
        $cartao.remove()
      })
    }
  })
})()
