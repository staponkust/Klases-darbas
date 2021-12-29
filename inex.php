<?php
/*<form action="Login_Logout/login.php" method="post">
    <input type="text" name="username" placeholder="Iveskite savo slapyvardi" required>
    <input type="password" name="password" placeholder="Iveskite savo slaptazodi" required>
    <input type="submit" value="Prisijungti">
</form>*/
include 'admin/Car.php';

$automobilis = new Car();
$automobilis1 = new Car();

$automobilis->spalva = 'Raudona';
$automobilis->greitis = '100 km/h';
$automobilis->dureles = 4;

echo $automobilis->gautiSpalva();
echo '<br>';
$automobilis->vaziuoti(2);
echo '<br>';
echo 'Automobilio rida bus: ' . $automobilis->gautirida() . ' km/h.';
echo '<br>';
$automobilis->dureles();
?>

