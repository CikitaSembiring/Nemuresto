<?php
$connection = new mysqli("localhost", "root", "website");

if (mysqli_connect_error()) {
    echo "Failed to connect to database: " . mysqli_connect_error();
}?>