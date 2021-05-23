START TRANSACTION;
CREATE TABLE IF NOT EXISTS `payments` (
    `user_id` int(11) NOT NULL,
    `amount` double(16,2) NOT NULL,
    `order_number` int(11) NOT NULL,
    `created_at` datetime NOT NULL,
    PRIMARY KEY (`user_id`, `order_number`),
    FOREIGN KEY (`user_id`) REFERENCES `users`(`id`)
) ENGINE = InnoDB DEFAULT CHARSET = utf8;
COMMIT;