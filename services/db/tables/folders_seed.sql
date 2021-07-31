START TRANSACTION;
INSERT INTO `folders` (
        `id`,
        `label`
    )
VALUES (
        1,
        "Abacus"
    ),
    (
        2,
        "Anzan"
    ),
    (
        3,
        "Supermemory"
    ),
    (
        4,
        "Fast reading"
    ),
    (
        5,
        "Slow reading"
    );
COMMIT;