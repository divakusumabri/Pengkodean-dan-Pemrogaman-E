<?php
include 'functions.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    addItem($_POST['name'], $_POST['category'], $_POST['quantity'], $_POST['price']);
}
?>
