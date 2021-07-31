START TRANSACTION;
INSERT INTO `files` (
        `id`,
        `description_pl`,
        `description_en`,
        `name`,
        `folder_id`
    )
VALUES (
        1,
        "Bądź szczęśliwy",
        'Be happy',
        "test.pdf",
        4
    ),
    (
        2,
        "Obudź mnie",
        'Wake me up',
        "test.pdf",
        4
    ),
    (3, "DOTA", 'DOTA', "test.pdf", 4),
    (4, "Cukier", 'Sugar', "test.pdf", 4),
    (
        5,
        "Najlepszy film ever",
        'YMCA',
        "test.pdf",
        4
    ),
    (
        6,
        "Najlepszy film ever",
        'The best movie ever',
        "test.pdf",
        4
    ),
    (
        7,
        "Najlepszy film ever",
        'La Vida Loca',
        "test.pdf",
        4
    ),
    (
        8,
        "Najlepszy film ever",
        'The best movie ever',
        "test.pdf",
        4
    ),
    (9, "Cola", 'Cola', "test.pdf", 4),
    (
        10,
        "Najlepszy film ever",
        'The best movie ever',
        "test.pdf",
        2
    ),
    (
        11,
        "Najlepszy film ever",
        'The best movie ever',
        "test.pdf",
        5
    ),
    (
        12,
        "Najlepszy film ever",
        'The best movie ever',
        "test.pdf",
        4
    ),
    (
        13,
        "Najlepszy film ever",
        'The best movie ever',
        "test.pdf",
        4
    );
COMMIT;