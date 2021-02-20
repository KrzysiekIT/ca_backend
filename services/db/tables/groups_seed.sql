START TRANSACTION;
INSERT INTO `groups` (`id`, `trainer_id`, `lesson_day`, `lesson_hour`, `lesson_link`)
VALUES (1, 3, 4, '18:00', 'https://google.com'),
    (2, 3, 5, '11:15', 'https://google.pl');
COMMIT;