<?php
// Koneksi ke database
$host = "localhost";       // Sesuaikan dengan server Anda
$dbname = "website";       // Nama database yang sudah ada
$username = "root";        // Username phpMyAdmin
$password = "";            // Password phpMyAdmin (kosong jika default)

// Koneksi ke database
$conn = new mysqli($host, $username, $password, $dbname);

// Periksa koneksi
if ($conn->connect_error) {
    die("Koneksi gagal: " . $conn->connect_error);
}

// Ambil data dari form
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    // Periksa apakah pesan ada
    if (isset($_POST['user_message']) && !empty($_POST['user_message'])) {
        // Sanitasi input pesan
        $user_message = $conn->real_escape_string($_POST['user_message']);

        // Masukkan data ke tabel chat_messages
        $sql = "INSERT INTO messages (user_message) VALUES ('$user_message')";

        if ($conn->query($sql) === TRUE) {
            // Jika pesan berhasil disimpan
            echo "Pesan berhasil dikirim!";
        } else {
            // Jika ada error, tampilkan pesan error
            echo "Error: " . $conn->error;
        }
    } else {
        // Jika tidak ada pesan
        echo "Pesan kosong tidak bisa dikirim!";
    }
}

$conn->close();
?>