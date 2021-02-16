START TRANSACTION;
INSERT INTO `students` (`id`, `user_id`, `group_id`, `terms_accepted`)
VALUES (1, 4, 1, 0),
    (2, 5, 1, 1);
COMMIT;