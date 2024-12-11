<?php
include 'db_connection.php';

// Tes Koneksi
if ($conn) {
    echo "Koneksi berhasil!";
} else {
    echo "Koneksi gagal: " . $conn->connect_error;
}
?>