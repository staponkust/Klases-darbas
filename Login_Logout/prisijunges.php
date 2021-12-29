<?php

session_start();
if (isset($_SESSION['Jus_prisijunges'])) {
    echo 'Prisijungete';
} else {
    header("location : login_Logout/login.php");
}
?>