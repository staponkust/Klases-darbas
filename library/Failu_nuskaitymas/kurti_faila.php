<?php
/*$html_pusl =
    '<html lang="en">
<head>
<title>
</title>
</head>
<body>
<p>Labas Pasauli!</p>
</body>
</html>';
$naujas = fopen("duomenys.html", "x+") or die ('Toks failas jau egzistuoja!');
fwrite($naujas, $html_pusl);*/


$naujas_json_failas = fopen("duomenys.json","x+");    // Sukuria faila.
$text = '{"Peter":35,"Ben":37,"Joe":43}';                           //sukuriamas tekstas ($text2) kuri noresime irasyti i sukurta faila.
fwrite($naujas_json_failas,$text);                                  //Iraso i faila  teksta($text).
fclose($naujas_json_failas);                                        // uzdaromas failas su tekstu.


$naujas_json_failas = fopen("duomenys.json","w");     // atidaromas neseniai sukurtas failas su tekstu($text).
$decoded = json_decode($text,true);                       //  $text tekstas perkoduojamas i array tipa.
$text1 = '{"Tomas":25}';                                           // sukuriamas tekstas ($text2) kuri noresime prideti.
$decoded1 = json_decode($text1,true);                     // sukurtas tekstas ($text2) perkoduojamas i array tipa.
$merged = array_merge($decoded,$decoded1);                         // Sujungiami du tekstai ($text) ir ($text2) kurie buvo perkoduoti i array tipa.
$coded = json_encode($merged);                                     // Du perkoduoti tekstai ($text) ir ($text2) i array tipus sujungiami i viena.
fwrite($naujas_json_failas,$coded);                                // Gautas rezultatas uzrasomas (naudojant mode w) ant jau esamos inforamcijos.
fclose($naujas_json_failas);                                       // Uzdaromas failas.

?>















