START TRANSACTION;
CREATE TABLE IF NOT EXISTS `movies` (
    `id` int(11) NOT NULL AUTO_INCREMENT,
    `description_pl` varchar(255) DEFAULT "",
    `description_en` varchar(255) DEFAULT "",
    `link` varchar(255) DEFAULT "",
    `exercise` varchar(255) DEFAULT "",
    PRIMARY KEY (`id`)
) ENGINE = InnoDB DEFAULT CHARSET = utf8;
COMMIT;