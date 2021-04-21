START TRANSACTION;
CREATE TABLE IF NOT EXISTS `users` (
    `id` int(11) NOT NULL AUTO_INCREMENT,
    `email` varchar(255),
    `password` varchar(255),
    `name` varchar(255),
    `surname` varchar(255),
    `birth_year` int(11),
    `phone` varchar(255),
    `role_id` int(11) NOT NULL,
    `created_at` datetime DEFAULT CURRENT_TIMESTAMP,
    `group_id` int(11) DEFAULT NULL,
    `terms_accepted` tinyint(1) DEFAULT 0,
    PRIMARY KEY (`id`),
    FOREIGN KEY (`role_id`) REFERENCES `roles`(`id`),
    FOREIGN KEY (`group_id`) REFERENCES `groups`(`id`)
) ENGINE = InnoDB DEFAULT CHARSET = utf8;
COMMIT;