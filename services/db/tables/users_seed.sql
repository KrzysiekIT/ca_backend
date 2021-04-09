START TRANSACTION;
INSERT INTO `users` (
        `id`,
        `email`,
        `password`,
        `name`,
        `surname`,
        `phone`,
        `role_id`,
        `created_at`,
        `group_id`,
        `terms_accepted`
    )
VALUES (
        1,
        'superadmin@test.com',
        '$2a$10$pyMYtPfIvE.PAboF3cIx9.IsyW73voMIRxFINohzgeV0I2BxwnrEu',
        'Super',
        'Admin',
        '111111111',
        1,
        '2018-01-21 00:00:00',
        1,
        0
    ),
    (
        2,
        'admin@test.com',
        '$2a$10$pyMYtPfIvE.PAboF3cIx9.IsyW73voMIRxFINohzgeV0I2BxwnrEu',
        'Normal',
        'Admin',
        '222222222',
        2,
        '2018-01-21 00:00:00',
        1,
        0
    ),
    (
        3,
        'trainer@test.com',
        '$2a$10$pyMYtPfIvE.PAboF3cIx9.IsyW73voMIRxFINohzgeV0I2BxwnrEu',
        'Normal',
        'Trainer',
        '333333333',
        3,
        '2018-01-21 00:00:00',
        1,
        0
    ),
    (
        4,
        'student@test.com',
        '$2a$10$pyMYtPfIvE.PAboF3cIx9.IsyW73voMIRxFINohzgeV0I2BxwnrEu',
        'Normal',
        'Student',
        '444444444',
        4,
        '2018-01-21 00:00:00',
        1,
        0
    ),
    (
        5,
        'jan@test.com',
        '$2a$10$pyMYtPfIvE.PAboF3cIx9.IsyW73voMIRxFINohzgeV0I2BxwnrEu',
        'Jan',
        'Kowalski',
        '602321034',
        4,
        '2018-01-21 00:00:00',
        1,
        0
    );
COMMIT;