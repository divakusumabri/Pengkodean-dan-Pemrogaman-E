<?php
include 'functions.php';

if (isset($_GET['id'])) {
    deleteItem($_GET['id']);
}
?>
