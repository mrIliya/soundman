<?php
require_once 'config.php';

$name= trim($_POST['first-name']);
$pass = trim($_POST['password']);

if ($name =='' OR $pass==''){
    echo 2;
    die;
}

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} 

$sql = "SELECT name, name FROM users WHERE name='".$name."' and password='".$pass."'";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    // output data of each row
    $row = $result->fetch_assoc();
    echo json_encode($row);
} else {
    echo "0";
}
$conn->close();
?>