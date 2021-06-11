START TRANSACTION;
INSERT INTO `movies` (
        `id`,
        `description_pl`,
        `description_en`,
        `link`,
        `exercise`
    )
VALUES (1, "Bądź szczęśliwy", 'Be happy', "https://www.youtube.com/watch?v=ZbZSe6N_BXs", "movies"),
    (2, "Obudź mnie", 'Wake me up', "https://www.youtube.com/watch?v=pIgZ7gMze7A", "movies"),
    (3, "DOTA", 'DOTA', "https://www.youtube.com/watch?v=pIgZ7gMze7A", "movies"),
    (4, "Cukier", 'Sugar', "https://www.youtube.com/watch?v=09R8_2nJtjg", "movies"),
    (5, "Najlepszy film ever", 'YMCA', "https://www.youtube.com/watch?v=CS9OO0S5w2k", "movies"),
    (6, "Najlepszy film ever", 'The best movie ever', "https://www.youtube.com/watch?v=CS9OO0S5w2k", "movies"),
    (7, "Najlepszy film ever", 'La Vida Loca', "https://www.youtube.com/watch?v=p47fEXGabaY", "movies"),
    (8, "Najlepszy film ever", 'The best movie ever', "https://www.youtube.com/watch?v=kRt2sRyup6A", "movies"),
    (9, "Cola", 'Cola', "https://www.youtube.com/watch?v=gdjFeiiJaPI", "movies"),
    (10, "Najlepszy film ever", 'The best movie ever', "https://www.youtube.com/watch?v=OPf0YbXqDm0", "movies"),
    (11, "Najlepszy film ever", 'The best movie ever', "https://www.youtube.com/watch?v=QNJL6nfu__Q", "movies"),
    (12, "Najlepszy film ever", 'The best movie ever', "https://www.youtube.com/watch?v=ZbZSe6N_BXs", "movies"),
    (13, "Najlepszy film ever", 'The best movie ever', "https://www.youtube.com/watch?v=ZbZSe6N_BXs", "movies");
COMMIT;