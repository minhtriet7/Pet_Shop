const nodemailer = require("nodemailer");
require("dotenv").config();
const asyncHandler = require("express-async-handler");

const sendMail = asyncHandler(async ({ email, html, subject }) => {
	const transporter = nodemailer.createTransport({
		host: "smtp.gmail.com",
		port: 587,
		secure: false, 
		auth: {
			user: process.env.EMAIL_NAME, 
			pass: process.env.EMAIL_APP_PASSWORD, 
		},
	});

	const info = await transporter.sendMail({
		from: '"Pet Shop" <no-reply@petshop.com>', // Đã đổi tên cho phù hợp web thú cưng
		to: email, 
		subject: subject, 
		html: html, 
	});

	return info;
});

module.exports = sendMail;