START TRANSACTION;
INSERT INTO `notes` (`user_id`, `lesson_name`, `lesson_number`, `note`)
VALUES (9, "abacus", 1, "FAST FAST FAST!!!"),
    (9, "abacus", 3, "TROSZCZKĘ PRZYSPIESZ!!!");
COMMIT;