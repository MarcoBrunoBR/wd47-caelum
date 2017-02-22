//ES5
function Cartao(conteudo) {
  this.id = 1
  this.conteudo = conteudo
  this.tamanhoDoCartao = 'cartao--textoPequeno'
}

Cartao.prototype.defineTamanhoDoCartao = function() {
  var totalDeLetras = this.conteudo.length - 1
  var qtdLinhas = this.conteudo.split('<br>').length
  var palavras = this.conteudo.split(' ')
  var maiorPalavra = 0

  palavras.forEach((palavra) => {
    //Dentro da arrow functiono this é quem? Window
    if (palavra.length > maiorPalavra) {
      maiorPalavra = palavra.length
    }
  })

  if (maiorPalavra < 9 && qtdLinhas < 5 && totalDeLetras < 55) {
    this.tamanhoDoCartao = 'cartao--textoGrande'
  } else if (maiorPalavra < 12 && qtdLinhas < 6 && totalDeLetras < 75) {
    this.tamanhoDoCartao = 'cartao--textoMedio'
  }
}

Cartao.prototype.novo = function($todosOsCartoes) {
  this.criaId($todosOsCartoes)
  this.criaConteudo(this.conteudo)
  this.defineTamanhoDoCartao()

  return (
  ` <section id="cartao_${this.id}" class="cartao ${this.tamanhoDoCartao}">
      <div class="opcoesDoCartao">
        <button data-ref="${this.id}" class="opcoesDoCartao-remove opcoesDoCartao-opcao">Remove</button>
      </div>
      <p class="cartao-conteudo">${this.conteudo}</p>
    </section> `
  )
}

Cartao.prototype.criaId = function($todosOsCartoes) {
  if ($todosOsCartoes.length) {
    var $botaoDoUltimoCartao = $todosOsCartoes[$todosOsCartoes.length - 1]

    this.id = parseInt($botaoDoUltimoCartao.querySelector('.opcoesDoCartao-remove').getAttribute('data-ref')) + 1
  }
}

Cartao.prototype.criaConteudo = function(conteudo) {
  var conteudo = conteudo.trim().replace(/\n/g, ' <br> ')
  var palavras = conteudo.split(' ')
  var novoConteudo = ''

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

  this.conteudo = novoConteudo
}
