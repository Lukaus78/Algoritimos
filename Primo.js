var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var prompt = function(texto) { return lines.shift(); };

 var N = Number(prompt())
    var cont;
    for(i=0;i<N;i++){
        var X = Number(prompt())
        var teste = 0;
        for(t=2;t<X;t++){
            if(X%t==0){
                console.log(X+' nao eh primo')
                var teste = 1;
                break;
            }
        }
        if(teste==0){
            console.log(X+" eh primo")
        }
    }
