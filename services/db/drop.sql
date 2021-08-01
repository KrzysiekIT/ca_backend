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
`lessons_demo`,
`folders`,
`files`,
`activation_links`;
SET FOREIGN_KEY_CHECKS = 1;
COMMIT;