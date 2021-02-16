START TRANSACTION;
SET FOREIGN_KEY_CHECKS=0;
DROP TABLES `roles`, `users`, `payments`, `groups`, `lessons`, `students`, `presences`, `lessons_missed`;
SET FOREIGN_KEY_CHECKS=1;
COMMIT;