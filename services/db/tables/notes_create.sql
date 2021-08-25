START TRANSACTION;
CREATE TABLE IF NOT EXISTS `notes` (
    `user_id` int(11) NOT NULL,
    `lesson_name` varchar(255) DEFAULT "",
    `lesson_number` int(11) NOT NULL,
    `note` MEDIUMTEXT,
    PRIMARY KEY (`user_id`, `lesson_name`, `lesson_number`),
    FOREIGN KEY (`user_id`) REFERENCES `users`(`id`)
) ENGINE = InnoDB DEFAULT CHARSET = utf8;
COMMIT;