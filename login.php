<?php
session_start(); // Memulai session
error_reporting(E_ALL);
ini_set('display_errors', 1);


// Misalkan, setelah memverifikasi login:
    $_SESSION['user_id'] = $user_id; // Menyimpan ID pengguna yang login
    echo json_encode(['status' => 'success', 'message' => 'Login successful']);
include 'db_connection.php';

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $username = isset($_POST['username']) ? $_POST['username'] : null;
    $password = isset($_POST['password']) ? $_POST['password'] : null;

    if (!$username || !$password) {
        die("Username dan password wajib diisi!");
    }

    // Query untuk mencari pengguna berdasarkan username
    $stmt = $conn->prepare("SELECT id, username, password FROM users WHERE username = ?");
    $stmt->bind_param("s", $username);
    $stmt->execute();
    $result = $stmt->get_result();

    if ($result->num_rows > 0) {
        $user = $result->fetch_assoc();
        if (password_verify($password, $user['password'])) {
            $_SESSION['username'] = $user['username']; // Simpan username di session
            header("Location: welcome.php"); // Arahkan ke halaman welcome
            exit();
        } else {
            echo "Password salah.";
        }
    } else {
        echo "Username tidak ditemukan.";
    }

    $stmt->close();
}
?>