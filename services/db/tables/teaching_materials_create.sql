START TRANSACTION;
CREATE TABLE IF NOT EXISTS `teaching_materials` (
    `id` int(11) NOT NULL AUTO_INCREMENT,
    `parent_id` int(11) DEFAULT NULL,
    `name` varchar(255) DEFAULT "",
    `link` varchar(255) DEFAULT NULL,
    `type` ENUM('folder', 'file', 'movie') NOT NULL,
    PRIMARY KEY (`id`),
    FOREIGN KEY (`parent_id`) REFERENCES `teaching_materials`(`id`)
) ENGINE = InnoDB DEFAULT CHARSET = utf8;
COMMIT;