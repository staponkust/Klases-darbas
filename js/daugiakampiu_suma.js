let n1 = 3;
let n2 = 4;

let s1 =  (n1 - 2) *180;
let s2 =  (n2 - 2) *180;

let suma = s1 + s2;

document.getElementById('ats').innerHTML = ' Trikampio '+ n1 +' kampu suma yra: ' + s1 + '.' + '<br>';
document.getElementById('ats').innerHTML += ' Kvadrato '+ n2 +' kampu suma yra: ' + s2 + '.' + '<br>';
document.getElementById('ats').innerHTML += ' Abieju daugiakampiu ' + suma;