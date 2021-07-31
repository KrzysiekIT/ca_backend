START TRANSACTION;
CREATE TABLE IF NOT EXISTS `files` (
    `id` int(11) NOT NULL AUTO_INCREMENT,
    `description_pl` varchar(255) DEFAULT "",
    `description_en` varchar(255) DEFAULT "",
    `name` varchar(255) DEFAULT "",
    `folder_id` int(11) NOT NULL,
    PRIMARY KEY (`id`)
) ENGINE = InnoDB DEFAULT CHARSET = utf8;
COMMIT;