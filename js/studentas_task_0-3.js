let vardas ='Tomas';
let pavarde = 'Tomauskas';
let kursas = 3;
let kurmokosi = 'KTU';
let pazymiai = [8,7,9,7];

document.getElementById('ats2').innerHTML = vardas + ' ' + pavarde
    + ' mokosi ' + kurmokosi + ', ' + kursas + ' kurse, jo pazymiai: ' + '[' + pazymiai + ']';

document.getElementById('info_typeof').innerHTML = 'vardas yra ' + typeof vardas + '<br>';
document.getElementById('info_typeof').innerHTML += 'pavarde yra ' + typeof pavarde + '<br>';
document.getElementById('info_typeof').innerHTML += 'kursas yra ' + typeof kursas + '<br>';
document.getElementById('info_typeof').innerHTML += 'kurmokosi yra ' + typeof kurmokosi + '<br>';
document.getElementById('info_typeof').innerHTML += 'pazymiai ' + typeof pazymiai + '<br>';