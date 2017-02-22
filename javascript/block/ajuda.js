'use strict';

(function (doc) {
  let $ajuda = doc.querySelector('#ajuda')

  $ajuda.addEventListener('click', function() {
    let xhr = new Xhr()

    xhr.get({
      url : 'https://ceep.herokuapp.com/cartoes/instrucoes',
      success : function (res) {
        res.instrucoes.map(function (cartao) {
          let card = new Cartao(cartao.conteudo)

          doc.querySelector('.mural').innerHTML += card.novo(doc.querySelectorAll('.cartao'))
        })
      }
    })
  })
})(document)
