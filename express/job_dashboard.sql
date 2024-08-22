-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Aug 22, 2024 at 01:47 PM
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
-- Database: `job_dashboard`
--

-- --------------------------------------------------------

--
-- Table structure for table `career_history`
--

CREATE TABLE `career_history` (
  `id` int(20) NOT NULL,
  `user_id` int(20) DEFAULT NULL,
  `company` varchar(200) DEFAULT NULL,
  `position` varchar(200) DEFAULT NULL,
  `last_salary` int(20) DEFAULT NULL,
  `year` int(20) DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `updated_at` datetime DEFAULT NULL,
  `deleted_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `career_history`
--

INSERT INTO `career_history` (`id`, `user_id`, `company`, `position`, `last_salary`, `year`, `created_at`, `updated_at`, `deleted_at`) VALUES
(1, 1, 'TechCorp', 'Junior Developer', 60000, 2015, '2024-08-22 11:20:47', '2024-08-22 18:20:47', NULL),
(2, 1, 'InnovateSoft', 'Senior Developer', 85000, 2018, '2024-08-22 11:20:47', '2024-08-22 18:20:47', NULL),
(3, 1, 'FutureTech', 'Lead Developer', 110000, 2021, '2024-08-22 11:20:47', '2024-08-22 18:20:47', NULL),
(4, 2, 'DesignHub', 'Junior Designer', 55000, 2016, '2024-08-22 11:20:47', '2024-08-22 18:20:47', NULL),
(5, 2, 'CreativeSolutions', 'Senior Designer', 75000, 2019, '2024-08-22 11:20:47', '2024-08-22 18:20:47', NULL),
(6, 2, 'ArtisticVisions', 'Art Director', 95000, 2022, '2024-08-22 11:20:47', '2024-08-22 18:20:47', NULL),
(7, 3, 'GlobalCorp', 'Team Lead', 80000, 2012, '2024-08-22 11:20:47', '2024-08-22 18:20:47', NULL),
(8, 3, 'MegaEnterprises', 'Department Manager', 100000, 2015, '2024-08-22 11:20:47', '2024-08-22 18:20:47', NULL),
(9, 3, 'InnovateInc', 'Senior Manager', 120000, 2018, '2024-08-22 11:20:47', '2024-08-22 18:20:47', NULL),
(10, 4, 'DataCrunchers', 'Data Analyst', 65000, 2018, '2024-08-22 11:20:47', '2024-08-22 18:20:47', NULL),
(11, 4, 'InsightfulAnalytics', 'Senior Analyst', 85000, 2020, '2024-08-22 11:20:47', '2024-08-22 18:20:47', NULL),
(12, 4, 'BigDataCo', 'Lead Data Scientist', 105000, 2022, '2024-08-22 11:20:47', '2024-08-22 18:20:47', NULL),
(13, 5, 'TechInnovators', 'Software Engineer', 75000, 2017, '2024-08-22 11:20:47', '2024-08-22 18:20:47', NULL),
(14, 5, 'FutureSystems', 'Senior Engineer', 95000, 2019, '2024-08-22 11:20:47', '2024-08-22 18:20:47', NULL),
(15, 5, 'AIRevolution', 'Principal Engineer', 125000, 2021, '2024-08-22 11:20:47', '2024-08-22 18:20:47', NULL),
(16, 6, 'PeopleFirst', 'HR Associate', 60000, 2016, '2024-08-22 11:20:47', '2024-08-22 18:20:47', NULL),
(17, 6, 'TalentCorp', 'HR Manager', 80000, 2018, '2024-08-22 11:20:47', '2024-08-22 18:20:47', NULL),
(18, 6, 'HumanCapital', 'HR Director', 100000, 2020, '2024-08-22 11:20:47', '2024-08-22 18:20:47', NULL),
(19, 7, 'SalesPro', 'Sales Representative', 65000, 2012, '2024-08-22 11:20:47', '2024-08-22 18:20:47', NULL),
(20, 7, 'RevenueBoosters', 'Senior Sales Rep', 85000, 2015, '2024-08-22 11:20:47', '2024-08-22 18:20:47', NULL),
(21, 7, 'TopSellers', 'Regional Sales Manager', 105000, 2018, '2024-08-22 11:20:47', '2024-08-22 18:20:47', NULL),
(22, 8, 'DigitalEdge', 'Marketing Coordinator', 58000, 2019, '2024-08-22 11:20:47', '2024-08-22 18:20:47', NULL),
(23, 8, 'BrandBuilders', 'Marketing Specialist', 75000, 2021, '2024-08-22 11:20:47', '2024-08-22 18:20:47', NULL),
(24, 8, 'MarketDominators', 'Marketing Manager', 92000, 2023, '2024-08-22 11:20:47', '2024-08-22 18:20:47', NULL),
(25, 9, 'AccountPros', 'Staff Accountant', 62000, 2011, '2024-08-22 11:20:47', '2024-08-22 18:20:47', NULL),
(26, 9, 'FinancialExperts', 'Senior Accountant', 82000, 2014, '2024-08-22 11:20:47', '2024-08-22 18:20:47', NULL),
(27, 9, 'WealthManagers', 'Finance Manager', 102000, 2017, '2024-08-22 11:20:47', '2024-08-22 18:20:47', NULL),
(28, 10, 'ServiceFirst', 'Customer Service Rep', 45000, 2018, '2024-08-22 11:20:47', '2024-08-22 18:20:47', NULL),
(29, 10, 'ClientCare', 'Senior Customer Service Rep', 55000, 2020, '2024-08-22 11:20:47', '2024-08-22 18:20:47', NULL),
(30, 10, 'CustomerSuccess', 'Customer Service Team Lead', 70000, 2022, '2024-08-22 11:20:47', '2024-08-22 18:20:47', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `courses`
--

CREATE TABLE `courses` (
  `id` int(20) NOT NULL,
  `user_id` int(20) DEFAULT NULL,
  `title` varchar(200) DEFAULT NULL,
  `certification` enum('YES','NO') DEFAULT NULL,
  `year` int(20) DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `updated_at` datetime DEFAULT NULL,
  `deleted_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `courses`
--

INSERT INTO `courses` (`id`, `user_id`, `title`, `certification`, `year`, `created_at`, `updated_at`, `deleted_at`) VALUES
(1, 1, 'Advanced Python Programming', 'YES', 2018, '2024-08-22 11:20:47', '2024-08-22 18:20:47', NULL),
(2, 1, 'Web Development with React', 'YES', 2019, '2024-08-22 11:20:47', '2024-08-22 18:20:47', NULL),
(3, 1, 'Data Structures and Algorithms', 'NO', 2020, '2024-08-22 11:20:47', '2024-08-22 18:20:47', NULL),
(4, 2, 'Adobe Creative Suite Masterclass', 'YES', 2017, '2024-08-22 11:20:47', '2024-08-22 18:20:47', NULL),
(5, 2, 'UI/UX Design Principles', 'YES', 2018, '2024-08-22 11:20:47', '2024-08-22 18:20:47', NULL),
(6, 2, 'Design Thinking Workshop', 'NO', 2019, '2024-08-22 11:20:47', '2024-08-22 18:20:47', NULL),
(7, 3, 'Leadership and Management', 'YES', 2015, '2024-08-22 11:20:47', '2024-08-22 18:20:47', NULL),
(8, 3, 'Agile Project Management', 'YES', 2016, '2024-08-22 11:20:47', '2024-08-22 18:20:47', NULL),
(9, 3, 'Business Strategy and Innovation', 'NO', 2017, '2024-08-22 11:20:47', '2024-08-22 18:20:47', NULL),
(10, 4, 'Advanced SQL for Data Analysis', 'YES', 2019, '2024-08-22 11:20:47', '2024-08-22 18:20:47', NULL),
(11, 4, 'Machine Learning with Python', 'YES', 2020, '2024-08-22 11:20:47', '2024-08-22 18:20:47', NULL),
(12, 4, 'Data Visualization with Tableau', 'NO', 2021, '2024-08-22 11:20:47', '2024-08-22 18:20:47', NULL),
(13, 5, 'IoT Fundamentals', 'YES', 2017, '2024-08-22 11:20:47', '2024-08-22 18:20:47', NULL),
(14, 5, 'Advanced Algorithms in AI', 'YES', 2018, '2024-08-22 11:20:47', '2024-08-22 18:20:47', NULL),
(15, 5, 'Quantum Computing Basics', 'NO', 2019, '2024-08-22 11:20:47', '2024-08-22 18:20:47', NULL),
(16, 6, 'Talent Acquisition Strategies', 'YES', 2017, '2024-08-22 11:20:47', '2024-08-22 18:20:47', NULL),
(17, 6, 'Employment Law and Compliance', 'YES', 2018, '2024-08-22 11:20:47', '2024-08-22 18:20:47', NULL),
(18, 6, 'Employee Engagement and Retention', 'NO', 2019, '2024-08-22 11:20:47', '2024-08-22 18:20:47', NULL),
(19, 7, 'Advanced Sales Techniques', 'YES', 2015, '2024-08-22 11:20:47', '2024-08-22 18:20:47', NULL),
(20, 7, 'Digital Marketing Fundamentals', 'YES', 2016, '2024-08-22 11:20:47', '2024-08-22 18:20:47', NULL),
(21, 7, 'Customer Relationship Management', 'NO', 2017, '2024-08-22 11:20:47', '2024-08-22 18:20:47', NULL),
(22, 8, 'Content Marketing Strategy', 'YES', 2020, '2024-08-22 11:20:47', '2024-08-22 18:20:47', NULL),
(23, 8, 'Social Media Analytics', 'YES', 2021, '2024-08-22 11:20:47', '2024-08-22 18:20:47', NULL),
(24, 8, 'SEO and SEM Fundamentals', 'NO', 2022, '2024-08-22 11:20:47', '2024-08-22 18:20:47', NULL),
(25, 9, 'Advanced Financial Modeling', 'YES', 2014, '2024-08-22 11:20:47', '2024-08-22 18:20:47', NULL),
(26, 9, 'Tax Planning and Strategy', 'YES', 2015, '2024-08-22 11:20:47', '2024-08-22 18:20:47', NULL),
(27, 9, 'Blockchain in Finance', 'NO', 2016, '2024-08-22 11:20:47', '2024-08-22 18:20:47', NULL),
(28, 10, 'Customer Service Excellence', 'YES', 2019, '2024-08-22 11:20:47', '2024-08-22 18:20:47', NULL),
(29, 10, 'Conflict Resolution in the Workplace', 'YES', 2020, '2024-08-22 11:20:47', '2024-08-22 18:20:47', NULL),
(30, 10, 'Emotional Intelligence at Work', 'NO', 2021, '2024-08-22 11:20:47', '2024-08-22 18:20:47', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `educations`
--

CREATE TABLE `educations` (
  `id` int(20) NOT NULL,
  `user_id` int(20) DEFAULT NULL,
  `level` varchar(200) DEFAULT NULL,
  `institution` varchar(200) DEFAULT NULL,
  `major` varchar(200) DEFAULT NULL,
  `graduation_year` int(20) DEFAULT NULL,
  `gpa` float DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `updated_at` datetime DEFAULT NULL,
  `deleted_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `educations`
--

INSERT INTO `educations` (`id`, `user_id`, `level`, `institution`, `major`, `graduation_year`, `gpa`, `created_at`, `updated_at`, `deleted_at`) VALUES
(1, 1, 'Bachelor', 'New York University', 'Computer Science', 2012, 3.7, '2024-08-22 11:20:47', '2024-08-22 18:20:47', NULL),
(2, 1, 'Master', 'Columbia University', 'Software Engineering', 2014, 3.8, '2024-08-22 11:20:47', '2024-08-22 18:20:47', NULL),
(3, 1, 'Certificate', 'Coursera', 'Machine Learning', 2016, 4, '2024-08-22 11:20:47', '2024-08-22 18:20:47', NULL),
(4, 2, 'Bachelor', 'UCLA', 'Graphic Design', 2014, 3.6, '2024-08-22 11:20:47', '2024-08-22 18:20:47', NULL),
(5, 2, 'Associate', 'Santa Monica College', 'Art', 2010, 3.5, '2024-08-22 11:20:47', '2024-08-22 18:20:47', NULL),
(6, 2, 'Certificate', 'Adobe', 'UX Design', 2015, 4, '2024-08-22 11:20:47', '2024-08-22 18:20:47', NULL),
(7, 3, 'Bachelor', 'University of Chicago', 'Business Administration', 2007, 3.9, '2024-08-22 11:20:47', '2024-08-22 18:20:47', NULL),
(8, 3, 'MBA', 'Northwestern University', 'Management', 2010, 3.8, '2024-08-22 11:20:47', '2024-08-22 18:20:47', NULL),
(9, 3, 'Certificate', 'PMI', 'Project Management', 2012, 4, '2024-08-22 11:20:47', '2024-08-22 18:20:47', NULL),
(10, 4, 'Bachelor', 'Rice University', 'Statistics', 2015, 3.7, '2024-08-22 11:20:47', '2024-08-22 18:20:47', NULL),
(11, 4, 'Master', 'University of Houston', 'Data Science', 2017, 3.9, '2024-08-22 11:20:47', '2024-08-22 18:20:47', NULL),
(12, 4, 'Certificate', 'DataCamp', 'Big Data', 2018, 4, '2024-08-22 11:20:47', '2024-08-22 18:20:47', NULL),
(13, 5, 'Bachelor', 'Arizona State University', 'Electrical Engineering', 2010, 3.8, '2024-08-22 11:20:47', '2024-08-22 18:20:47', NULL),
(14, 5, 'Master', 'Stanford University', 'Computer Engineering', 2012, 3.9, '2024-08-22 11:20:47', '2024-08-22 18:20:47', NULL),
(15, 5, 'PhD', 'MIT', 'Robotics', 2016, 4, '2024-08-22 11:20:47', '2024-08-22 18:20:47', NULL),
(16, 6, 'Bachelor', 'Temple University', 'Psychology', 2013, 3.6, '2024-08-22 11:20:47', '2024-08-22 18:20:47', NULL),
(17, 6, 'Master', 'University of Pennsylvania', 'Human Resources', 2015, 3.7, '2024-08-22 11:20:47', '2024-08-22 18:20:47', NULL),
(18, 6, 'Certificate', 'SHRM', 'HR Management', 2016, 4, '2024-08-22 11:20:47', '2024-08-22 18:20:47', NULL),
(19, 7, 'Bachelor', 'University of Texas at San Antonio', 'Marketing', 2009, 3.5, '2024-08-22 11:20:47', '2024-08-22 18:20:47', NULL),
(20, 7, 'MBA', 'Texas A&M University', 'Business', 2011, 3.6, '2024-08-22 11:20:47', '2024-08-22 18:20:47', NULL),
(21, 7, 'Certificate', 'Salesforce', 'Sales Operations', 2013, 4, '2024-08-22 11:20:47', '2024-08-22 18:20:47', NULL),
(22, 8, 'Bachelor', 'San Diego State University', 'Communications', 2016, 3.7, '2024-08-22 11:20:47', '2024-08-22 18:20:47', NULL),
(23, 8, 'Master', 'University of Southern California', 'Digital Marketing', 2018, 3.8, '2024-08-22 11:20:47', '2024-08-22 18:20:47', NULL),
(24, 8, 'Certificate', 'Google', 'Digital Analytics', 2019, 4, '2024-08-22 11:20:47', '2024-08-22 18:20:47', NULL),
(25, 9, 'Bachelor', 'University of North Texas', 'Accounting', 2008, 3.9, '2024-08-22 11:20:47', '2024-08-22 18:20:47', NULL),
(26, 9, 'Master', 'Southern Methodist University', 'Finance', 2010, 3.8, '2024-08-22 11:20:47', '2024-08-22 18:20:47', NULL),
(27, 9, 'CPA', 'Texas State Board of Public Accountancy', 'Accounting', 2012, 4, '2024-08-22 11:20:47', '2024-08-22 18:20:47', NULL),
(28, 10, 'Associate', 'De Anza College', 'Liberal Arts', 2015, 3.5, '2024-08-22 11:20:47', '2024-08-22 18:20:47', NULL),
(29, 10, 'Bachelor', 'San Jose State University', 'Business', 2017, 3.6, '2024-08-22 11:20:47', '2024-08-22 18:20:47', NULL),
(30, 10, 'Certificate', 'Zendesk', 'Customer Service', 2018, 4, '2024-08-22 11:20:47', '2024-08-22 18:20:47', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(20) NOT NULL,
  `username` varchar(200) DEFAULT NULL,
  `full_name` varchar(255) DEFAULT NULL,
  `email` varchar(200) DEFAULT NULL,
  `role` varchar(200) DEFAULT NULL,
  `register_number` int(20) DEFAULT NULL,
  `place_of_birth` varchar(200) DEFAULT NULL,
  `date_of_birth` datetime DEFAULT NULL,
  `sex` enum('male','female') DEFAULT NULL,
  `religion` varchar(200) DEFAULT NULL,
  `blood_type` enum('A','AB','B','O') DEFAULT NULL,
  `status` enum('married','single') DEFAULT NULL,
  `register_address` varchar(200) DEFAULT NULL,
  `current_address` varchar(200) DEFAULT NULL,
  `phone_number` varchar(200) DEFAULT NULL,
  `emergency_name` varchar(200) DEFAULT NULL,
  `skill` longtext DEFAULT NULL,
  `availibilty_all_office` enum('YES','NO') DEFAULT NULL,
  `expected_salary` int(20) DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  `deleted_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `username`, `full_name`, `email`, `role`, `register_number`, `place_of_birth`, `date_of_birth`, `sex`, `religion`, `blood_type`, `status`, `register_address`, `current_address`, `phone_number`, `emergency_name`, `skill`, `availibilty_all_office`, `expected_salary`, `created_at`, `updated_at`, `deleted_at`) VALUES
(1, 'john_doe', 'John Doe', 'john@example.com', 'Developer', 1001, 'New York', '1990-05-15 00:00:00', 'male', 'Christian', 'A', 'single', '123 Main St, NY', '123 Main St, NY', '555-1234', 'Jane Doe', 'Python, JavaScript', 'YES', 75000, '2024-08-22 18:20:22', '2024-08-22 18:20:22', NULL),
(2, 'jane_smith', 'Jane Smith', 'jane@example.com', 'Designer', 1002, 'Los Angeles', '1992-08-20 00:00:00', 'female', 'Buddhist', 'B', 'married', '456 Elm St, LA', '456 Elm St, LA', '555-5678', 'John Smith', 'Photoshop, Illustrator', 'NO', 70000, '2024-08-22 18:20:22', '2024-08-22 18:20:22', NULL),
(3, 'mike_johnson', 'Mike Johnson', 'mike@example.com', 'Manager', 1003, 'Chicago', '1985-03-10 00:00:00', 'male', 'Muslim', 'O', 'married', '789 Oak St, CH', '789 Oak St, CH', '555-9012', 'Sarah Johnson', 'Leadership, Project Management', 'YES', 90000, '2024-08-22 18:20:22', '2024-08-22 18:20:22', NULL),
(4, 'emily_brown', 'Emily Brown', 'emily@example.com', 'Analyst', 1004, 'Houston', '1993-11-25 00:00:00', 'female', 'Hindu', 'AB', 'single', '101 Pine St, HO', '101 Pine St, HO', '555-3456', 'David Brown', 'Data Analysis, SQL', 'YES', 65000, '2024-08-22 18:20:22', '2024-08-22 18:20:22', NULL),
(5, 'chris_wilson', 'Chris Wilson', 'chris@example.com', 'Engineer', 1005, 'Phoenix', '1988-07-05 00:00:00', 'male', 'Jewish', 'A', 'single', '202 Cedar St, PH', '202 Cedar St, PH', '555-7890', 'Lisa Wilson', 'Java, C++', 'NO', 80000, '2024-08-22 18:20:22', '2024-08-22 18:20:22', NULL),
(6, 'sarah_lee', 'Sarah Lee', 'sarah@example.com', 'HR Specialist', 1006, 'Philadelphia', '1991-09-30 00:00:00', 'female', 'Christian', 'B', 'married', '303 Birch St, PH', '303 Birch St, PH', '555-2345', 'Tom Lee', 'Recruiting, Employee Relations', 'YES', 70000, '2024-08-22 18:20:22', '2024-08-22 18:20:22', NULL),
(7, 'david_taylor', 'David Taylor', 'david@example.com', 'Sales Rep', 1007, 'San Antonio', '1987-01-18 00:00:00', 'male', 'Atheist', 'O', 'single', '404 Maple St, SA', '404 Maple St, SA', '555-6789', 'Emma Taylor', 'Negotiation, CRM', 'YES', 75000, '2024-08-22 18:20:22', '2024-08-22 18:20:22', NULL),
(8, 'lisa_anderson', 'Lisa Anderson', 'lisa@example.com', 'Marketing Specialist', 1008, 'San Diego', '1994-04-12 00:00:00', 'female', 'Buddhist', 'A', 'single', '505 Walnut St, SD', '505 Walnut St, SD', '555-0123', 'Mark Anderson', 'Social Media, Content Creation', 'NO', 68000, '2024-08-22 18:20:22', '2024-08-22 18:20:22', NULL),
(9, 'robert_martinez', 'Robert Martinez', 'robert@example.com', 'Accountant', 1009, 'Dallas', '1986-12-07 00:00:00', 'male', 'Catholic', 'AB', 'married', '606 Chestnut St, DA', '606 Chestnut St, DA', '555-4567', 'Maria Martinez', 'Financial Analysis, QuickBooks', 'YES', 72000, '2024-08-22 18:20:22', '2024-08-22 18:20:22', NULL),
(10, 'amanda_thomas', 'Amanda Thomas', 'amanda@example.com', 'Customer Service Rep', 1010, 'San Jose', '1995-06-22 00:00:00', 'female', 'Hindu', 'B', 'single', '707 Sycamore St, SJ', '707 Sycamore St, SJ', '555-8901', 'James Thomas', 'Communication, Problem Solving', 'YES', 60000, '2024-08-22 18:20:22', '2024-08-22 18:20:22', NULL);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `career_history`
--
ALTER TABLE `career_history`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user_id` (`user_id`);

--
-- Indexes for table `courses`
--
ALTER TABLE `courses`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user_id` (`user_id`);

--
-- Indexes for table `educations`
--
ALTER TABLE `educations`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user_id` (`user_id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `career_history`
--
ALTER TABLE `career_history`
  MODIFY `id` int(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=31;

--
-- AUTO_INCREMENT for table `courses`
--
ALTER TABLE `courses`
  MODIFY `id` int(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=31;

--
-- AUTO_INCREMENT for table `educations`
--
ALTER TABLE `educations`
  MODIFY `id` int(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=31;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `career_history`
--
ALTER TABLE `career_history`
  ADD CONSTRAINT `career_history_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`);

--
-- Constraints for table `courses`
--
ALTER TABLE `courses`
  ADD CONSTRAINT `courses_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`);

--
-- Constraints for table `educations`
--
ALTER TABLE `educations`
  ADD CONSTRAINT `educations_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
