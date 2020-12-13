-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Dec 13, 2020 at 02:48 PM
-- Server version: 8.0.13-4
-- PHP Version: 7.2.24-0ubuntu0.18.04.7

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `my4sFJnCwB`
--

-- --------------------------------------------------------

--
-- Table structure for table `admin`
--

CREATE TABLE `admin` (
  `idAdmin` int(11) NOT NULL,
  `phanQuyen` tinyint(4) NOT NULL,
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Dumping data for table `admin`
--

INSERT INTO `admin` (`idAdmin`, `phanQuyen`, `username`, `password`) VALUES
(3, 1, 'bbbbbb', '$2y$10$T/EAqZcLHwhmS1bMrKRao.Nekq9obgKtVaMU37A2Tr.cui/jTy2Yy'),
(2, 3, 'aaaaaa', '$2y$10$RIkTAjyU3N0InUJ62UzASOfLrA8j2SKAAhwRYHs808ETi6pbvW0Ru'),
(5, 2, 'cccccc', '$2y$10$yYnvGDmENCYXdfAyQhF6qeH4KYsO0QFXvQz5AmD/r6XxZ/T1wQqtC');

-- --------------------------------------------------------

--
-- Table structure for table `banggia`
--

CREATE TABLE `banggia` (
  `idBG` int(11) NOT NULL,
  `giaLP` float NOT NULL,
  `timeApDung` date NOT NULL,
  `idLP` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `banggia`
--

INSERT INTO `banggia` (`idBG`, `giaLP`, `timeApDung`, `idLP`) VALUES
(7, 5000000, '2020-12-03', 1),
(8, 3000000, '2020-12-03', 3);

-- --------------------------------------------------------

--
-- Table structure for table `datphong`
--

CREATE TABLE `datphong` (
  `idDP` int(11) NOT NULL,
  `idLP` int(11) NOT NULL,
  `idKH` int(11) NOT NULL,
  `ngayDen` date NOT NULL,
  `ngayDi` date NOT NULL,
  `soDem` int(11) NOT NULL,
  `tongTien` float NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `datphong`
--

INSERT INTO `datphong` (`idDP`, `idLP`, `idKH`, `ngayDen`, `ngayDi`, `soDem`, `tongTien`) VALUES
(1, 1, 8, '2020-12-08', '2020-12-10', 2, 10000000),
(5, 1, 12, '2020-12-08', '2020-12-11', 3, 15000000),
(6, 3, 13, '2020-12-09', '2020-12-12', 3, 9000000),
(7, 1, 14, '2020-12-09', '2020-12-11', 2, 10000000),
(8, 1, 15, '2020-12-14', '2020-12-16', 2, 10000000),
(9, 3, 16, '2020-12-10', '2020-12-14', 4, 12000000);

-- --------------------------------------------------------

--
-- Table structure for table `khachhang`
--

CREATE TABLE `khachhang` (
  `idKH` int(11) NOT NULL,
  `tenKH` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `ngayHetHan` date DEFAULT NULL,
  `email` varchar(255) NOT NULL,
  `sdt` varchar(15) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `loaiThe` int(11) NOT NULL COMMENT '0: Visa, 1: MasterCard, 2: Domestic',
  `nganHang` int(11) NOT NULL COMMENT '0: BIDV, 1: Eximbank',
  `tenThe` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `soThe` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `khachhang`
--

INSERT INTO `khachhang` (`idKH`, `tenKH`, `ngayHetHan`, `email`, `sdt`, `loaiThe`, `nganHang`, `tenThe`, `soThe`) VALUES
(8, 'Trieu Phu', NULL, 'uyphu4@gmail.com', '0123456789', 2, 1, 'TRIEU UY PHU', '012345678912345678'),
(12, 'Trieu Phu', '2020-11-20', 'uyphu4@gmail.com', '0123456789', 0, 0, 'TRIEU UY PHU', '12345678912345678'),
(13, 'Tran Quoc Hung', NULL, 'hanquocadrian@gmail.com', '0789991876', 2, 0, 'TRAN QUOC HUNG', '5657483920192837'),
(14, 'Trinh Gia Le', NULL, 'giale4545@gmail.com', '9876543217', 2, 0, 'TRINH GIA LE', '45678912345678912'),
(15, 'Tran Quoc Hung', '2020-12-20', 'hanquocadrian@gmail.com', '0789991876', 0, 1, 'TRAN QUOC HUNG', '56574839201928377'),
(16, 'Tony Trieu', '2021-12-30', 'uytuan213@gmail.com', '2261231234', 0, 0, 'TONY TRIEU', '8967452312131415');

-- --------------------------------------------------------

--
-- Table structure for table `loaiphong`
--

CREATE TABLE `loaiphong` (
  `idLP` int(11) NOT NULL,
  `tenLP` varchar(50) NOT NULL,
  `hinhAnh` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin,
  `moTa` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin,
  `slPhongTrong` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `loaiphong`
--

INSERT INTO `loaiphong` (`idLP`, `tenLP`, `hinhAnh`, `moTa`, `slPhongTrong`) VALUES
(1, 'Premium Room', '[\"/image/1604975025_1.jpg\",\"/image/1604975025_AboutHotel2.jpg\"]', '[\"Stay in our Grade II listed Ducie Street Warehouse aparthotel near Manchester Piccadilly train station. \",\"Kick back and get comfortable in one of our studios, specially designed for solo stays or getaways for two. Filled with gorgeous furnishings, rich colours and warehouse-chic flair, there’s a fully equipped kitchen, luxe bathroom, king sized bed and cosy touches. Small but perfectly formed, if you’re looking for a stylish pit stop on your travels then these studios are a great option.\",4,2,2]', 25),
(3, 'Blue Room', '[\"/image/1605444506_BlueRoom.jpg\",\"/image/1605444506_BlueRoom2.jpg\"]', '[\"This beautiful Grade II listed property overlooking Sussex Gardens has an apartment size to suit everyone.\",\"Small but perfectly formed, if you’re looking for a pit stop on your travels then these little studios are a great option. An ideal base for exploring the city, all come with a comfy double bed, modern bathroom and kitchen to make a late night snack or spot of breakfast before you set off.\",2,1,1]', 28);

-- --------------------------------------------------------

--
-- Table structure for table `slide`
--

CREATE TABLE `slide` (
  `idSlide` int(11) NOT NULL,
  `hinhAnh` varchar(255) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Dumping data for table `slide`
--

INSERT INTO `slide` (`idSlide`, `hinhAnh`) VALUES
(3, '/image/1605442143_HomepageSliderDesktopjpg.jpg'),
(4, '/image/1605444643_Nativemcrbanner1600-2.jpg');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `admin`
--
ALTER TABLE `admin`
  ADD PRIMARY KEY (`idAdmin`),
  ADD UNIQUE KEY `username` (`username`);

--
-- Indexes for table `banggia`
--
ALTER TABLE `banggia`
  ADD PRIMARY KEY (`idBG`),
  ADD KEY `idLP` (`idLP`);

--
-- Indexes for table `datphong`
--
ALTER TABLE `datphong`
  ADD PRIMARY KEY (`idDP`),
  ADD UNIQUE KEY `idKH` (`idKH`) USING BTREE,
  ADD KEY `idLP` (`idLP`) USING BTREE;

--
-- Indexes for table `khachhang`
--
ALTER TABLE `khachhang`
  ADD PRIMARY KEY (`idKH`);

--
-- Indexes for table `loaiphong`
--
ALTER TABLE `loaiphong`
  ADD PRIMARY KEY (`idLP`),
  ADD UNIQUE KEY `tenLP` (`tenLP`);

--
-- Indexes for table `slide`
--
ALTER TABLE `slide`
  ADD PRIMARY KEY (`idSlide`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `admin`
--
ALTER TABLE `admin`
  MODIFY `idAdmin` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `banggia`
--
ALTER TABLE `banggia`
  MODIFY `idBG` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `datphong`
--
ALTER TABLE `datphong`
  MODIFY `idDP` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `khachhang`
--
ALTER TABLE `khachhang`
  MODIFY `idKH` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- AUTO_INCREMENT for table `loaiphong`
--
ALTER TABLE `loaiphong`
  MODIFY `idLP` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `slide`
--
ALTER TABLE `slide`
  MODIFY `idSlide` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `banggia`
--
ALTER TABLE `banggia`
  ADD CONSTRAINT `banggia_ibfk_1` FOREIGN KEY (`idLP`) REFERENCES `loaiphong` (`idlp`) ON UPDATE CASCADE;

--
-- Constraints for table `datphong`
--
ALTER TABLE `datphong`
  ADD CONSTRAINT `datphong_ibfk_2` FOREIGN KEY (`idLP`) REFERENCES `loaiphong` (`idlp`) ON UPDATE CASCADE,
  ADD CONSTRAINT `datphong_ibfk_3` FOREIGN KEY (`idKH`) REFERENCES `khachhang` (`idkh`) ON DELETE RESTRICT ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
