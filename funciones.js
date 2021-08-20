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
var puntos = 0;

function voltarImagen(identificador){
    document.getElementById(identificador).src=arrayImages[parseInt(identificador)];
    setTimeout(() => {
        console.log(comprobarPuntos(identificador))
      }, 1000);
    
}

function comprobarPuntos(identificador){
    if(cliclado == false){
        cliclado = true;
        srcClicado = arrayImages[parseInt(identificador)];
        idClicado = identificador;
    }
    else{
        if(srcClicado == arrayImages[parseInt(identificador)]){
            alert("Pareja correcta");
            puntos += 100;
            cliclado=false;
        }
        else{
            puntos -= 50;
            alert("Error, pareja incorrecta");
            document.getElementById(identificador).src = "imagenes/interrogacion.jpg";
            document.getElementById(idClicado).src = "imagenes/interrogacion.jpg";
            cliclado=false;
        }
    }
}

function reiniciarJuego(){
    arrayImages.sort(function(){
        return Math.random() - 0.55
    });
}

