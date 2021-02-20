START TRANSACTION;
INSERT INTO `lessons_missed` (`id`, `presence_id`, `date`)
VALUES (1, 1, NOW()),
    (2, 2, NOW());
COMMIT;