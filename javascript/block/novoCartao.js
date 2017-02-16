var $novoCartao = document.querySelector('.novoCartao')
var $novoCartaoSalvar = document.querySelector('.novoCartao-salvar')
var $novoCartaoConteudo = document.querySelector('.novoCartao-conteudo')

$novoCartaoSalvar.addEventListener('click', function (event) {
  if ($novoCartaoConteudo.value == '' && !document.querySelector('.error')) {
    var $error = document.createElement('span')
    $error.classList.add('error')
    $error.textContent = 'Preecha o campo acima'

    $novoCartao.insertBefore($error, $novoCartaoSalvar)

    window.requestAnimationFrame(function() {
      setTimeout(function () {
        $error.classList.add('error--aparece')
      }, 100)
    })
  }

  event.preventDefault()
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
