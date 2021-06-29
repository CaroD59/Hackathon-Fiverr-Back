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

CREATE TABLE `Comments` (
  `id` int NOT NULL AUTO_INCREMENT,
  `author` varchar(255) NOT NULL,
  `datetime` DATETIME NOT NULL,
  `content` TEXT NULL,
  PRIMARY KEY(`id`)
);

CREATE TABLE IF NOT EXISTS `fiverr`.`profile_has_comments` (
  `profile_id` INT NOT NULL,
  `comments_id` INT NOT NULL,
  PRIMARY KEY (`profile_id`, `comments_id`),
  INDEX `fk_profile_has_comments_comments1_idx` (`comments_id` ASC) VISIBLE,
  INDEX `fk_profile_has_comments_profile1_idx` (`profile_id` ASC) VISIBLE,
  CONSTRAINT `fk_profile_has_comments_profile1`
    FOREIGN KEY (`profile_id`)
    REFERENCES `fiverr`.`profile` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_profile_has_comments_comments1`
    FOREIGN KEY (`comments_id`)
    REFERENCES `fiverr`.`comments` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;