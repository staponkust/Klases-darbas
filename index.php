<?php
$ceu = [
    "Italy" => "Rome",
    "Luxembourg" => "Luxembourg",
    "Belgium" => "Brussels",
    "Denmark" => "Copenhagen",
    "Finland" => "Helsinki",
    "France" => "Paris",
    "Slovakia" => "Bratislava",
    "Slovenia" => "Ljubljana",
    "Germany" => "Berlin",
    "Greece" => "Athens",
    "Ireland" => "Dublin",
    "Netherlands" => "Amsterdam",
    "Portugal" => "Lisbon",
    "Spain" => "Madrid",
    "Sweden" => "Stockholm",
    "United Kingdom" => "London",
    "Cyprus" => "Nicosia",
    "Lithuania" => "Vilnius",
    "Czech Republic" => "Prague",
    "Estonia" => "Tallin",
    "Hungary" => "Budapest",
    "Latvia" => "Riga",
    "Malta" => "Valetta",
    "Austria" => "Vienna",
    "Poland" => "Warsaw",
];


echo '----------------------------------------------------------------------------------------------------' . '<br>' . '<br>';
echo 'VISAS PILNAS MASYVAS';
echo '<br>';
echo '<br>';
echo '<br>';
echo '<br>';

ksort($ceu);
foreach ($ceu as $key => $value)
echo 'Valstybe: ' . $key . '.' . ' Sios valstybes sostine yra: ' . $value . '.' . '<br>' . '<br>';
echo '<br>';

echo '----------------------------------------------------------------------------------------------------' . '<br>' . '<br>';

echo 'PIRMA MASYVO DALIS';
echo '<br>';
echo '<br>';
echo '<br>';

foreach ($ceu as $key => $value)
    $skaicius = ceil(count($ceu) / 2);
for ($i = 0; $skaicius > $i; $i++) {
    $key = array_keys($ceu)[$i];
    $value = $ceu[$key];
    echo $key . ' - ' . ' Sios valstybes sostine yra -   ' . $value . '; ';
}
echo '<br>';
echo '<br>';
echo '----------------------------------------------------------------------------------------------------' . '<br>' . '<br>';

echo 'ANTRA MASYVO DALIS';
echo '<br>';
echo '<br>';
echo '<br>';

foreach ($ceu as $key => $value)
    $skaicius = ceil(count($ceu) / 2);
for ($i = $skaicius; count($ceu) > $i; $i++) {
    $key = array_keys($ceu)[$i];
    $value = $ceu[$key];
    echo $key . ' - ' . ' Sios valstybes sostine yra -   ' . $value . '; ';
}
echo '<br>';
echo '<br>';
echo '----------------------------------------------------------------------------------------------------' . '<br>' . '<br>';

echo 'SPAUSDINA KAS 3 ELEMENTA';
echo '<br>';
echo '<br>';
echo '<br>';

for ($i = 0; $i < count($ceu); $i += 3) {
    $key = array_keys($ceu)[$i];
    $value = $ceu[$key];
    echo $key . '.  ' . ' Sios valstybes sostine yra: ' . $value . '<br>' . '<br>';
}
echo '----------------------------------------------------------------------------------------------------' . '<br>' . '<br>';

/*$i = 0;
foreach ($ceu as $key => $value)
    if (++$i & 1){
        echo ($i > 1? "" : "" ).$key;
        echo ' ' . ($i > 1? "- " : "").$value . '<br>' . '<br>';
    }*/

echo 'KADANGI PRIES TAI BUVES KODAS SPAUSDINO KAS 3 ELEMENTA, O KODO EILISKUMAS TURI REIKSMES, DABAR BUTENT TIEMS PASKUTINIAMS
 ELEMENTAMS PO BUVUSIOS UZDOTIES, SPAUSDINS TIK TUOS ELEMENTUS KURIUOSE YRA "A" RAIDE';
echo '<br>';
echo '<br>';
echo '<br>';


foreach ($ceu as $key => $value) {
    if(str_contains($key, "A") || str_contains($value, "A")) {
        echo $key . ' sostinė yra ' . $value . '<br>' . '<br>';
    }
}

echo '----------------------------------------------------------------------------------------------------' . '<br>' . '<br>';

$temp = [78, 60, 62, 68, 71, 68, 73, 85, 66, 64, 76, 63, 75, 76, 73, 68, 62, 73, 72, 65, 74, 62, 62, 65, 64, 68, 73, 75, 79, 73];

echo 'VIDUTINE TEMPERATURA';
echo '<br>';
echo '<br>';
$result = array_sum($temp);
$temp_vid = ceil($result / count($temp));
echo 'Visu temperaturu suma: ' . $result;
echo '<br>';
echo '<br>';
echo 'Temperaturu vidutine temperatura: ' . $temp_vid;
echo '<br>';
echo '<br>';

sort($temp);
echo 'Penkios maziausios temperaturos: ';
for($x = 0; $x < 5; $x++) {
        echo $temp[$x] . '  ';
}
echo '<br>';
echo '<br>';

rsort($temp);
echo 'Penkios didziausios temperaturos: ';
for($x = 0; $x < 5; $x++) {
    echo $temp[$x] . '  ';
}
echo '<br>';
echo '<br>';
echo '----------------------------------------------------------------------------------------------------' . '<br>' . '<br>';

$arr = ["abcd", "abc", "de", "hjjj", "g", "wer"];
$elemento_ilgis_max = 4;
$elemento_ilgis_min = 1;

echo 'Trumpiausi masyvo elementai: ';
for($i = 0; $i < count($arr); $i++) {
    if(strlen($arr[$i]) <= $elemento_ilgis_min) {
        echo ' "' . $arr[$i] . '" ';
    }
}
echo 'Ilgiausi masyvo elementai: ';
for($i = 0; $i < count($arr); $i++) {
    if(strlen($arr[$i]) >= $elemento_ilgis_max) {
        echo ' "' . $arr[$i] . '" ';
    }
}
echo '<br>';
echo '<br>';
echo '----------------------------------------------------------------------------------------------------' . '<br>' . '<br>';

$vardai = ["Jonas", "Petras", "Kazys", "Zigmas", "Ona", "Janina", "Kristina"];
$pavardes = ["Joninis", "Petrinis", "Kazinis", "Zigminis", "Onienė",  "Jonė", "Kristė"];
$c = [1, 1, 2, 2, 1, 2, 2, 3, 1, 3, 2, 1, 1, 4, 2, 4, 1, 5, 2, 7, 1, 6, 2, 5, 1, 7, 2, 6];

$kiekis = count($c);
for ($i = 0; $i < $kiekis; $i+=2) {
    echo $vardai[$c[$i] - 1] . ' ' . $pavardes[$c[$i+1] - 1] . '<br>';
}