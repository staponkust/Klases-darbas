<?php
session_start();

if (!empty($_POST)) {
    if (isset($_POST['username']) && isset($_POST['password'])) {
        if ($_POST['username'] === 'Tomas' && $_POST['username'] === '123456') {

            $_SESSION['Jus_prisijunges'] = true;
        }
        else {
            echo 'Blogi prisijungimo duomenys';
        }
    }
}
?>