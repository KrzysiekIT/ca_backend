START TRANSACTION;
INSERT INTO `teaching_materials` (
        `id`,
        `parent_id`,
        `name`,
        `link`,
        `type`
    )
VALUES (
        1,
        NULL,
        "testowy plik",
        NULL,
        "file"
    ),
    (
        2,
        NULL,
        "Filmy",
        NULL,
        "folder"
    ),
    (
        3,
        NULL,
        "testowy folder",
        NULL,
        "folder"
    ),
    (
        4,
        3,
        "testowy podplik",
        NULL,
        "file"
    ),
    (
        5,
        3,
        "testowy folder2",
        NULL,
        "folder"
    ),
    (
        6,
        2,
        "Be happy",
        "https://www.youtube.com/watch?v=ZbZSe6N_BXs",
        "movie"
    ),
    (
        7,
        2,
        "Wake me up",
        "https://www.youtube.com/watch?v=pIgZ7gMze7A",
        "movie"
    ),
    (
        8,
        2,
        "YMCA",
        "https://www.youtube.com/watch?v=CS9OO0S5w2k",
        "movie"
    ),
    (
        9,
        2,
        "La Vida Loca",
        "https://www.youtube.com/watch?v=p47fEXGabaY",
        "movie"
    ),
    (
        10,
        2,
        "Random movie",
        "https://www.youtube.com/watch?v=OPf0YbXqDm0",
        "movie"
    ),
    (
        11,
        2,
        "Kolejny random",
        "https://www.youtube.com/watch?v=QNJL6nfu__Q",
        "movie"
    ),
    (
        12,
        2,
        "Ostatni random",
        "https://www.youtube.com/watch?v=ZbZSe6N_BXs",
        "movie"
    ),
    (
        13,
        NULL,
        "Filmy",
        NULL,
        "folder"
    ),
    (
        14,
        3,
        "Testowy folder",
        NULL,
        "folder"
    );
COMMIT;