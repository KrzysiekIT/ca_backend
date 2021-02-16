START TRANSACTION;
CREATE TABLE IF NOT EXISTS `payments` (
    `id` int(11) NOT NULL AUTO_INCREMENT,
    `user_id` int(11) NOT NULL,
    `amount` double(16,2) NOT NULL,
    `order` int(11) NOT NULL,
    `created_at` datetime NOT NULL,
    PRIMARY KEY (`id`),
    FOREIGN KEY (`user_id`) REFERENCES `users`(`id`)
) ENGINE = InnoDB DEFAULT CHARSET = utf8;
COMMIT;