START TRANSACTION;
INSERT INTO `payments` (`id`, `user_id`, `amount`, `order`, `created_at`)
VALUES (1, 5, 100, 1, NOW()),
    (2, 5, 100, 2, NOW());
COMMIT;