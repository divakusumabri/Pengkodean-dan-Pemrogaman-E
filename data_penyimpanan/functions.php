<?php
include 'config.php';

// Fungsi untuk mendapatkan semua item
function getItems() {
    global $conn;
    $result = $conn->query("SELECT * FROM inventory");
    return $result->fetch_all(MYSQLI_ASSOC);
}

// Fungsi untuk menambah item
function addItem($name, $category, $quantity, $price) {
    global $conn;
    $stmt = $conn->prepare("INSERT INTO inventory (name, category, quantity, price) VALUES (?, ?, ?, ?)");
    $stmt->bind_param("ssii", $name, $category, $quantity, $price);
    return $stmt->execute();
}

// Fungsi untuk menghapus item
function deleteItem($id) {
    global $conn;
    $stmt = $conn->prepare("DELETE FROM inventory WHERE id=?");
    $stmt->bind_param("i", $id);
    return $stmt->execute();
}
?>
