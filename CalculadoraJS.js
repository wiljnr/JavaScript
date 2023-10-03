const prompt = require('prompt-sync')();
let result;
var numero_1;
var numero_2;
function add(num1, num2){
    result = num1+num2 
    return result
}
function sub(num1, num2){
    result = num1-num2 
    return result
}
function mult(num1, num2){
    result = num1*num2 
    return result
    console.log(result)
}
function div(num1, num2){
    if(num2 == 0) {
        return("Não é possível dividir.")
    } else if(num1>=num2){
        result = num1/num2
        return result
    } else if(num1<num2) {
        result = num1/num2
        return result
    }
}
function digitaNumero(){
    numero_1 = parseInt(prompt("Num1: "));
    numero_2 = parseInt(prompt("Num2: "));
    return numero_1, numero_2;
}
while(true){
    console.log("Calculadora em JavaScript");
    console.log("Qual será a operação?")
    console.log(" 1 => Adição\n 2 => Subtração\n 3 => Multiplicação\n 4 => Divisão\n 5 => Sair")
    let ope = prompt(">> ");
    if (ope == "5")
        break;
        if (ope == "1"){
            digitaNumero();
            console.log(add(numero_1, numero_2))
        }
        else if (ope == "2"){
            digitaNumero();
            console.log(sub(numero_1, numero_2))
        } 
        else if (ope == "3"){
            digitaNumero();
            console.log(mult(numero_1, numero_2))
        }
        else if (ope == "4"){
            digitaNumero();
            console.log(div(numero_1, numero_2))
        } 
        else {
            console.log("Nenhuma operação foi selecionada.")}
    console.log("\n")
}