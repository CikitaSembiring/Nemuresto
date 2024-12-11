<?php
session_start(); // Memulai session
// Aktifkan error reporting
error_reporting(E_ALL);
ini_set('display_errors', 1);

// Hubungkan ke database
include 'db_connection.php';

// Cek apakah metode POST digunakan
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    // Debug: Tampilkan data yang diterima
    var_dump($_POST);

    // Pastikan data tidak kosong sebelum diproses
    $fullname = isset($_POST['fullname']) ? $_POST['fullname'] : null;
    $email = isset($_POST['email']) ? $_POST['email'] : null;
    $phone = isset($_POST['phone']) ? $_POST['phone'] : null;
    $password = isset($_POST['password']) ? password_hash($_POST['password'], PASSWORD_DEFAULT) : null;

    if (!$fullname || !$email || !$phone || !$password) {
        die("Semua data wajib diisi!");
    }

    // Query untuk menyimpan data ke database
    $stmt = $conn->prepare("INSERT INTO users (username, email, phone, password) VALUES (?, ?, ?, ?)");
    $stmt->bind_param("ssss", $fullname, $email, $phone, $password);

    if ($stmt->execute()) {
        // Jika berhasil, arahkan ke halaman login
        header("Location: login.html");
        exit(); // Pastikan untuk menghentikan eksekusi lebih lanjut
    } else {
        // Jika gagal, tampilkan pesan kesalahan
        echo "Registration failed. Please try again.";
    }

    $stmt->close();
}
?>