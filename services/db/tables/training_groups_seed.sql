START TRANSACTION;
INSERT INTO `training_groups` (`id`,`level` ,`label`, `trainer_id`, `lesson_day`, `lesson_hour`, `lesson_tool`, `lesson_link`)
VALUES (1, 1, 'cz. 18:00' , 3, 4, '18:00', 'zoom','https://google.com'),
    (2, 2, 'pt. 11:15', 3, 1, '11:15', 'zoom','https://google.pl'),
    (3, 1, 'cz. 00:15', 3, 2, '00:15', 'zoom','https://google.org'),
    (4, 3, 'pt. 11:15', 3, 3, '11:15', 'meet','https://google.pl'),
    (5, 3, 'śr. 12:15', 3, 6, '12:15', 'zoom','https://google.szocik.kiwi'),
    (6, 3, 'pt. 11:15', 7, 5, '11:15', 'zoom','https://google.pl'),
    (7, 1, 'sb. 23:00', 3, 5, '23:00', 'zoom','https://google.pl'),
    (8, 3, 'wt. 15:15', 7, 7, '15:15', 'zoom','https://meet.pl');
COMMIT;