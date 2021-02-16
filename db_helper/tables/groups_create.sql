START TRANSACTION;
CREATE TABLE IF NOT EXISTS `groups` (
    `id` int(11) NOT NULL AUTO_INCREMENT,
    `trainer_id` int(11) NOT NULL,
    `lesson_day` tinyint(3),
    `lesson_hour` varchar(255),
    `lesson_link` varchar(255),
    PRIMARY KEY (`id`),
    FOREIGN KEY (`trainer_id`) REFERENCES `users`(`id`)
) ENGINE = InnoDB DEFAULT CHARSET = utf8;
COMMIT;