<?php
const KM2MYLES = 0.621371;
function km2myles($km){
    return $km * KM2MYLES;
}
function myles2km($myles){
    return $myles / KM2MYLES;
}
const KG2SVAR = 2.20462;
function kg2svar($kg){
    return $kg * KG2SVAR;
}
function svar2kg($svar){
    return $svar / KG2SVAR;
}
const kint1 = 32;
const kint2 = 5/9;
const kint3 = 9/5;
function far2cel($far){
    return ($far - kint1) * kint2;
}
function cel2far($cel){
    return $cel * kint3 + kint1;
}
?>