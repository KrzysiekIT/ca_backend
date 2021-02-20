START TRANSACTION;
INSERT INTO `roles` (`id`, `bit`, `name`)
VALUES (1, 1, 'superadmin'),
    (2, 2, 'admin'),
    (3, 4, 'trainer'),
    (4, 8, 'student');
COMMIT;