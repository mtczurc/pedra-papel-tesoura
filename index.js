var elementos = document.querySelectorAll('.player-options div > img');
var playerOpt = "";
var inimigoOpt = "";

function validarVitoria() {

    let vencedor = document.querySelector('.vencedor');
    //validação papel
    if (playerOpt == "papel") {
        if (inimigoOpt == "papel") {
            //empate
            vencedor.innerHTML = "Empataram";
        }else if (inimigoOpt == "tesoura") {
            //inimigo venceu
            vencedor.innerHTML = "Você perdeu ... Mais sorte na prox vez!";
        }else if (inimigoOpt == "pedra") {
            //player venceu
            vencedor.innerHTML = "Você Venceu ... Parabens!";
        }
    }
    //validação pedra
    if (playerOpt == "pedra") {
        if (inimigoOpt == "pedra") {
            //empate
            vencedor.innerHTML = "Empataram";
        }else if (inimigoOpt == "papel") {
            //inimigo venceu
            vencedor.innerHTML = "Você perdeu ... Mais sorte na prox vez!";
        }else if (inimigoOpt == "tesoura") {
            //player venceu
            vencedor.innerHTML = "Você Venceu ... Parabens!";
        }
    }
    //validação tesoura
    if (playerOpt == "tesoura") {
        if (inimigoOpt == "tesoura") {
            //empate
            vencedor.innerHTML = "Empataram";
        }else if (inimigoOpt == "pedra") {
            //inimigo venceu
            vencedor.innerHTML = "Você perdeu ... Mais sorte na prox vez!";
        }else if (inimigoOpt == "papel") {
            //player venceu
            vencedor.innerHTML = "Você Venceu ... Parabens!";
        }
    }

}

function resetInimigo() {
    const enemyOptions = document.querySelectorAll(".enemy-options div");
    for (var i = 0;i < enemyOptions.length; i++) {
        enemyOptions[i].childNodes[0].style.opacity = 0.3;
        
    }
}

function inimigoJogar() {
    let rand = Math.floor(Math.random()*3);

    const enemyOptions = document.querySelectorAll(".enemy-options div");
    resetInimigo();
    for (var i = 0;i < enemyOptions.length; i++) {
        if (i == rand) {
            enemyOptions[i].childNodes[0].style.opacity = 1;
            inimigoOpt = enemyOptions[i].childNodes[0].getAttribute('opt');
            

        }
        
    }
   
}



function resetOpacityPlayer() {
    for (var i = 0; i < elementos.length; i++) {
        elementos[i].style.opacity = 0.3;
    }
}

for (var i = 0; i < elementos.length; i++) {
    elementos[i].addEventListener('click', function (t) {
        resetOpacityPlayer();
        t.target.style.opacity = 1;
        playerOpt = t.target.getAttribute('opt');

        inimigoJogar();
        validarVitoria();


        // alert(playerOpt);
    });
}