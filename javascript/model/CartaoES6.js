class Cartao {
  constructor(conteudo, $todosOsCartoes) {
    this.id = 1
    this.conteudo = conteudo
  }

  novo($todosOsCartoes) {
    this.criaId($todosOsCartoes)
    this.criaConteudo(this.conteudo)

    return (
      ` <section id="cartao_${this.id}" class="cartao">
        <div class="opcoesDoCartao">
          <button data-ref="${this.id}" class="opcoesDoCartao-remove opcoesDoCartao-opcao">Remove</button>
        </div>
        <p class="cartao-conteudo">${this.conteudo}</p>
      </section> `
    )
  }

  criaId($todosOsCartoes) {
    if ($todosOsCartoes.length) {
      var $botaoDoUltimoCartao = $todosOsCartoes[$todosOsCartoes.length - 1]

      this.id = parseInt($botaoDoUltimoCartao.getAttribute('data-ref')) + 1
    }
  }

  criaConteudo(conteudo) {
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
}
