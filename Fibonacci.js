
let n = parseInt(lines.shift()); 

var x=1, y=0, seq=0; 

var string = ' '; 

for(let i= 1; i <= n; i++){ 

    string += seq.toString() + ' '; 

    seq = x + y; 

    x = y; 

    y = seq 

} 

console.log(string.trim());  
