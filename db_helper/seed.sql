START TRANSACTION;
SET time_zone = "+00:00";
CREATE TABLE IF NOT EXISTS `roles` (
    `id` int(11) NOT NULL,
    `bit` int(11) NOT NULL,
    `name` varchar(50) NOT NULL
) ENGINE = InnoDB DEFAULT CHARSET = utf8;
INSERT INTO `roles` (`id`, `bit`, `name`)
VALUES (1, 1, 'superadmin');
INSERT INTO `roles` (`id`, `bit`, `name`)
VALUES (2, 2, 'admin');
INSERT INTO `roles` (`id`, `bit`, `name`)
VALUES (3, 4, 'trainer');
INSERT INTO `roles` (`id`, `bit`, `name`)
VALUES (4, 8, 'student');
ALTER TABLE `roles`
ADD PRIMARY KEY (`id`),
    ADD UNIQUE KEY `name` (`name`);
ALTER TABLE `roles`
MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,
    AUTO_INCREMENT = 5;
SET time_zone = "+00:00";
CREATE TABLE IF NOT EXISTS `users` (
    `id` int(11) NOT NULL,
    `email` varchar(255) NOT NULL,
    `password` varchar(255) NOT NULL,
    `role_id` int(11) NOT NULL,
    `created_at` datetime NOT NULL
) ENGINE = InnoDB DEFAULT CHARSET = utf8;
INSERT INTO `users` (
        `id`,
        `email`,
        `password`,
        `role_id`,
        `created_at`
    )
VALUES (
        1,
        'superadmin@test.com',
        '$2a$10$pyMYtPfIvE.PAboF3cIx9.IsyW73voMIRxFINohzgeV0I2BxwnrEu',
        1,
        '2018-01-21 00:00:00'
    );
INSERT INTO `users` (
        `id`,
        `email`,
        `password`,
        `role_id`,
        `created_at`
    )
VALUES (
        2,
        'admin@test.com',
        '$2a$10$pyMYtPfIvE.PAboF3cIx9.IsyW73voMIRxFINohzgeV0I2BxwnrEu',
        2,
        '2018-01-21 00:00:00'
    );
INSERT INTO `users` (
        `id`,
        `email`,
        `password`,
        `role_id`,
        `created_at`
    )
VALUES (
        3,
        'trainer@test.com',
        '$2a$10$pyMYtPfIvE.PAboF3cIx9.IsyW73voMIRxFINohzgeV0I2BxwnrEu',
        3,
        '2018-01-21 00:00:00'
    );
INSERT INTO `users` (
        `id`,
        `email`,
        `password`,
        `role_id`,
        `created_at`
    )
VALUES (
        4,
        'student@test.com',
        '$2a$10$pyMYtPfIvE.PAboF3cIx9.IsyW73voMIRxFINohzgeV0I2BxwnrEu',
        4,
        '2018-01-21 00:00:00'
    );
ALTER TABLE `users`
ADD PRIMARY KEY (`id`),
    ADD UNIQUE KEY `email` (`email`);
ALTER TABLE `users`
MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,
    AUTO_INCREMENT = 2;
ALTER TABLE `users`
ADD FOREIGN KEY (`role_id`) REFERENCES roles(id);
COMMIT;