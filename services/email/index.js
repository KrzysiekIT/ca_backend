var nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "ciekawenewslettery@gmail.com",
    pass: "krzychu123",
  },
});

/* const mailOptions = {
  from: "ciekawenewslettery@gmail.com",
  to: "krzykarc@gmail.com",
  subject: "Sending Email using Node.js",
  text: "That was easy!",
}; */

const sendEmail = (email) => {
  transporter.sendMail(email, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });
};

module.exports = sendEmail;
