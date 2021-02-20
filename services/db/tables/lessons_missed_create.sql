START TRANSACTION;
CREATE TABLE IF NOT EXISTS `lessons_missed` (
    `id` int(11) NOT NULL AUTO_INCREMENT,
    `presence_id` int(11) NOT NULL,
    `date` datetime,
    PRIMARY KEY (`id`),
    FOREIGN KEY (`presence_id`) REFERENCES `presences`(`id`)
) ENGINE = InnoDB DEFAULT CHARSET = utf8;
COMMIT;