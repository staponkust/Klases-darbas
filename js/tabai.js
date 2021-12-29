// Priskyriau visus paragrafus vienam kitamajam.
let aprasai = document.getElementsByTagName('p');

// Tikrinu ar isvis isveda reiksme.
console.log(aprasai.length);

//Reikia funkcijos, kuri skaiciuotu ir pasleptu tabu aprasymus.
function keitimas(aprasoId) {                     //funkcijos pavadinimas, kuri naudosiu skyriu div paspaudziant ant nuorodos.

    for(let i = 0; i < aprasai.length; i++){      //Ciklas - kol i mazesnis uz paragrafu skaicius tol vykdyti cikla.
        aprasai[i].style.visibility = 'hidden';   // Nustaciau matomumo parametrus i paslepta.
    }
document.getElementById(aprasoId).style.visibility = 'visible'; // Padarys matoma paspausto elemento(skyriaus aprasa)
}
