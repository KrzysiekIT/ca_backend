START TRANSACTION;
SET FOREIGN_KEY_CHECKS = 0;
DROP TABLES `roles`,
`users`,
`payments`,
`training_groups`,
`lessons`,
`presences`,
`lessons_missed`,
`terms`,
`abacus`,
`movies`,
`files`,
`lessons_demo`;
SET FOREIGN_KEY_CHECKS = 1;
COMMIT;