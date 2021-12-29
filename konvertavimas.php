<?php

include 'library/konvertavimas.php';
include 'library/Failu_nuskaitymas/kurti_faila.php';
echo 'Atstumo konvertavimas: ' . konvertAtstumas(100,'mylios');
echo '<br>';
echo 'Svorio konvertavimas: ' . konvertSvoris(30,'svarai');
echo '<br>';
echo 'Temperaturos konvertavimas: ' . konvertTemperatura(55,'farenheitas');
echo '<br>';
echo conversion(200,'svarai');

echo '<br>';


?>