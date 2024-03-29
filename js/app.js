// Declaracion de variables principales, num1 → primer numero; num2 → segundo numero; result → resultado; operation → operacion
let num1 = 0, num2 = 0, result, operation, state = true, parenteces = false;
let sf = document.getElementById("secondFirst");
let ss = document.getElementById("secondSecond");
let st = document.getElementById("secondThirth");
let sfo = document.getElementById("secondFourth");
let sfi = document.getElementById("secondFiveth");
let sx = document.getElementById("secondSixth");
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
    if(operationSelected == "exp"){
        num2 = num1
        num1 = 2.7182
    }
    small.innerHTML = num1 + operation;
    large.innerHTML = num2;
}
function purgeParenteces(){
    num1 = num1 + ')';
    num2 = num2 + ')';
    num1 = num1.replace('(', '');
    num1 = num1.replace(')', '');
    num1 = num1.replace(')', '');
    num2 = num2.replace('(', '');
    num2 = num2.replace(')', '');
    num2 = num2.replace(')', '');
}
// funcion para imprimir el reusltado al presionar igual, comprueba que operador se eligio y despues lleva acabo la operacion deseada
function printResult(){
    if(parenteces == true){purgeParenteces()}// si hay parentesis en la expresion se ejecuta la funcion purgeParenteces()
    if(operation == "+"){//suma
        result = parseFloat(num1) + parseFloat(num2);
        printScreen();
    }else if(operation == "-"){//resta
        result = num1 - num2;
        printScreen();
    }else if(operation == "*"){//multiplicacion
        result = num1 * num2;
        printScreen();
    }else if(operation == "/"){//division
        result = num1 / num2;
        printScreen();
    }else if(operation == "mod"){//modulo (residuo)
        result = num1 % num2;
        printScreen();
    }else if(operation == "*10^"){//exponente a la 10
        result = num1 * Math.pow(10, num2);
        printScreen();
    }else if(operation == "^"){//elevacion
        result = Math.pow(num1, num2);
        printScreen();
    }else if(operation == "sqrt"){// raiz cuadrada
        result = Math.sqrt(num1);
        if(isNaN(result) == false){
            small.innerHTML = operation + num1;
            large.innerHTML = result;
        }else{
            small.innerHTML = operation + num1;
            large.innerHTML = "Sintax Error :(";
        }
    }else if(operation == "²"){//cuadrado
        result = Math.pow(num1, 2);
        small.innerHTML = num1 + operation;
        large.innerHTML = result;
    }else if(operation == "|"){//valor absoluto
        if(num1 < 0){result = num1 * -1}else{result = num1}
        small.innerHTML = operation + num1 + operation;
        large.innerHTML = result;
    }else if(operation == "exp"){//exponente
        result = Math.pow(num1, num2)
        printScreen();
    }else if(operation == "!"){//factorial
        let i = 2;
        while(i <= num1 ){
            let sum = i * (i - 1);
            if(result == undefined){result = 1}
            result *= i
            i++
        }
        small.innerHTML = num1 + operation;
        large.innerHTML = result;
    }else if(operation == "log"){//logaritmo base 10
        result = Math.log10(num1)
        small.innerHTML = operation + num1;
        large.innerHTML = result;
    }else if(operation == "ln"){// logaritmo natural o logaritmo neperiano
        result = Math.log(num1)
        small.innerHTML = operation + num1;
        large.innerHTML = result;
    }else if(operation == "1/"){// reciproco
        result = 1/num1
        small.innerHTML = operation + num1;
        large.innerHTML = result;
    }else if(operation == "³"){//cubo
        result = Math.pow(num1, 3);
        small.innerHTML =  num1 + operation;
        large.innerHTML = result;
    }else if(operation == "sqrt3"){// raiz cubica
        result = Math.cbrt(num1)
        small.innerHTML =  num1 + operation;
        large.innerHTML = result;
    }else if(operation == "sqrty"){// raiz
        result = Math.pow(num1, 1/num2);
        printScreen();
    }else if(operation == "2^"){//potencia de 2
        result = Math.pow(2, num1);
        small.innerHTML =   operation + num1;
        large.innerHTML = result;
    }else if(operation == "logyx"){// logaritmo a una base
        result = Math.log(num2) / Math.log(num1);
        printScreen();
    }else if(operation == "e^"){// potencia de la constante de euler
        num2 = 2.7182;
        result = Math.pow(num2, num1)
    }
}
// funcion para imprimir en pantalla con un orde repetitivo
function printScreen(){
    purgeParenteces()
    small.innerHTML = num1 + operation + num2;
    large.innerHTML = result;
}
// funcion que limpia la pantalla al presionar la tecla C
function clean(){
    num1 = 0;
    num2 = 0;
    result = undefined;
    operation = undefined;
    small.innerHTML = num1;
    large.innerHTML = num1;
}
// funcion para cambiar de simbolo el numero que se esta insertando
function changeSimbol(){
    if(operation == undefined){
        num1 = num1 * -1;
        large.innerHTML = num1;
    }else{
        num2 = num2 * -1;
        large.innerHTML = num2;
    }
}
// funcion para activar la tecla de segunda funcion y cambiar las funciones de las teclas correspondientes
function secondFunction(){
    if(state == true){
        state = false;
        document.getElementById("second").style.background = 'yellowgreen';
        document.getElementById("secondFirst").innerHTML = 'x3';
        document.getElementById("secondSecond").innerHTML = 'sqrt3';
        document.getElementById("secondThirth").innerHTML = 'sqrty';
        document.getElementById("secondFourth").innerHTML = '2^';
        document.getElementById("secondFiveth").innerHTML = 'logyx';
        document.getElementById("secondSixth").innerHTML = 'e^';
        sf.onclick = () => {selectOperation("³");}
        ss.onclick = () => {selectOperation("sqrt3");}
        st.onclick = () => {selectOperation("sqrty");}
        sfo.onclick = () => {selectOperation("2^");}
        sfi.onclick = () => {selectOperation("logyx");}
        sx.onclick = () => {selectOperation("e^");}
    }else{
        state = true;
        document.getElementById("second").style.background = 'white';
        document.getElementById("secondFirst").innerHTML = 'x2';
        document.getElementById("secondSecond").innerHTML = 'sqrt';
        document.getElementById("secondThirth").innerHTML = '^';
        document.getElementById("secondFourth").innerHTML = '*10x';
        document.getElementById("secondFiveth").innerHTML = 'log';
        document.getElementById("secondSixth").innerHTML = 'ln';
        sf.onclick = () => {selectOperation("²");}
        ss.onclick = () => {selectOperation("sqrt");}
        st.onclick = () => {selectOperation("^");}
        sfo.onclick = () => {selectOperation("*10x");}
        sfi.onclick = () => {selectOperation("log");}
        sx.onclick = () => {selectOperation("ln");}
    }
}
// funcion para eliminar caracter por caracter el ultimo digito ingresado
function backward(){
    if(operation == undefined){
        num1 = num1.slice(0, -1);
        large.innerHTML = num1;
    }else{
        num2 = num2.slice(0, -1);
        large.innerHTML = num2;
    }
}