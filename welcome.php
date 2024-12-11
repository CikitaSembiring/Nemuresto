<?php
session_start();

// Pastikan pengguna sudah login
if (!isset($_SESSION['username'])) {
    header("Location: login.html"); // Arahkan ke halaman login jika belum login
    exit();
}

// Ambil nama pengguna dari session
$username = $_SESSION['username'];
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Welcome to NEMURESTO">
    <title>Welcome | NEMURESTO</title>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;600&display=swap">
    <style>
        body {
            font-family: 'Poppins', sans-serif;
            margin: 0;
            padding: 0;
            background-color: #ffffff;
            color: #9e2d2d;
            height: 100vh;
            display: flex;
            justify-content: center;
            align-items: center;
            overflow: hidden;
        }

        .welcome-container {
            text-align: center;
            cursor: pointer;
        }

        .welcome-text {
            font-size: 4rem;
            color: #842c27;
            text-transform: uppercase;
            font-weight: bold;
            letter-spacing: 2px;
            animation: wave 3s infinite;
        }

        .username-text {
            margin-top: 10px;
            font-size: 1.5rem;
            color: #ffd700;
        }

        @keyframes wave {
            0%, 100% {
                transform: translateY(0);
            }
            25% {
                transform: translateY(-10px);
            }
            50% {
                transform: translateY(10px);
            }
            75% {
                transform: translateY(-10px);
            }
        }

        .welcome-container:hover .welcome-text {
            color: #3b1515;
        }
    </style>
</head>

<body>
    <div class="welcome-container" onclick="window.location.href='home.html';">
        <div class="welcome-text">WELCOME TO NEMURESTO</div>
        <div class="username-text">Hi, <?php echo htmlspecialchars($username); ?>!</div>
    </div>
</body>

</html>