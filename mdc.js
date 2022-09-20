var a=prompt("informe o valor de A")
var b=prompt("informe o valor de B")

function mdc(a,b){
while (b!==0){
var r = a%b;
a=b
b=r
}
return a;
}

var resultado = mdc(a,b);
console.log("O MDC dos valores"+a+a"e"+b+"e "+resultado);
