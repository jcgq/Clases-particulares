function Calculadora(){
    var numeroUno, numeroDos;

    numeroUno = parseFloat(document.getElementById("numeroUno").value);
    numeroDos = parseFloat(document.getElementById("numeroDos").value);

    var suma, resta, multiplicacion, division, potencia;
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