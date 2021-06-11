START TRANSACTION;
INSERT INTO `files` (
        `id`,
        `description_pl`,
        `description_en`,
        `name`,
        `exercise`
    )
VALUES (
        1,
        "Bądź szczęśliwy",
        'Be happy',
        "test.pdf",
        "fast_reading"
    ),
    (
        2,
        "Obudź mnie",
        'Wake me up',
        "test.pdf",
        "fast_reading"
    ),
    (3, "DOTA", 'DOTA', "test.pdf", "fast_reading"),
    (4, "Cukier", 'Sugar', "test.pdf", "fast_reading"),
    (
        5,
        "Najlepszy film ever",
        'YMCA',
        "test.pdf",
        "fast_reading"
    ),
    (
        6,
        "Najlepszy film ever",
        'The best movie ever',
        "test.pdf",
        "fast_reading"
    ),
    (
        7,
        "Najlepszy film ever",
        'La Vida Loca',
        "test.pdf",
        "fast_reading"
    ),
    (
        8,
        "Najlepszy film ever",
        'The best movie ever',
        "test.pdf",
        "fast_reading"
    ),
    (9, "Cola", 'Cola', "test.pdf", "fast_reading"),
    (
        10,
        "Najlepszy film ever",
        'The best movie ever',
        "test.pdf",
        "fast_reading"
    ),
    (
        11,
        "Najlepszy film ever",
        'The best movie ever',
        "test.pdf",
        "fast_reading"
    ),
    (
        12,
        "Najlepszy film ever",
        'The best movie ever',
        "test.pdf",
        "fast_reading"
    ),
    (
        13,
        "Najlepszy film ever",
        'The best movie ever',
        "test.pdf",
        "fast_reading"
    );
COMMIT;