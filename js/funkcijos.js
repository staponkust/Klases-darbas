function suma2(a,b){
    return a+b;
}
function atimtis2(a,b){
    return a-b;
}
function daugyba2(a,b){
    return a*b;
}
function dalyba2(a,b){
    return a/b;
}

function veikimas() {
    let skaitmuo = 35;
    let skaitmuo1 = 13;
    for (i = 0; i < 5; i++) {
        let j = skaitmuo1 + i;
        let result = document.getElementById('rezultatas');
        result.innerHTML += 'Siu skaiciu: [ ' + j + ' ir ' + skaitmuo + ' ] ' + 'suma yra: ' + suma2(j, skaitmuo) + '<br>';
        result.innerHTML += 'Siu skaiciu: [ ' + j + ' ir ' + skaitmuo + ' ] ' + 'atimtis yra: ' + atimtis2(j, skaitmuo) + '<br>';
        result.innerHTML += 'Siu skaiciu: [ ' + j + ' ir ' + skaitmuo + ' ] ' + 'daugyba yra: ' + daugyba2(j, skaitmuo) + '<br>';
        result.innerHTML += 'Siu skaiciu: [ ' + j + ' ir ' + skaitmuo + ' ] ' + 'dalyba yra: ' + dalyba2(j, skaitmuo) + '<br>';
        result.innerHTML += '<hr>';
    }
    let skaitmuo2 = 19;
    let skaitmuo3 = 61;
    for (i = 0; i < 5; i++) {
        let k = skaitmuo2 + i;
        for (j=0; j<10; j+=2) {
            let l = skaitmuo3 + j;
            let result = document.getElementById('rezultatas');
            result.innerHTML += 'Siu skaiciu: [ ' + k + ' ir ' + l + ' ] ' + 'suma yra: ' + suma2(k,l) + '<br>';
            result.innerHTML += 'Siu skaiciu: [ ' + k + ' ir ' + l + ' ] ' + 'atimtis yra: ' + atimtis2(k,l) + '<br>';
            result.innerHTML += 'Siu skaiciu: [ ' + k + ' ir ' + l + ' ] ' + 'daugyba yra: ' + daugyba2(k,l) + '<br>';
            result.innerHTML += 'Siu skaiciu: [ ' + k + ' ir ' + l + ' ] ' + 'dalyba yra: ' + dalyba2(k,l) + '<br>';
            result.innerHTML += '<hr>';
        }
    }

}