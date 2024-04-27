-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Apr 27, 2024 at 05:44 AM
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
-- Table structure for table `comment_table`
--

CREATE TABLE `comment_table` (
  `Post` varchar(500) NOT NULL,
  `comment` varchar(500) NOT NULL,
  `Name` varchar(500) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `comment_table`
--

INSERT INTO `comment_table` (`Post`, `comment`, `Name`) VALUES
('3', 'This is a nice project.', 'Abrar Ahmed');

-- --------------------------------------------------------

--
-- Table structure for table `courses`
--

CREATE TABLE `courses` (
  `CourseName` varchar(200) NOT NULL,
  `Time` text NOT NULL,
  `Section` int(100) NOT NULL,
  `Day1` text NOT NULL,
  `Day2` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `courses`
--

INSERT INTO `courses` (`CourseName`, `Time`, `Section`, `Day1`, `Day2`) VALUES
('CSE110', '8:00 - 9:20', 1, 'Sunday', 'Tuesday'),
('CSE110', '9:30 - 10:50', 2, 'Monday', 'Wednesday'),
('CSE110', '9:30 - 10:50', 3, 'Sunday', 'Tuesday'),
('CSE111', '8:00 - 9:20', 1, 'Sunday', 'Tuesday'),
('CSE111', '2:00 - 3:20', 2, 'Thursday', 'Saturday'),
('CSE111', '3:30 - 5:00', 3, 'Monday', 'Wednesday'),
('CSE220', '11:00 - 12:20', 1, 'Monday', 'Wednesday'),
('CSE220', '12:30 - 1:50', 2, 'Monday', 'Wednesday'),
('CSE220', '9:30 - 10:50', 3, 'Sunday', 'Tuesday'),
('CSE221', '8:00 - 9:20', 1, 'Thursday', 'Saturday'),
('CSE221', '9:30 - 10:50', 2, 'Monday', 'Wednesday'),
('CSE221', '3:30 - 5:00', 3, 'Sunday', 'Tuesday'),
('CSE470', '11:00 - 12:20', 1, 'Sunday', 'Tuesday'),
('CSE470', '2:00 - 3:20', 2, 'Monday', 'Wednesday'),
('CSE470', '12:30 - 1:50', 3, 'Sunday', 'Tuesday');

-- --------------------------------------------------------

--
-- Table structure for table `food`
--

CREATE TABLE `food` (
  `FoodName` varchar(200) NOT NULL,
  `FoodRating` float DEFAULT NULL,
  `FoodCost` int(11) NOT NULL,
  `FoodPicture` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `food`
--

INSERT INTO `food` (`FoodName`, `FoodRating`, `FoodCost`, `FoodPicture`) VALUES
('Biryani', 5, 160, '/biryani.webp'),
('Burger', 5, 120, '/buger.jpg'),
('Chocolate', 5, 20, '/chocolate.jpg'),
('Chocolate Cup Cake', 5, 50, '/gallary_3.jpg'),
('Chocolate Milkshake', 5, 80, '/chocolate_Drink.jpg'),
('Drinks', 5, 60, '/juse.jpg'),
('Hot Dog', 5, 80, '/Hot_dog.jpg'),
('Ice Cream', 5, 100, '/ice_cream.jpg'),
('Muffin Cake', 5, 40, '/Spanchi.jpg'),
('Pasta', 5, 100, '/pasta.jpg'),
('Pizza', 5, 250, '/pizza.jpg'),
('Sandwich', 5, 70, '/sandwich.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `foodcart`
--

CREATE TABLE `foodcart` (
  `FoodPicture` text NOT NULL,
  `StudentID` int(11) NOT NULL,
  `FoodName` varchar(200) NOT NULL,
  `Quantity` int(11) NOT NULL,
  `Bill` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `foodcart`
--

INSERT INTO `foodcart` (`FoodPicture`, `StudentID`, `FoodName`, `Quantity`, `Bill`) VALUES
('/buger.jpg', 21301022, 'Burger', 2, 240),
('/chocolate.jpg', 21301022, 'Chocolate', 1, 20),
('/Hot_dog.jpg', 21301022, 'Hot Dog', 1, 80),
('/ice_cream.jpg', 21301022, 'Ice Cream', 1, 100),
('/biryani.webp', 21301308, 'Biryani', 1, 160),
('/buger.jpg', 21301308, 'Burger', 2, 240),
('/chocolate.jpg', 21301308, 'Chocolate', 1, 20),
('/gallary_3.jpg', 21301308, 'Chocolate Cup Cake', 1, 50),
('/chocolate_Drink.jpg', 21301308, 'Chocolate Milkshake', 1, 80),
('/ice_cream.jpg', 21301308, 'Ice Cream', 2, 200),
('/biryani.webp', 21301309, 'Biryani', 1, 160),
('/buger.jpg', 21301309, 'Burger', 1, 120),
('/chocolate.jpg', 21301309, 'Chocolate', 1, 20),
('/gallary_3.jpg', 21301309, 'Chocolate Cup Cake', 1, 50),
('/buger.jpg', 213013093, 'Burger', 1, 120),
('/chocolate.jpg', 213013093, 'Chocolate', 1, 20);

-- --------------------------------------------------------

--
-- Table structure for table `food_place_order`
--

CREATE TABLE `food_place_order` (
  `StudentID` varchar(11) NOT NULL,
  `grandTotal` text NOT NULL,
  `orderItems` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `food_place_order`
--

INSERT INTO `food_place_order` (`StudentID`, `grandTotal`, `orderItems`) VALUES
('21301308', '1190', 'Biryani: 1, Burger: 2, Chocolate: 1, Chocolate Cup Cake: 1, Chocolate Milkshake: 1, Ice Cream: 2 ');

-- --------------------------------------------------------

--
-- Table structure for table `forum`
--

CREATE TABLE `forum` (
  `PostID` int(11) NOT NULL,
  `Title` varchar(260) DEFAULT NULL,
  `Text` text DEFAULT NULL,
  `Picture` text DEFAULT NULL,
  `Username` varchar(260) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `forum`
--

INSERT INTO `forum` (`PostID`, `Title`, `Text`, `Picture`, `Username`) VALUES
(3, 'BRACU Duburi', 'The BRACU Duburi team is committed to establishing a vibrant and inclusive community of AUV and ROV hobbyists and enthusiasts who will collaborate to develop cutting-edge, industrial-grade underwater vehicle. The team envisions fostering an environment where individuals can share their ideas, knowledge, and expertise to create innovative technologies that can revolutionize the underwater industry. Additionally, the team aspires to establish a state-of-the-art test facility that will enable the next generation of ROV enthusiasts to hone their skills and advance their knowledge in the field. Through these initiatives, the BRACU Duburi team aims to create a sustainable and innovative ecosystem that will drive the growth and development of the underwater industry in Bangladesh and beyond.', 'uploads\\6a3a2013142d403ba06c88b60cd90956', 'AmiMezbha');

-- --------------------------------------------------------

--
-- Table structure for table `parking_ver1`
--

CREATE TABLE `parking_ver1` (
  `name` varchar(50) NOT NULL,
  `phoneNo` int(14) NOT NULL,
  `lic_plate` varchar(50) NOT NULL,
  `student_id` int(20) NOT NULL,
  `type` text NOT NULL,
  `status` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `parking_ver1`
--

INSERT INTO `parking_ver1` (`name`, `phoneNo`, `lic_plate`, `student_id`, `type`, `status`) VALUES
('Mezbha Ul Haq', 1749750955, 'Abcd-1234', 21301308, 'bike', 'Paid');

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
-- Table structure for table `transactions_table`
--

CREATE TABLE `transactions_table` (
  `student_id` int(20) DEFAULT NULL,
  `transactions` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `transactions_table`
--

INSERT INTO `transactions_table` (`student_id`, `transactions`) VALUES
(NULL, '33623914265'),
(NULL, '39084172657'),
(NULL, '41205227692'),
(NULL, '42872774640'),
(NULL, '43834415118'),
(NULL, '44357104733'),
(NULL, '44625455554'),
(NULL, '47746644958'),
(NULL, '48669740602'),
(NULL, '49200422362'),
(NULL, '54148278435'),
(NULL, '55539353336'),
(NULL, '56509220838'),
(NULL, '60173150207'),
(NULL, '61211146470'),
(NULL, '65642068781'),
(NULL, '70539625705'),
(NULL, '71753277323'),
(NULL, '73821043570'),
(NULL, '75282383127'),
(NULL, '76513688709'),
(NULL, '79726114476'),
(NULL, '80025335661'),
(NULL, '81157398205'),
(NULL, '82888342516'),
(NULL, '84888273648'),
(NULL, '86093165525'),
(NULL, '88748724467'),
(NULL, '94016867962'),
(NULL, '96420201002'),
(NULL, '97337087333'),
(NULL, '98669280854'),
(NULL, '99795506893'),
(21301308, '32347792137');

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
('Going', '6:30', 2, 0, 1, 'AmiMezbha'),
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
('Returning', '5:00', 1, 0, 1, 'AmiMezbha'),
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
(21301022, 'Penguin', 'Zarin Tasnim Raisa', 'zarin.tasnim.raisa@g.bracu.ac.bd', 0, 1749750952, '$2b$08$KU4D7XQHde5Zk6Tu0lUd9eotXy5.9gbVW90PU8kT9hJF6FHSpoB.S', 'ppaf2ew7eg'),
(21301308, 'AmiMezbha', 'Mezbha Ul Haq', 'mezbha.ul.haque@gmail.com', 0, 1749750965, '$2b$08$B6JCj4JkIlthd1ZfagRmD.oGkUZfC6AK95JVqD1R/g5GFlGAGw.ae', 'ugf08pgcsv'),
(21301309, 'PhantomN3rd', 'Abrar Ahmed', 'abrar.ahmed1@g.bracu.ac.bd', 0, 1749750959, '$2b$08$YmQTOfg52Xn.3cRbVVpK6OK82P8wU6uGDCO31bubSIEoaC6bsxjpK', 'wxm43jskw9'),
(213013093, 'test', 'test', 'test@test.com', 0, 2147483647, '$2b$08$lNe6DYR.RxqeTsmVdAKbGenQuMdu4CS5coSIzkoeVEFcaOD1a5/vm', '10iio9jkttmn');

-- --------------------------------------------------------

--
-- Table structure for table `usercoursetable`
--

CREATE TABLE `usercoursetable` (
  `Username` varchar(64) NOT NULL,
  `CourseName` varchar(64) NOT NULL,
  `CourseSection` int(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `usercoursetable`
--

INSERT INTO `usercoursetable` (`Username`, `CourseName`, `CourseSection`) VALUES
('AmiMezbha', 'CSE110', 1),
('AmiMezbha', 'CSE111', 1),
('AmiMezbha', 'CSE470', 1);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `comment_table`
--
ALTER TABLE `comment_table`
  ADD UNIQUE KEY `Post` (`Post`,`Name`) USING HASH;

--
-- Indexes for table `courses`
--
ALTER TABLE `courses`
  ADD PRIMARY KEY (`CourseName`,`Section`);

--
-- Indexes for table `food`
--
ALTER TABLE `food`
  ADD PRIMARY KEY (`FoodName`);

--
-- Indexes for table `foodcart`
--
ALTER TABLE `foodcart`
  ADD PRIMARY KEY (`StudentID`,`FoodName`),
  ADD KEY `FoodName` (`FoodName`);

--
-- Indexes for table `forum`
--
ALTER TABLE `forum`
  ADD PRIMARY KEY (`PostID`);

--
-- Indexes for table `parking_ver1`
--
ALTER TABLE `parking_ver1`
  ADD UNIQUE KEY `lic_plate` (`lic_plate`),
  ADD UNIQUE KEY `student_id` (`student_id`);

--
-- Indexes for table `routes`
--
ALTER TABLE `routes`
  ADD PRIMARY KEY (`Name`),
  ADD UNIQUE KEY `Place` (`Place`) USING HASH,
  ADD UNIQUE KEY `Time` (`Time`) USING HASH;

--
-- Indexes for table `transactions_table`
--
ALTER TABLE `transactions_table`
  ADD UNIQUE KEY `transactions` (`transactions`),
  ADD UNIQUE KEY `transactions_2` (`transactions`),
  ADD UNIQUE KEY `student_id` (`student_id`);

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

--
-- Indexes for table `usercoursetable`
--
ALTER TABLE `usercoursetable`
  ADD PRIMARY KEY (`Username`,`CourseName`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `forum`
--
ALTER TABLE `forum`
  MODIFY `PostID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `foodcart`
--
ALTER TABLE `foodcart`
  ADD CONSTRAINT `foodcart_ibfk_1` FOREIGN KEY (`StudentID`) REFERENCES `user` (`StudentID`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `foodcart_ibfk_2` FOREIGN KEY (`FoodName`) REFERENCES `food` (`FoodName`) ON DELETE NO ACTION ON UPDATE NO ACTION;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
