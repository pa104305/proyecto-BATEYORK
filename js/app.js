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
}
function printResult(){
    if(operation == "+"){
        result = parseFloat(num1) + parseFloat(num2);
    }else if(operation == "-"){
        result = num1 - num2;
    }else if(operation == "*"){
        result = num1 * num2;
    }else if(operation == "/"){
        result = num1 / num2;
    }
    small.innerHTML = num1 + operation + num2;
    large.innerHTML = result;
    num1 = 0; num2 = 0;
}