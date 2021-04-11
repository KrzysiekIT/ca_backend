START TRANSACTION;
CREATE TABLE IF NOT EXISTS `lessons` (
    `id` int(11) NOT NULL AUTO_INCREMENT,
    `group_id` int(11) NOT NULL,
    `month_number` tinyint(4),
    `order_in_month` int(11) NOT NULL,
    `date` datetime,
    PRIMARY KEY (`id`),
    FOREIGN KEY (`group_id`) REFERENCES `groups`(`id`)
) ENGINE = InnoDB DEFAULT CHARSET = utf8;
COMMIT;