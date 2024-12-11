<?php
session_start();  // Memulai session

// Cek apakah pengguna sudah login
if (!isset($_SESSION['user_id'])) {
    header("Location: login.html");  // Arahkan ke login jika belum login
    exit();
}

// Lanjutkan dengan halaman utama setelah login
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <title>Welcome to NEMURESTO</title>
</head>
<body>
    <h1>Welcome, User!</h1>
    <!-- Konten lainnya -->
</body>
</html>