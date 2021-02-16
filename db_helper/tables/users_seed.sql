START TRANSACTION;
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
COMMIT;