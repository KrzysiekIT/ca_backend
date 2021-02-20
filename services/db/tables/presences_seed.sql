START TRANSACTION;
INSERT INTO `presences` (`id`, `lesson_id`, `student_id`, `status`)
VALUES (1, 2, 1, 0),
    (2, 2, 2, 2);
COMMIT;