let studentas1 = {
    vardas: "Tomas",
    pavarde: "Tomauskas",
    istaiga: "KTU",
    kursas:  2,
    pazymiai: [8, 7, 9, 7, 2, 5, 9, 7]
};
let vard = studentas1['vardas'];                                                                          //brackets
let pavard = studentas1.pavarde;                                                                          //dot
let studento1Masyvas = document.getElementById('studentas');
console.log(vard);                                                                                        // brackets notation.
console.log(pavard);                                                                                      // dot notation.
console.log(studentas1.vardas,studentas1.pavarde,'mokosi',studentas1.istaiga,studentas1.kursas,'kurse.','Jo pazymiai: ',studentas1.pazymiai);


for (let i=0; i<studentas1.pazymiai.length; i++) {                                                        //for ciklas kuris isveda studento pazymius.
    let marks = studentas1.pazymiai[i];
    console.log(marks);
}
// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

for (let j=0; j<studentas1.pazymiai.length; j++) {                                                        // for ciklas kuris nuskaito pazymius.
    if (studentas1.pazymiai[6] < 10){                                                                     // Salyga kad pazymys numeris 6 turi buti mazesnis negu 10.
        console.log(studentas1.pazymiai[6] + 1);
        studento1Masyvas.innerHTML = 'Sis pazymys yra 10 ir jo kelt nereikia. ' + studentas1.pazymiai[6] + 1 + '<br>';
    } else {                                                                                              // Salyga kad jei pazymis numeris 6 yra 10, jis yra nekeliamas.
        console.log('Sis pazymis pazymetas numeriu 6 yra 10 ir jo kelti nereikia. Saunus studentas!');
        studento1Masyvas.innerHTML = 'Sis pazymis pazymetas numeriu 6 yra 10 ir jo kelti nereikia. Saunus studentas!' + '<br>';
    }
}

for (let j=0; j<studentas1.pazymiai.length; j++) {                                                        // for ciklas kuris nuskaito pazymius.
    if (studentas1.pazymiai[4] < 10){                                                                     // Salyga kad pazymys numeris 4 turi buti mazesnis negu 10.
        console.log('Pazymys keliamas - ' + (studentas1.pazymiai[4] + 1));
        studento1Masyvas.innerHTML = 'Pazymys keliamas - ' + (studentas1.pazymiai[4] + 1);
    } else {                                                                                              // Salyga kad jei pazymis numeris 4 yra 10, jis yra nekeliamas.
        console.log('Sis pazymis pazymetas numeriu 4 yra 10. Kelti nereikia. Saunus studentas!');
        studento1Masyvas.innerHTML = 'Sis pazymis pazymetas numeriu 4 yra 10. Kelti nereikia. Saunus studentas!';
    }
}

for (let j=0; j<studentas1.pazymiai.length; j++) {                                                        // for ciklas kuris nuskaito pazymius.
    if (studentas1.pazymiai[2] < 10){                                                                     // Salyga kad pazymys numeris 2 turi buti mazesnis negu 10.
        console.log('Pazymys keliamas - ' + (studentas1.pazymiai[2] + 1));
    } else {                                                                                              // Salyga kad jei pazymis numeris 2 yra 10, jis yra nekeliamas.
        console.log('Sis pazymis pazymetas numeriu 2 yra 10. Kelti nereikia. Saunus studentas!');
    }
}

// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

function suma5(a,b,c){                                // Sumos funkcija
    return (a + b + c);
}
function daugyba5(a,b){                               // Daugybos funkcija
    return  a * b;
}
//console.log(suma5(5,6,3));                                             Sumos funkcijos patikra.
//console.log(daugyba5(5,6));                                            Daugybos funkcijos patikra

for (let i=0; i<studentas1.pazymiai.length; i++) {                                                                                                             //for ciklas kuris isveda studento pazymius.
    console.log('3-ju pasirinktu pazimiu sumos rezultatas yra = ' + suma5(studentas1.pazymiai[1],studentas1.pazymiai[3],studentas1.pazymiai[6]));              //Atliekama funkcija triju pasirinktu pazymiu sudeciai.
}

for (let i=0; i<studentas1.pazymiai.length; i++) {                                                                               //for ciklas kuris isveda studento pazymius.
    console.log('2-ju pasirinktu pazimiu daugyba rezultatas yra = ' + daugyba5(studentas1.pazymiai[1],studentas1.pazymiai[6]));  //Atliekama funkcija dvieju pasirinktu pazymiu daugybai.
}

//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

if(typeof studentas1.kursas === 'number') {                                                                                     //Funkcija kuri tikrai ar kurso ivestis yra number tipo.
    console.log('True!. Kurso reiksme isreiksta skaiciu budu.');
    if(studentas1.kursas === 4) {
        console.log('Studentas yra abiturientas ir mokosi paskutiniuose metuose');                                              //Isveda teigiama ataskyma, jog studentas mokosi 4 kurse.
    }
    if(studentas1.kursas < 4){
        console.log('Studentas dar ne abiturientas');                                                                           // Jei studento reiksme yra ne 4 studentas dar ne abiturientas.
    }
}
else if(typeof studentas1.kursas === 'string' || studentas1.kursas < 4) {                                                       //Funkcija kuri jeigu kuros ivesti ne number, tikrina toliau, gal ji strink tipo ivestis.
    console.log('False!. Kursas yra nurodytas zodine reiksme.');                                                                //Isveda teigiama ataskyma, po to kai patikrinama ar tai ne number tipo ivestis. Gaunama kad kurso ivestis yra string tipo.

}


//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

const studentaiMasyvas = [
    {name:'Vardenis',surname:'Pavardenis', universitetas:'KTU', course:4},
    {name:'Tomas',surname:'Braskiauskias', universitetas:'KU', course:1},
    {name:'Petras',surname:'Petrauskas', universitetas:'PNU', course:2},
    {name:'Karolis',surname:'Karoliauskas', universitetas:'VDU', course:3},
    {name:'Nojus',surname:'Nojauskas', universitetas:'KU', course:2},
    {name:'Jonas',surname:'Jonauskas', universitetas:'VDU', course:4},
    {name:'Greta',surname:'Gretauskyte', universitetas:'KU', course:4},
    {name:'Monika',surname:'Monikauskyte', universitetas:'KTU', course:1},
    {name:'Audrius',surname:'Audriauskas', universitetas:'VDU', course:2},
    {name:'Paulius',surname:'Pauliauskas', universitetas:'KU', course:3},
    {name:'Jurgita',surname:'Jurgaityte', universitetas:'KTU', course:4},
    {name:'Antanas',surname:'Antanauskas', universitetas:'VDU', course:4},
    {name:'Jogaila',surname:'Joagailauskas', universitetas:'KU', course:1},
    {name:'Regina',surname:'Reginauskaityte', universitetas:'KTU', course:3}
];
let isvedimas = document.getElementById('studentai');
for (let i = 0; i < studentaiMasyvas.length; i++) {
    if ( studentaiMasyvas[i].course === 4 ) {
        isvedimas.innerHTML += 'Studentas - ' + studentaiMasyvas[i].name + ' ' + studentaiMasyvas[i].surname + ' yra abiturientas.' + '<br>' + '<br>';
    }
}
for (let i = 0; i < studentaiMasyvas.length; i++) {
    if ( studentaiMasyvas[i].course < 4 ) {
        isvedimas.innerHTML += 'Studentui - ' + studentaiMasyvas[i].name + ' ' + studentaiMasyvas[i].surname + ' dar toli iki mokslu baigimo.' + '<br>' + '<br>' ;
    }
}