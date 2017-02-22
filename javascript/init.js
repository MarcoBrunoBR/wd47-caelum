'use strict';

const USUARIO = 'marco@gmail.com';

(function () {
  $.getJSON('http://ceep.herokuapp.com/cartoes/carregar?callback=?', {usuario : USUARIO}, function (res) {
    console.log(`${res.cartoes.length} carregados em ${res.usuario}`);

    res.cartoes.map(function (cartao) {
      let card = new Cartao(cartao.conteudo)

      document.querySelector('.mural').innerHTML += card.novo(document.querySelectorAll('.cartao'))
    })
  })
})()
