START TRANSACTION;
SET FOREIGN_KEY_CHECKS=0;
DROP TABLES `roles`, `users`, `payments`, `groups`, `lessons`, `presences`, `lessons_missed`, `terms`;
SET FOREIGN_KEY_CHECKS=1;
COMMIT;