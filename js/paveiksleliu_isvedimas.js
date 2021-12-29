let nuotraukos = document.getElementsByTagName('img');
console.log(nuotraukos.length);
let elementas = document.getElementById('uuid');
elementas.innerText =  'Siame index.html faile yra: ' + nuotraukos.length + ' paveikseliai';

for(let i = 0; i < nuotraukos.length; i += 2) {
    let elem = nuotraukos[i];
    elem.alt = 'Tekstas';
}

elementas.style.fontSize = '24px';
elementas.style.backgroundColor = 'green';
elementas.style.width = '200px';
elementas.style.height = '200px';