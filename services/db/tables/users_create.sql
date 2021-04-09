START TRANSACTION;
CREATE TABLE IF NOT EXISTS `users` (
    `id` int(11) NOT NULL AUTO_INCREMENT,
    `email` varchar(255) NOT NULL,
    `password` varchar(255) NOT NULL,
    `name` varchar(255) NOT NULL,
    `surname` varchar(255) NOT NULL,
    `phone` varchar(255) NOT NULL,
    `role_id` int(11) NOT NULL,
    `created_at` datetime NOT NULL,
    `group_id` int(11) DEFAULT NULL,
    `terms_accepted` tinyint(1) DEFAULT 0,
    PRIMARY KEY (`id`),
    FOREIGN KEY (`role_id`) REFERENCES `roles`(`id`),
    FOREIGN KEY (`group_id`) REFERENCES `groups`(`id`)
) ENGINE = InnoDB DEFAULT CHARSET = utf8;
COMMIT;