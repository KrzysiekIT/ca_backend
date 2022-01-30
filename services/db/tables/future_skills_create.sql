START TRANSACTION;
CREATE TABLE IF NOT EXISTS `future_skills` (
    `id` int(11) NOT NULL AUTO_INCREMENT,
    `parent_id` int(11) DEFAULT NULL,
    `name` varchar(255) DEFAULT "",
    `type` ENUM('folder', 'file') NOT NULL,
    PRIMARY KEY (`id`),
    FOREIGN KEY (`parent_id`) REFERENCES `future_skills`(`id`)
) ENGINE = InnoDB DEFAULT CHARSET = utf8;
COMMIT;