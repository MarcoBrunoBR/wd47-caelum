'use strict';

(function () {
  var $mudaLayout = document.querySelector('#mudaLayout')
  var $mural = document.querySelector('.mural')

  $mudaLayout.addEventListener('click', function() {

    $mural.classList.toggle('mural--linhas')

    if ($mural.classList.contains('mural--linhas')) {
      $mudaLayout.textContent = 'Colunas'
    } else {
      $mudaLayout.textContent = 'Linhas'
    }
  })
})()
