CREATE SCHEMA animations; 

USE animations;

CREATE TABLE `animation` (
	`name` VARCHAR(50) NOT NULL PRIMARY KEY DEFAULT '0',
	`description` VARCHAR(50) NULL DEFAULT NULL
);

CREATE TABLE `animation_version` (
	`username` CHAR(10) NOT NULL PRIMARY KEY DEFAULT '0',
	`description_version` CHAR(10) NOT NULL,
) 
COLLATE='utf8_general_ci';

INSERT INTO `animation_version` VALUES ('animation', '2020.06.03-0.08.7')
INSERT INTO `animation_version` VALUES ('api', '2020.06.03-0v1')