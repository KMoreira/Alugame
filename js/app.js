
let paragrafo = document.querySelector('a');
let index = [1, 2, 3];


function alterarStatus(id) {
    let gameClicado = document.getElementById(`game-${id}`);
    let imagem = gameClicado.querySelector('.dashboard__item__img');
    let button = gameClicado.querySelector('.dashboard_item_button');
    let nomeJogo = gameClicado.querySelector('.dashboard__item__name');

    alert(nomeJogo.textContent);    
}

