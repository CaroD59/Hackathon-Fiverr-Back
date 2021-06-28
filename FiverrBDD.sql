CREATE DATABASE Fiverr;
USE Fiverr;

CREATE TABLE `Profile` (
  `id` int NOT NULL AUTO_INCREMENT,
  `firstname` varchar(255) NOT NULL,
  `lastname` varchar(255) NOT NULL,
  `avatar` varchar(255) NOT NULL,
  `age` varchar(255) NULL,
  `github_url` varchar(255) NOT NULL,
  `linkedin_url` varchar(255) NOT NULL,
  `description` varchar(255) NOT NULL,
  `technos` varchar(255) NOT NULL,
  PRIMARY KEY(`id`)
);