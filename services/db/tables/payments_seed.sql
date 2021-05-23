START TRANSACTION;
INSERT INTO `payments` (`user_id`, `amount`, `order_number`, `created_at`)
VALUES (5, 100, 1, NOW()),
    (5, 100, 2, NOW()),
    (5, 100, 3, NOW()),
    (5, 100, 4, NOW()),
    (5, 100, 5, NOW());
COMMIT;