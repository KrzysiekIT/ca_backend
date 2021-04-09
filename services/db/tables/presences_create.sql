START TRANSACTION;
CREATE TABLE IF NOT EXISTS `presences` (
    `id` int(11) NOT NULL AUTO_INCREMENT,
    `lesson_id` int(11) NOT NULL,
    `user_id` int(11) NOT NULL,
    `status` tinyint(2) NOT NULL,
    PRIMARY KEY (`id`),
    FOREIGN KEY (`lesson_id`) REFERENCES `lessons`(`id`),
    FOREIGN KEY (`user_id`) REFERENCES `users`(`id`)
) ENGINE = InnoDB DEFAULT CHARSET = utf8;
COMMIT;