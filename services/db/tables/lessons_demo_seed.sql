START TRANSACTION;
INSERT INTO `lessons_demo` (`id`, `day`, `hour`, `trainer_id`, `students_number`)
VALUES (1, "2021-06-22", "17:00", 3, 3),
    (2, "2021-06-11", "15:00", 3, 3),
    (3, "2021-06-04", "11:00", 3, 3),
    (4, "2021-06-11", "11:00", 3, 3),
    (5, "2021-06-22", "11:00", 3, 3),
    (6, "2021-06-22", "3:00", 7, 3),
    (7, "2021-06-22", "11:00", 3, 3),
    (8, "2021-06-22", "11:00", 7, 13),
    (9, "2021-06-22", "11:00", 3, 3),
    (10, "2021-06-22", "11:00", 3, 3),
    (11, "2021-06-22", "11:00", 3, 1);
COMMIT;