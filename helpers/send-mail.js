// const nodemailer = require("nodemailer");
// const config = require("../config");

// var transporter = nodemailer.createTransport({
//     host: "smtp-mail.outlook.com",
//     secureConnection : false,
//     port: 587,
//     secure: false,
//     tls: {
//         ciphers: 'SSLv3'
//     },
//     auth: {
//         user: config.email.username,
//         pass: config.email.password
//     }
// });

// transporter.verify(function(error, success) {
//   if (error) {
//     console.log("HATA:", error);
//   } else {
//     console.log("Bağlantı başarılı, mail göndermeye hazır!");
//   }
// });

// module.exports = transporter;