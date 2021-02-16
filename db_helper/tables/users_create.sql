START TRANSACTION;
CREATE TABLE IF NOT EXISTS `users` (
    `id` int(11) NOT NULL AUTO_INCREMENT,
    `email` varchar(255) NOT NULL,
    `password` varchar(255) NOT NULL,
    `role_id` int(11) NOT NULL,
    `created_at` datetime NOT NULL,
    PRIMARY KEY (`id`)
) ENGINE = InnoDB DEFAULT CHARSET = utf8;
COMMIT;