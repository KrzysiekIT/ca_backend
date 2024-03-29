START TRANSACTION;
INSERT INTO `users` (
        `id`,
        `email`,
        `password`,
        `name`,
        `surname`,
        `birth_year`,
        `phone_number`,
        `street`,
        `city`,
        `postal_code`,
        `parent_full_name`,
        `parent_email`,
        `parent_phone_number`,
        `status`,
        `start_at`,
        `role_id`,
        `created_at`,
        `group_id`,
        `terms_accepted`,
        `link_sent`
    )
VALUES (
        1,
        'superadmin@test.com',
        '$2a$10$pyMYtPfIvE.PAboF3cIx9.IsyW73voMIRxFINohzgeV0I2BxwnrEu',
        'Super',
        'Admin',
        1995,
        '111111111',
        'Nowa',
        'Nowy Jork',
        '51-222',
        'Michał Jakubowski',
        'michal@gmaiilc.om',
        '123123123',
        1,
        '2021-08-22 00:00:00',
        1,
        '2021-08-22 00:00:00',
        1,
        0,
        0
    ),
    (
        2,
        'admin@test.com',
        '$2a$10$pyMYtPfIvE.PAboF3cIx9.IsyW73voMIRxFINohzgeV0I2BxwnrEu',
        'Normal',
        'Admin',
        1995,
        '111111111',
        'Nowa',
        'Nowy Jork',
        '51-222',
        'Michał Jakubowski',
        'michal@gmaiilc.om',
        '123123123',
        1,
        '2021-12-22 00:00:00',
        2,
        '2021-12-22 00:00:00',
        1,
        0,
        1
    ),
    (
        3,
        'trainer@test.com',
        '$2a$10$pyMYtPfIvE.PAboF3cIx9.IsyW73voMIRxFINohzgeV0I2BxwnrEu',
        'Normal',
        'Trainer',
        1995,
        '111111111',
        'Nowa',
        'Nowy Jork',
        '51-222',
        'Michał Jakubowski',
        'michal@gmaiilc.om',
        '123123123',
        1,
        '2021-01-12 00:00:00',
        3,
        '2021-01-12 00:00:00',
        1,
        0,
        1
    ),
    (
        4,
        'student@test.com',
        '$2a$10$pyMYtPfIvE.PAboF3cIx9.IsyW73voMIRxFINohzgeV0I2BxwnrEu',
        'Mikołaj',
        'Nowak',
        2001,
        '602 211 222',
        'Nowa',
        'Nowy Jork',
        '51-222',
        'Michał Jakubowski',
        'michal@gmaiilc.om',
        '123123123',
        1,
        '2021-08-22 00:00:00',
        4,
        '2021-08-22 00:00:00',
        1,
        0,
        1
    ),
    (
        5,
        'monika@test.com',
        '$2a$10$pyMYtPfIvE.PAboF3cIx9.IsyW73voMIRxFINohzgeV0I2BxwnrEu',
        'Monika',
        'Bródka',
        2000,
        '111111111',
        'Nowa',
        'Nowy Jork',
        '51-222',
        'Jan Bródek',
        'brodek@gmaiilc.om',
        '423423411',
        1,
        '2021-12-22 00:00:00',
        4,
        '2021-08-22 00:00:00',
        1,
        0,
        1
    ),
    (
        6,
        'monika@test.com',
        '$2a$10$pyMYtPfIvE.PAboF3cIx9.IsyW73voMIRxFINohzgeV0I2BxwnrEu',
        'Monika',
        'Bródka',
        2000,
        '111111111',
        'Nowa',
        'Nowy Jork',
        '51-222',
        'Jan Bródek',
        'brodek@gmaiilc.om',
        '423423411',
        1,
        '2021-03-22 00:00:00',
        4,
        '2021-03-22 00:00:00',
        1,
        0,
        0
    ),
    (
        7,
        'trainer@test.com',
        '$2a$10$pyMYtPfIvE.PAboF3cIx9.IsyW73voMIRxFINohzgeV0I2BxwnrEu',
        'Next',
        'Let do this',
        1995,
        '111111111',
        'Nowa',
        'Nowy Jork',
        '51-222',
        'Michał Jakubowski',
        'michal@gmaiilc.om',
        '123123123',
        1,
        '2021-07-22 00:00:00',
        3,
        '2021-07-22 00:00:00',
        2,
        0,
        1
    ),
    (
        8,
        'jan@test.com',
        '$2a$10$pyMYtPfIvE.PAboF3cIx9.IsyW73voMIRxFINohzgeV0I2BxwnrEu',
        'Jan',
        'Kowalski',
        1995,
        '111111111',
        'Nowa',
        'Nowy Jork',
        '51-222',
        'Michał Jakubowski',
        'michal@gmaiilc.om',
        '123123123',
        1,
        '2021-08-22 00:00:00',
        4,
        '2021-08-22 00:00:00',
        1,
        0,
        0
    ),
    (
        9,
        'krzykarc@gmail.com',
        '$2a$10$pyMYtPfIvE.PAboF3cIx9.IsyW73voMIRxFINohzgeV0I2BxwnrEu',
        'Krzysztof',
        'Karczewski',
        1996,
        '111111111',
        'Nowa',
        'Nowy Jork',
        '51-222',
        'Henryk Karczewski',
        'Henryk@truskawki.roza',
        '123456789',
        1,
        '2018-01-21 00:00:00',
        4,
        '2018-01-21 00:00:00',
        1,
        0,
        0
    );
COMMIT;