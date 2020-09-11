CREATE DATABASE IF NOT EXISTS `registrationdb` DEFAULT CHARACTER SET UTF8 COLLATE UTF8_GENERAL_CI;
USE `registrationdb`;

CREATE TABLE IF NOT EXISTS `employees` (
	`id` INT(11) NOT NULL,
	`firstname` VARCHAR(255) NOT NULL,
	`lastname` VARCHAR(255) NOT NULL,
	`location` VARCHAR(55) NOT NULL,
	`age` VARCHAR(55) NOT NULL,
	`email` VARCHAR(255) NOT NULL,
	`phonenumber` INT(12) NOT NULL 
) ENGINE=INNODB AUTO_INCREMENT=2 DEFAULT CHARSET=UTF8;

INSERT INTO `employees` (`id`, `firstname`, `lastname`, `location`, `age`, `email`, `phonenumber`) VALUES (1, 'test', 'testtest', 'testlocation', 12, 'test@gmail.com', 0700000000);

ALTER TABLE `employees` ADD PRIMARY KEY (`id`);
ALTER TABLE `employees` MODIFY `id` INT(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;