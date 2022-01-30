START TRANSACTION;
INSERT INTO `future_skills` (
        `id`,
        `parent_id`,
        `name`,
        `type`
    )
VALUES (
        1,
        NULL,
        "testowy plik",
        "file"
    ),
    (
        2,
        NULL,
        "testowy folder",
        "folder"
    ),
    (
        3,
        2,
        "testowy podfolder",
        "folder"
    ),
    (
        4,
        2,
        "testowy podplik",
        "file"
    ),
    (
        5,
        NULL,
        "testowy folder2",
        "folder"
    );
COMMIT;