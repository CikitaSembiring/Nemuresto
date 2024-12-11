-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 05, 2024 at 08:17 AM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `website`
--

-- --------------------------------------------------------

--
-- Table structure for table `messages`
--

CREATE TABLE `messages` (
  `id` int(11) NOT NULL,
  `user_message` text NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `messages`
--

INSERT INTO `messages` (`id`, `user_message`, `created_at`) VALUES
(1, 'wahh', '2024-12-04 12:21:50'),
(2, 'wahh', '2024-12-04 12:21:56'),
(3, 'the website is the best', '2024-12-04 12:22:35'),
(4, 'keren bangett', '2024-12-04 12:28:05'),
(5, 'haii', '2024-12-04 12:31:23'),
(6, 'kerenn buangett', '2024-12-04 12:31:52'),
(7, 'kerennnn', '2024-12-04 12:38:12'),
(8, 'kerenn', '2024-12-04 12:40:45'),
(9, 'kerenn', '2024-12-04 12:43:46'),
(10, 'wahh', '2024-12-04 12:44:10'),
(11, 'wahhh', '2024-12-04 12:44:19'),
(12, 'wahhhhhhh', '2024-12-04 12:46:01'),
(13, 'wahhhhhhh', '2024-12-04 12:46:01');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `username` varchar(50) NOT NULL,
  `email` varchar(100) NOT NULL,
  `phone` varchar(15) DEFAULT NULL,
  `password` varchar(255) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `username`, `email`, `phone`, `password`, `created_at`) VALUES
(1, 'John Doe', 'john.doe@example.com', '089976541234', '$2y$10$JjjK9/w//Sq1oykqQcoYmeFeKU8Hu0bZ/wGjlPKVwUO979d4.Ftg6', '2024-12-02 09:43:55'),
(2, 'Dame', 'damesidauruk2810@gmail.com', '082272648247', '$2y$10$cPWyMxfmfFxvxRhcjhjaq.F2mBRSg/5SQ68NEUxFwxcdgoFAOG15q', '2024-12-04 02:13:59'),
(3, 'Cikita', 'cikitasembiring@gmail.com', '087688542345', '$2y$10$SMiqREwOVyDlui1arqYbVO/GgoWftbXe/60cBS2nnVuDBDrRBR7vO', '2024-12-04 07:55:20'),
(4, 'Dini', 'diniaryaputri@gmail.com', '08976543', '$2y$10$xC15lsnCQUeUVSUty9XEoOXyzJeuB/bwrco0YZE3g2Pk0tel46UDW', '2024-12-04 08:08:18');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `messages`
--
ALTER TABLE `messages`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `username` (`username`),
  ADD UNIQUE KEY `email` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `messages`
--
ALTER TABLE `messages`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
