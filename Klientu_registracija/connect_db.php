<?php

include "server.php";

try {
    if(!$_POST) {
        die ('Oi, kazkas atsitiko');
    }
    $conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);


    $stmt = $conn->prepare("INSERT INTO klientai (firstname, lastname, email)
  VALUES (:firstname, :lastname, :email)");
    $stmt->bindParam(':firstname', $firstname);
    $stmt->bindParam(':lastname', $lastname);
    $stmt->bindParam(':email', $email);

    $firstname = $_POST['vardas'];
    $lastname = $_POST['pavarde'];;
    $email = $_POST['elpastas'];;
    $stmt->execute();

    echo "Naujas klientas irasytas!";
} catch(PDOException $e) {
    echo "Error: " . $e->getMessage();
}
$conn = null;
?>