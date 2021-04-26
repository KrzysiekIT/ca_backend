START TRANSACTION;
INSERT INTO `groups` (`id`, `label`, `trainer_id`, `lesson_day`, `lesson_hour`, `lesson_link`)
VALUES (1, 'cz. 18:00' , 3, 4, '18:00', 'https://google.com'),
    (2, 'pt. 11:15', 3, 5, '11:15', 'https://google.pl');
COMMIT;