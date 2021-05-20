const { Router, request } = require("express");
const router = Router();
const sendEmail = require("@/email");

router.post("/reset", (req, res) => {
  const mailOptions = {
    from: "ciekawenewslettery@gmail.com",
    to: `${req.body.email}`,
    subject: "Champions academy - resetowanie hasła",
    html: `<a href="www.google.com" target="_blank">Kliknij, aby zresetować hasło.</a>`,
  };
  sendEmail(mailOptions);
  res.json({ message: "Email has been sent" });
});

module.exports = router;
