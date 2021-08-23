START TRANSACTION;
INSERT INTO `payments` (`user_id`, `amount`, `order_number`, `created_at`)
VALUES (5, 100, 1, NOW()),
    (5, 100, 2, NOW()),
    (5, 100, 3, NOW()),
    (5, 100, 4, NOW()),
    (5, 100, 6, '2018-01-21 00:00:00'),
    (4, 100, 2, NOW()),
    (5, 122, 5, '2021-12-22 00:00:00'),
    (6, 101, 1, '2021-03-22 00:00:00'),
    (7, 100, 1, NOW()),
    (9, 100, 1, NOW());
COMMIT;