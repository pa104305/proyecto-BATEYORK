// Declaracion de variables principales, num1 → primer numero; num2 → segundo numero; result → resultado; operation → operacion
let num1, num2, result, operation;

const small = document.getElementById("small");
const large = document.getElementById("large");
// funcion para escibir el numero, recibe un valor al ser llamada y es el numero seleccionado
function writeNumber(number){
    // Si la operacion no se ha seleccionado se agregan numeros al primer valor, en caso contrario se agregan numeros al segundo valor
    if(operation == undefined){
        // Si el valor actual de la variable es undefinido o 0 la variable se asigna el valor del numero seleccinado, sino se agrega 
        // el numero en forma de cadena
        if(num1 == undefined || num1 == 0){
            num1 = number;
        }else{
            num1 = `${num1}${number}`;
        }
        large.innerHTML = num1;
    }else{
        if(num2 == undefined || num2 == 0){
            num2 = number;
        }else{
            num2 = `${num2}${number}`;
        }
        small.innerHTML = num1 + operation;
        large.innerHTML = num2;
    }
}
// funcion para pasar al programa la operacion seleccionada, y mantenerla guardada
function selectOperation(operationSelected){
    operation = operationSelected
    small.innerHTML = num1 + operation;
}
// funcion para imprimir el reusltado al presionar igual, comprueba que operador se eligio y despues lleva acabo la operacion deseada
function printResult(){
    if(operation == "+"){
        result = parseFloat(num1) + parseFloat(num2);
    }else if(operation == "-"){
        result = num1 - num2;
    }else if(operation == "*"){
        result = num1 * num2;
    }else if(operation == "/"){
        result = num1 / num2;
    }else if(operation == "*10^"){
        result = num1 * Math.pow(10, num2);
    }else if(operation == "^"){
        result = Math.pow(num1, num2);
    }else if(operation == "sqrt"){
        result = Math.sqrt(num1);
    }else if(operation == "²"){
        result = Math.pow(num1, 2);
    }
    small.innerHTML = num1 + operation + num2;
    large.innerHTML = result;
}
// funcion que limpia la pantalla al presionar la tecla C
function clean(){
    num1 = 0;
    num2 = undefined;
    result = undefined;
    operation = undefined;
    small.innerHTML = num1;
    large.innerHTML = num1;
}