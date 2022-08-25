const menuButton = document.getElementById('menu')


function ativarMenu(){
    var header = document.querySelector('nav')
    var menuActive = document.getElementById('menu-button')
    menuActive.classList.toggle('active')
//  Quando se usa clssList ele adiciona uma class
// Então vc precisa usar #id para normais e Class para quando for ativos

// toggle adiciona se não existir e remove se ja existir
    header.classList.toggle('active')
}

menuButton.addEventListener('click', ativarMenu)
