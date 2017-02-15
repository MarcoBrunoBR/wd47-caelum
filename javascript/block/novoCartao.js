var $novoCartao = document.querySelector('.novoCartao')
var $novoCartaoSalvar = document.querySelector('.novoCartao-salvar')
var $novoCartaoConteudo = document.querySelector('.novoCartao-conteudo')

$novoCartaoSalvar.addEventListener('click', function (event) {
  if ($novoCartaoConteudo.value == '' && !document.querySelector('.error')) {
    var $error = document.createElement('span')
    $error.classList.add('error')
    $error.textContent = 'Preecha o campo acima'

    $novoCartao.insertBefore($error, $novoCartaoSalvar)
  }

  event.preventDefault()
})
