START TRANSACTION;
CREATE TABLE IF NOT EXISTS `abacus` (
    `id` int(11) NOT NULL AUTO_INCREMENT,
    `lesson_number` int(11) NOT NULL,
    `year` int(11) NOT NULL,
    `title_pl` varchar(255) DEFAULT "",
    `title_en` varchar(255) DEFAULT "",
    PRIMARY KEY (`id`)
) ENGINE = InnoDB DEFAULT CHARSET = utf8;
COMMIT;