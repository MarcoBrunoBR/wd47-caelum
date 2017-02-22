(function () {
  let $sync = $('#sync')

  $sync.click(function () {
    let $cartoes = $('.cartao')
    let cartoes = []

    $cartoes.each(function () {
      let cartao = {}

      cartao.conteudo = $(this).find('.cartao-conteudo').text()

      cartoes.push(cartao)
    })

    let mural = {
      usuario : 'marco@gmail.com',
      cartoes : cartoes
    }

    $sync.removeClass('botaoSync--sincronizado')
    $sync.addClass('botaoSync--esperando')

    $.ajax({
      url : 'https://ceep.herokuapp.com/cartoes/salvar',
      method : 'POST',
      data : mural,
      success : function (res) {
        $sync.addClass('botaoSync--sincronizado')
        console.log(`${res.quantidade} cartões salvos em ${res.usuario}`)
      },
      error : function () {
        $sync.addClass('botaoSync--deuRuim')
        console.log('Não foi possível salvar o mural')
      },
      complete : function () {
        $sync.removeClass('botaoSync--esperando')
      }
    })
  })
})();
