CREATE SCHEMA animations; 

USE animations;

CREATE TABLE `animation` (
	`name` VARCHAR(70) NULL DEFAULT NULL,
	`description` VARCHAR(50) NULL DEFAULT NULL
);

COLLATE='utf8_general_ci';
