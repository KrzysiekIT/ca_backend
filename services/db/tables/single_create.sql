START TRANSACTION;
CREATE TABLE IF NOT EXISTS `single` (
    `id` int(11) NOT NULL AUTO_INCREMENT,
    `name` TEXT,
    `body` MEDIUMTEXT,
    PRIMARY KEY (`id`)
) ENGINE = InnoDB DEFAULT CHARSET = utf8;
COMMIT;