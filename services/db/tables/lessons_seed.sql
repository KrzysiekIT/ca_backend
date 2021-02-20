START TRANSACTION;
INSERT INTO `lessons` (
        `id`,
        `group_id`,
        `date`,
        `month`,
        `order_in_month`
    )
VALUES (1, 1, NOW(), 1, 1),
    (2, 1, NOW(), 2, 2);
COMMIT;