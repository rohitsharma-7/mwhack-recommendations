import nodemailer from "nodemailer";

export const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.NEXT_NODE_MAILER_USER,
    pass: process.env.NEXT_NODE_MAILER_KEY,
  },
});
