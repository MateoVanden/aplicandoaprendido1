const prompt = require("prompt-sync")();
let num1=parseInt((prompt("Ingrese el primer numero: ")));
let num2=parseInt((prompt("Ingrese el segundo numero: ")));
let resultado=0;

const opcion=prompt("Ingrese el signo de la operacion que desea realizar (+,-,/,*): ");

switch (opcion){
    case '+':
        resultado=num1+num2;
        console.log(resultado);
        break;
    case '-':
        resultado=num1-num2;
        break;
    case '/':
        if(num2==0)
        {
            console.log("La division por 0 no esta permitida");
        }
        resultado=num1/num2;
        console.log(resultado);
        break;
    case '*':
        resultado=num1*num2;
        console.log(resultado);
        break;
    default:
        console.log("Opcion no valida....");
        break;
}