START TRANSACTION;
SET FOREIGN_KEY_CHECKS=0;
DROP TABLES `roles`, `users`, `payments`, `groups`, `lessons`, `presences`, `lessons_missed`, `terms`, `abacus`;
SET FOREIGN_KEY_CHECKS=1;
COMMIT;