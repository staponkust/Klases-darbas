let A = [1,3,6,5,7,2,2,4,4,8];

function sudeti_even() {
    let rez_isvedimas = document.getElementById('rezultatas');
    let rezultatas = 0;
    for (let i = 0; i < A.length; i++) {                                                   //F-ija kuri sudeda lyginius skaicius.
        if (A[i] % 2 === 0) {
            rezultatas = rezultatas + A[i];
            rez_isvedimas.innerHTML ='Lyginiu skaiciu suma lygi: ' + rezultatas;
        }
    }
}
//---------------------------------------------------------------------------------------------------------------

function sudeti_odd() {
    let rez_isvedimas = document.getElementById('rezultatas1');
    let rezultatas = 0;
    for (let i = 0; i < A.length; i++) {                                                 //F-ija kuri sudeda nelyginius skaicius.
        if (A[i] % 2 !== 0) {
            rezultatas = rezultatas + A[i];
            rez_isvedimas.innerHTML ='Nelyginiu skaiciu suma lygi: ' + rezultatas;
        }
    }
}

//--------------------------------------------------------------------------------------------------------------

function sudeti_even_index() {
    let indexSuma = 0;
    for (let i = 0; i < A.length; i++) {                                         // Lyginiu indeksu reiksmiu suma
        if (i % 2 === 0) {
            indexSuma = indexSuma + i;
            document.getElementById('rezultatas2').innerHTML = indexSuma;
        }
    }
}

//---------------------------------------------------------------------------------------------------------------
function skaiciuGeneratorius() {
    let atsitiktinis_skaiciu_masyvas = [];
    let masyv_ilgis = 50;
    for (let i = 0; i < masyv_ilgis; i++) {
        atsitiktinis_skaiciu_masyvas = Math.floor(Math.random() * 100);
        document.getElementById('atsitiktinis_skaiciu_masyvas').innerHTML += atsitiktinis_skaiciu_masyvas + ', ';           // Atsitiktiniu skaiciu generavimas i masyva
    }
}
function valytiGener() {
    document.getElementById('atsitiktinis_skaiciu_masyvas').innerHTML =null;                                               // Atsitiktinai sugeneruotu skaiciu i masyva - pasalinimas.
}

//---------------------------------------------------------------------------------------------------------------------

function raidziu_generatorius() {
    let rezultatas = [];
    let raidesirskait = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let raidesirskait_ilgis = raidesirskait.length;
    for ( let i = 0; i < raidesirskait_ilgis; i++ ) {
        rezultatas += raidesirskait.charAt(Math.floor(Math.random() * raidesirskait_ilgis));
    }
    document.getElementById('atsitiktines_raides').innerHTML = rezultatas + ', ';          // Generuojamos atsitiktines raides i masyva.
}
function valyti_raidziu_generavima() {
    document.getElementById('atsitiktines_raides').innerHTML = null;                      // Atsitiktinai sugeneruotu raidziu i masyva - pasalinimas.
}

//-------------------------------------------------------------------------------------------------------------------

function index_irasymas () {
    let tekstas = document.getElementById('rezultatas2').innerHTML;                    // Rezultatas gautas is pirmos uzduoties idetas i tekstinio tipo input laukeli.
    document.getElementById('input_text').value = tekstas.toString();
}

//--------------------------------------------------------------------------------------------------------------------

function perduoti_imasyva() {
    let tekstas_skaicius = document.getElementById('input_text').value;
    let skaicius = parseInt(tekstas_skaicius);
    A.push(skaicius);
    document.getElementById('tekstas_masyvas').innerHTML = A;
}