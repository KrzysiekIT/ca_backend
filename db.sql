START TRANSACTION;
SET time_zone = "+00:00";
CREATE TABLE `users` (
    `id` int(11) NOT NULL,
    `email` varchar(255) NOT NULL,
    `password` varchar(255) NOT NULL,
    `created_at` datetime NOT NULL
) ENGINE = InnoDB DEFAULT CHARSET = utf8;
INSERT INTO `users` (`id`, `email`, `password`, `created_at`)
VALUES (
        1,
        'admin@test.com',
        '$2a$10$pyMYtPfIvE.PAboF3cIx9.IsyW73voMIRxFINohzgeV0I2BxwnrEu',
        '2018-01-21 00:00:00'
    );
ALTER TABLE `users`
ADD PRIMARY KEY (`id`),
    ADD UNIQUE KEY `email` (`email`);
ALTER TABLE `users`
MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,
    AUTO_INCREMENT = 2;
COMMIT;