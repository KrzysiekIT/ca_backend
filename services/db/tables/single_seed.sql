START TRANSACTION;
INSERT INTO `single` (`id`, `name`, `body`)
VALUES (
        1,
        'payment_data',
        'Numer konta: xxx, Imię i nazwisko: xxx'
    );
COMMIT;