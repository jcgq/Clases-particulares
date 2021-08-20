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
var srcClicado = "imagen/pina.jpg";
var idClicado = "tres";
var aciertos = 0;

function voltarImagen(identificador){
    if(aciertos==8){
        alert("El juego ha finalizado. Enhorabuena!!");
    }
    else{
        document.getElementById(identificador).src=arrayImages[parseInt(identificador)-1];
        setTimeout(() => {
            console.log(comprobarPuntos(identificador))
          }, 600);
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
            //alert("Pareja correcta");
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
            //alert("Error, pareja incorrecta");
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
}

