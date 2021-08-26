function Calculadora(){

    numeroUno = document.getElementById("numeroUno").value;
    numeroDos = document.getElementById("numeroDos").value;

    var numero = /^[0-9]$/;
    if(!numero.test(numeroUno) || !numero.test(numeroDos)){
        alert("Error. No has introducido un número");
    }
    else{
        suma = numeroUno+numeroDos;
        resta = numeroUno-numeroDos;
        multiplicacion = numeroUno*numeroDos;
        division = numeroUno/numeroDos;
        potencia = Math.pow(numeroUno, numeroDos);
    
        document.getElementById("suma").value=suma;
        document.getElementById("resta").value=resta;
        document.getElementById("mul").value=multiplicacion;
        document.getElementById("div").value=division;
        document.getElementById("pot").value = potencia;
    }    
}

function sumar(){

    numeroUno = parseInt(document.getElementById("numeroUno").value);
    numeroDos = parseInt(document.getElementById("numeroDos").value);

    var numero = /^[0-9]$/;
    if(!numero.test(numeroUno) || !numero.test(numeroDos)){
        alert("Error. No has introducido un número");
    }
    else{
        suma = numeroUno + numeroDos;
        document.getElementById("Resultado").value = suma;
    }
    
}


var arrayImages = ["imagenes/pina.jpg", "imagenes/kiwi.png", "imagenes/manzana.jpg", "imagenes/melon.jpg", "imagenes/platano.jpg", "imagenes/sandia.jpg", "imagenes/uva.jpg", "imagenes/melocoton.jpg", "imagenes/pina.jpg", "imagenes/kiwi.png", "imagenes/manzana.jpg", "imagenes/melon.jpg", "imagenes/platano.jpg", "imagenes/sandia.jpg", "imagenes/uva.jpg", "imagenes/melocoton.jpg"];
var cliclado=false;
var srcClicado = "";
var idClicado = "";
var aciertos = 0;

function voltarImagen(identificador){
    if(aciertos==8){
        alert("El juego ha finalizado. Enhorabuena!!");
    }
    else{
        document.getElementById(identificador).src=arrayImages[parseInt(identificador)-1];
        setTimeout(() => {
            console.log(comprobarPuntos(identificador))
          }, 1000);
    }
}

function comprobarPuntos(identificador){
    var aux = parseInt(document.getElementById("puntos").value);
    if(cliclado == false){
        cliclado = true;
        srcClicado = arrayImages[parseInt(identificador)-1];
        idClicado = identificador;
    }
    else{
        if(srcClicado == arrayImages[parseInt(identificador)-1]){
            aux = parseInt(aux) + parseInt(100);
            document.getElementById("puntos").value=aux;

            cliclado=false;
            aciertos = parseInt(aciertos)+parseInt(1);
            if(aciertos==8){
                alert("El juego ha finalizado. Enhorabuena!!");
            }
        }
        else{
            aux = parseInt(aux) + parseInt(-50);
            document.getElementById("puntos").value=aux;

            document.getElementById(identificador).src = "imagenes/interrogacion.png";
            document.getElementById(idClicado).src = "imagenes/interrogacion.png";
            cliclado=false;
        }
    }
}

function reiniciarJuego(){
    arrayImages.sort(function(){
        return Math.random() - 0.55
    });
    for(var i = 1; i<=arrayImages.length; i++){
        document.getElementById(parseInt(i)).src= "imagenes/interrogacion.png";
    }
    document.getElementById("puntos").value=0;
    aciertos=0;
    n = 0;
}


setInterval('contarSegundos()', 1000);
var n = 0;

function contarSegundos(){
    document.getElementById("contador").value = n;
    n++;
}


//****************************************************************************/



  

  var temas = new Map();
  temas.set(0, 'Deportes');
  temas.set(1, 'Biologia');
  temas.set(2, 'Sociales');
  temas.set(3, 'Literatura');
  temas.set(4, 'Musica');
  temas.set(5, 'Historia');


  var preguntasDeporte = new Map();
  preguntasDeporte.set(0, '¿Cuantas personas juegan en un partido de baloncesto?');
  preguntasDeporte.set(1, '¿Cuantas personas juegan en un partido de futbol?');
  preguntasDeporte.set(2, '¿Cuantas personas juegan en un partido de balonmano?');

  var respuestasDeporte = new Map();
  respuestasDeporte.set(0, '5');
  respuestasDeporte.set(1, '11');
  respuestasDeporte.set(2, '7');

  //------------------------------------------------------------------------------

  var preguntasBiologicas = new Map();
  preguntasBiologicas.set(0 , 'Eucariotas, ¿es un tipo de célula?');

  var respuestasBiologicas = new Map();
  respuestasBiologicas.set(0 , 'si');

  //------------------------------------------------------------------------------

  var preguntasSociales = new Map();
  preguntasSociales.set(0 , '¿Quién es el jugador de mayor edad en el Betis CF?');

  var respuestasSociales = new Map();
  respuestasSociales.set(0 , 'Joaquin');

    //------------------------------------------------------------------------------

  var preguntasLiteratura = new Map();
  preguntasLiteratura.set(0 , 'Pedro López, ¿es un famoso escritor?');

  var respuestasLiteratura = new Map();
  respuestasLiteratura.set(0 , 'no');

    //------------------------------------------------------------------------------

  var preguntasMusica = new Map();
  preguntasMusica.set(0 , 'Pedro López, ¿es un famoso escritor?');

  var respuestasMusica = new Map();
  respuestasMusica.set(0 , 'no');

    //------------------------------------------------------------------------------

  var preguntasHistoria = new Map();
  preguntasHistoria.set(0 , '¿Cuantos componían la quinta Estación?');

  var respuestasHistoria = new Map();
  respuestasHistoria.set(0 , '4');

    //------------------------------------------------------------------------------

function girarRuleta(){
    var numero = parseInt(Math.random() * 5);
    var temaElegido = temas.get(numero);
    alert("El tema de la pregunta será " + temaElegido);

    responder(temaElegido);
}



function responder(temaElegido){
    
    if(temaElegido == "Deportes"){
        var numPregunta = parseInt(Math.random() * preguntasDeporte.size);
        var pregunta = preguntasDeporte.get(numPregunta);
        //alert("La pregunta es: " + pregunta);

        var solucion = prompt(pregunta);
        if(solucion == respuestasDeporte.get(numPregunta)){
            alert("Acertaste");
        }
        else{
            alert("Pierdes una vida");
            comprobarVida();
        }
    }

    if(temaElegido == "Literatura"){
        var numPregunta = parseInt(Math.random() * preguntasLiteratura.size);
        var pregunta = preguntasLiteratura.get(numPregunta);
        alert("La pregunta es: " + pregunta);
    }

    if(temaElegido == "Biologia"){
        var numPregunta = parseInt(Math.random() * preguntasBiologia.size);
        var pregunta = preguntasBiologia.get(numPregunta);
        alert("La pregunta es: " + pregunta);
    }

    if(temaElegido == "Sociales"){
        var numPregunta = parseInt(Math.random() * preguntasSociales.size);
        var pregunta = preguntasSociales.get(numPregunta);
        alert("La pregunta es: " + pregunta);
    }

    if(temaElegido == "Musica"){
        var numPregunta = parseInt(Math.random() * preguntasMusica.size);
        var pregunta = preguntasMusica.get(numPregunta);
        alert("La pregunta es: " + pregunta);
    }

    if(temaElegido == "Historia"){
        var numPregunta = parseInt(Math.random() * preguntasHistoria.size);
        var pregunta = preguntasHistoria.get(numPregunta);
        alert("La pregunta es: " + pregunta);
    }

}


function comprobarVida(){
    var srcVida1 = document.getElementById("vida1").src;
    if(srcVida1 == "imagenes/vidaPerdida.jpg"){
        var srcVida2 = document.getElementById("vida2").src;
        if(srcVida2 == "imagenes/vidaPerdida.jpg"){
            var srcVida3 = document.getElementById("vida3").src;
            if(srcVida3 == "imagenes/vidaPerdida.jpg"){
                document.getElementById("vida3").src = "imagenes/vidaPerdida.jpg";
            }
        }
        else{
            document.getElementById("vida2").src = "imagenes/vidaPerdida.jpg";
        }
    }
    else{
        document.getElementById("vida1").src = "imagenes/vidaPerdida.jpg";
    }
}
