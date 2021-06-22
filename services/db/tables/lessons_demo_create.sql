START TRANSACTION;
CREATE TABLE IF NOT EXISTS `lessons_demo` (
    `id` int(11) NOT NULL AUTO_INCREMENT,
    `day` varchar(255) DEFAULT "",
    `hour` varchar(255) DEFAULT "",
    `link` varchar(255) DEFAULT "",
    `trainer_id` int(11) DEFAULT 3,
    `students_number` int(11) NOT NULL,
    PRIMARY KEY (`id`),
    FOREIGN KEY (`trainer_id`) REFERENCES `users`(`id`)
) ENGINE = InnoDB DEFAULT CHARSET = utf8;
COMMIT;