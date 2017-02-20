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
  var $cartoes = document.querySelectorAll('.cartao')
  var id = 1
  var conteudo = $novoCartaoConteudo.value.trim().replace(/\n/g, ' <br> ')
  var novoConteudo = ''

  var palavras = conteudo.split(' ')

  if ($cartoes.length) {
    id = $cartoes[$cartoes.length - 1].querySelector('.opcoesDoCartao-remove').getAttribute('data-ref') + 1
  }

  palavras.forEach(function(item, index) {
    if (item == '<br>') {
      novoConteudo += item.replace(/^\*\*/, '<b>')
                          .replace(/\*\*$/, '</b>')
                          .replace(/^\*/, '<em>')
                          .replace(/\*$/, '</em>')

    } else {
      novoConteudo += item.replace(/^\*\*/, '<b>')
                                          .replace(/\*\*$/, '</b>')
                                          .replace(/^\*/, '<em>')
                                          .replace(/\*$/, '</em>') + ' '
    }

  })

  var novoCartao = criaCartao(id, novoConteudo);

  $mural.innerHTML += novoCartao

  event.preventDefault()
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
