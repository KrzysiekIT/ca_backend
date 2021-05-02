START TRANSACTION;
CREATE TABLE IF NOT EXISTS `groups` (
    `id` int(11) NOT NULL AUTO_INCREMENT,
    `level` tinyint(3) DEFAULT 1,
    `label` varchar(255)  DEFAULT "",
    `trainer_id` int(11)  DEFAULT 3,
    `lesson_day` tinyint(3) DEFAULT 1,
    `lesson_hour` varchar(255) DEFAULT "",
    `lesson_tool` varchar(255) DEFAULT "",
    `lesson_link` varchar(255) DEFAULT "",
    PRIMARY KEY (`id`),
    FOREIGN KEY (`trainer_id`) REFERENCES `users`(`id`)
) ENGINE = InnoDB DEFAULT CHARSET = utf8;
COMMIT;