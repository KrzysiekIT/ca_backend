START TRANSACTION;
INSERT INTO `roles` (`id`, `bit`, `name`)
VALUES (1, 1, 'superadmin');
INSERT INTO `roles` (`id`, `bit`, `name`)
VALUES (2, 2, 'admin');
INSERT INTO `roles` (`id`, `bit`, `name`)
VALUES (3, 4, 'trainer');
INSERT INTO `roles` (`id`, `bit`, `name`)
VALUES (4, 8, 'student');
COMMIT;