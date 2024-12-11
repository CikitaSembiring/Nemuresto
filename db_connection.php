<?php
$servername = "localhost";  // Nama server biasanya localhost
$username = "root";         // Username default MySQL untuk XAMPP biasanya 'root'
$password = "";             // Password default MySQL (kosong di XAMPP)
$dbname = "website";        // Nama database yang sudah Anda buat di phpMyAdmin

// Membuat koneksi
$conn = new mysqli($servername, $username, $password, $dbname);

// Cek koneksi
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);  // Jika gagal, tampilkan error
}
?>