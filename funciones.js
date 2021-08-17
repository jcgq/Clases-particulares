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