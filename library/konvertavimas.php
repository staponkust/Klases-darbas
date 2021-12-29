<?php
include 'library/konvert.php';
function konvertAtstumas(int|string $ka, $kaip): float {
    switch($kaip){
        case 'mylios':
            $ats = myles2km($ka);
            break;
        case 'kilometra':
            $ats = km2myles($ka);
            break;
        default;
        throw new Exception('Neperskaitoma!');
    }
    return $ats;
}
function konvertSvoris(int|string $ka, $kaip): float {
    switch($kaip){
        case 'kilgogramai':
            $ats = kg2svar($ka);
            break;
        case 'svarai':
            $ats = svar2kg($ka);
            break;
        default;
            throw new Exception('Neperskaitoma!');
    }
    return $ats;
}
function konvertTemperatura(int|string $ka, $kaip): float {
    switch($kaip){
        case 'celsijus':
            $ats = cel2far($ka);
            break;
        case 'farenheitas':
            $ats = far2cel($ka);
            break;
        default;
            throw new Exception('Neperskaitoma!');
    }
    return $ats;
}
function conversion (int|string $ka, $kaip): float {
    switch ($kaip){
        case 'kilometrai':
            echo 'Kilometrai i mylias: ';
            $ats = km2myles($ka);
            break;
        case 'mylios':
            echo 'Mylios i kilometrus: ';
            $ats = myles2km($ka);
            break;
        case 'kilogramai':
            echo 'Kilogramai i svarus: ';
            $ats = kg2svar($ka);
            break;
        case 'svarai':
            echo 'Svarai i kilogramus: ';
            $ats = svar2kg($ka);
            break;
        case 'celsijus':
            echo 'Celsijus i farenheitus: ';
            $ats = cel2far($ka);
            break;
        case 'farenheitai':
            echo 'Farenheitai i celsijus: ';
            $ats = far2cel($ka);
            break;
            default;
            throw new Exception('Neperskaitoma!');
    }
    return $ats;
}
?>