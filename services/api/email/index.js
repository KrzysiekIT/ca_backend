const { Router, request } = require("express");
const router = Router();
const sendEmail = require("@/email");

router.post("/", (req, res) => {
  const mailOptions = {
    from: "ciekawenewslettery@gmail.com",
    to: "krzykarc@gmail.com",
    subject: "Sending Email using Node.js",
    text: "That was easy!",
  };
  sendEmail(mailOptions);
  res.json({ message: "Email has been sent" });
});

module.exports = router;
