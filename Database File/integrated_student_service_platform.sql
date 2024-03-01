-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Mar 01, 2024 at 12:58 PM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `integrated_student_service_platform`
--

-- --------------------------------------------------------

--
-- Table structure for table `courses`
--

CREATE TABLE `courses` (
  `CourseID` int(100) NOT NULL,
  `CourseName` varchar(200) NOT NULL,
  `Time` time NOT NULL,
  `Section` int(100) NOT NULL,
  `SeatBooked` int(11) NOT NULL,
  `TotalSeat` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `food`
--

CREATE TABLE `food` (
  `FoodID` int(100) NOT NULL,
  `FoodName` varchar(200) NOT NULL,
  `FoodRating` float NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `forum`
--

CREATE TABLE `forum` (
  `PostID` int(11) NOT NULL,
  `Text` text NOT NULL,
  `Picture` blob NOT NULL,
  `Comment` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `parkingmanagement`
--

CREATE TABLE `parkingmanagement` (
  `SpaceID` int(100) NOT NULL,
  `SpaceAvailibility` int(200) NOT NULL,
  `SeatPaid` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `routes`
--

CREATE TABLE `routes` (
  `Name` varchar(64) NOT NULL,
  `Place` text NOT NULL,
  `Time` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `routes`
--

INSERT INTO `routes` (`Name`, `Place`, `Time`) VALUES
('BRAC University', 'Moddho Badda', '7:30 AM'),
('Dhanmondi', 'Road No 7 (ARA Center Shopping Mall)', '6:35 AM'),
('Kalabagan', 'Krira Chokro (Near Foot Over-Bridge)', '6:40 AM'),
('Manik Mia Avenue', 'West End of Manik Mia Avenue (Opposite Aarong)', '6:50 AM'),
('New Market', 'Gate no 2, Janata Bank', '6:30 AM'),
('Sobhanbag', 'Sobhanbag (Near Foot Over-Bridge)', '6:45 AM');

-- --------------------------------------------------------

--
-- Table structure for table `transportation`
--

CREATE TABLE `transportation` (
  `BusType` varchar(64) NOT NULL,
  `Time` text NOT NULL,
  `SeatID` int(11) NOT NULL,
  `SeatAvailibility` int(11) NOT NULL,
  `SeatPaid` int(11) NOT NULL,
  `SeatBooked` varchar(64) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `transportation`
--

INSERT INTO `transportation` (`BusType`, `Time`, `SeatID`, `SeatAvailibility`, `SeatPaid`, `SeatBooked`) VALUES
('Going', '6:30', 1, 1, 0, NULL),
('Going', '6:30', 2, 1, 0, NULL),
('Going', '6:30', 3, 1, 0, NULL),
('Going', '6:30', 4, 1, 0, NULL),
('Going', '6:30', 5, 1, 0, NULL),
('Going', '6:30', 6, 1, 0, NULL),
('Going', '6:30', 7, 1, 0, NULL),
('Going', '6:30', 8, 1, 0, NULL),
('Going', '6:30', 9, 1, 0, NULL),
('Going', '6:30', 10, 1, 0, NULL),
('Going', '6:30', 11, 1, 0, NULL),
('Going', '6:30', 12, 1, 0, NULL),
('Going', '6:30', 13, 1, 0, NULL),
('Going', '6:30', 14, 1, 0, NULL),
('Going', '6:30', 15, 1, 0, NULL),
('Going', '6:30', 16, 1, 0, NULL),
('Going', '6:30', 17, 1, 0, NULL),
('Going', '6:30', 18, 1, 0, NULL),
('Going', '6:30', 19, 1, 0, NULL),
('Going', '6:30', 20, 1, 0, NULL),
('Returning', '5:00', 1, 1, 0, NULL),
('Returning', '5:00', 2, 1, 0, NULL),
('Returning', '5:00', 3, 1, 0, NULL),
('Returning', '5:00', 4, 1, 0, NULL),
('Returning', '5:00', 5, 1, 0, NULL),
('Returning', '5:00', 6, 1, 0, NULL),
('Returning', '5:00', 7, 1, 0, NULL),
('Returning', '5:00', 8, 1, 0, NULL),
('Returning', '5:00', 9, 1, 0, NULL),
('Returning', '5:00', 10, 1, 0, NULL),
('Returning', '5:00', 11, 1, 0, NULL),
('Returning', '5:00', 12, 1, 0, NULL),
('Returning', '5:00', 13, 1, 0, NULL),
('Returning', '5:00', 14, 1, 0, NULL),
('Returning', '5:00', 15, 1, 0, NULL),
('Returning', '5:00', 16, 1, 0, NULL),
('Returning', '5:00', 17, 1, 0, NULL),
('Returning', '5:00', 18, 1, 0, NULL),
('Returning', '5:00', 19, 1, 0, NULL),
('Returning', '5:00', 20, 1, 0, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `StudentID` int(11) NOT NULL,
  `Username` varchar(64) NOT NULL,
  `StudentName` varchar(100) NOT NULL,
  `Email` varchar(62) NOT NULL,
  `Grade` float NOT NULL,
  `Phone` int(20) NOT NULL,
  `Password` text NOT NULL,
  `Token` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`StudentID`, `Username`, `StudentName`, `Email`, `Grade`, `Phone`, `Password`, `Token`) VALUES
(112, 'test', 'test', 'test@test', 0, 211212121, '$2b$08$Kw6AfWUHUmSbUN7h.EjvjuPr5JfNBn6177raIOb1CfTHT9AISxwVe', 'ibmre37skcb'),
(21301022, 'Penguin', 'Zarin Tasnim Raisa', 'zarin.tasnim.raisa@g.bracu.ac.bd', 0, 1749750952, '$2b$08$KU4D7XQHde5Zk6Tu0lUd9eotXy5.9gbVW90PU8kT9hJF6FHSpoB.S', 'cyrj0529gps'),
(21301233, 'PORTE BOSH', 'Mezbha Ul Haque Fahim', 'mezbha.fahim@gmail.com', 0, 1749750955, '$2b$08$OGm3uHRr/khYYPeoPSNWWOHv4kUK4N5fJLbKDpOLygzD1RmmN.8Mu', 'dxagwvfbcs8'),
(21301309, 'PhantomN3rd', 'Abrar Ahmed', 'abrar.ahmed1@g.bracu.ac.bd', 0, 1749750959, '$2b$08$YmQTOfg52Xn.3cRbVVpK6OK82P8wU6uGDCO31bubSIEoaC6bsxjpK', '6pa6jwpqf3v');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `courses`
--
ALTER TABLE `courses`
  ADD PRIMARY KEY (`CourseID`);

--
-- Indexes for table `forum`
--
ALTER TABLE `forum`
  ADD PRIMARY KEY (`PostID`);

--
-- Indexes for table `parkingmanagement`
--
ALTER TABLE `parkingmanagement`
  ADD PRIMARY KEY (`SpaceID`);

--
-- Indexes for table `routes`
--
ALTER TABLE `routes`
  ADD PRIMARY KEY (`Name`),
  ADD UNIQUE KEY `Place` (`Place`) USING HASH,
  ADD UNIQUE KEY `Time` (`Time`) USING HASH;

--
-- Indexes for table `transportation`
--
ALTER TABLE `transportation`
  ADD PRIMARY KEY (`BusType`,`SeatID`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`StudentID`),
  ADD UNIQUE KEY `Email` (`Email`),
  ADD UNIQUE KEY `Username` (`Username`),
  ADD UNIQUE KEY `Phone` (`Phone`),
  ADD UNIQUE KEY `Token` (`Token`) USING HASH;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
