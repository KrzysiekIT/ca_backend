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
`lessons_demo`,
`folders`,
`movies`,
`teaching_materials`,
`notes`,
`activation_links`,
`single`,
`future_skills`;
SET FOREIGN_KEY_CHECKS = 1;
COMMIT;