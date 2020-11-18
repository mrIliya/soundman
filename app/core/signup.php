<?php
require_once 'config.php';

$name = trim($_POST['first-name']);
$email = trim($_POST['email']);
$pass = trim($_POST['password']);
$phone = trim($_POST['phone']);
$sex = trim($_POST['sex']);

if ($name =='' OR $pass=='' OR $email=='' OR $phone=='' OR $sex ==''){
    echo 2;
    die;
}

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} 

$sql = "INSERT INTO users (name, email, password, phone, sex) VALUES ('".$name."', '".$email."', '".$pass."', '".$phone."', '".$sex."')";

if ($conn->query($sql) === TRUE) {
    echo 1;
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
?>