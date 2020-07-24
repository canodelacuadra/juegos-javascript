var cartaMasAlta ={
  jugar:  function(){
     
 // desarrollo del juego 
        croupier.mezclar(baraja);
        croupier.repartirJugador();
        setTimeout( 
            function(){
                croupier.repartirCroupier()
            }
            , 3000);
          setTimeout( 
              function(){
                  croupier.compararCartas()
              }, 6000);
    
  }
}

//invocamos la función aqui, luego lo haremos con un botón o mecanismo
// jugar();
//cartaMasAlta.jugar();
document.getElementById('cartaA').onclick=cartaMasAlta.jugar;