START TRANSACTION;
INSERT INTO `lessons` (
        `id`,
        `group_id`,
        `date`,
        `month_number`,
        `order_in_month`
    )
VALUES (1, 1, '2012-01-01 13:17:17', 1, 1),
    (2, 1, '2012-01-03 13:17:17', 1, 2),
    (3, 1, '2012-01-08 13:17:17', 1, 3),
    (4, 1, '2012-01-15 13:17:17', 1, 4),
    (5, 1, '2012-01-22 13:17:17', 1, 5),
    (6, 1, '2012-01-29 13:17:17', 2, 1),
    (7, 1, '2012-02-03 13:17:17', 2, 2),
    (8, 1, '2012-02-10 13:17:17', 2, 3),
    (9, 1, '2012-02-17 13:17:17', 2, 4),
    (10, 1, '2012-02-24 13:17:17', 3, 1),
    (11, 1, '2012-03-01 13:17:17', 3, 2),
    (12, 1, '2012-03-08 13:17:17', 3, 3),
    (13, 1, '2012-03-15 13:17:17', 3, 4),
    (14, 1, '2012-03-22 13:17:17', 4, 1),
    (15, 1, '2012-03-29 13:17:17', 4, 2),
    (16, 1, '2013-04-05 13:17:17', 4, 3),
    (17, 1, '2013-04-12 13:17:17', 4, 4),
    (18, 1, '2013-04-19 13:17:17', 5, 1),
    (19, 1, '2013-04-26 13:17:17', 5, 2);
COMMIT;