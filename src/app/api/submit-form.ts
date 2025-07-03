"use server";
import nodemailer from "nodemailer";

function stripTags(input: FormDataEntryValue | null) {
  if (typeof input !== "string") return "";
  return input.replace(/<\/?[^>]+(>|$)/g, "");
}

export async function sendEmail(formData: FormData) {
  const name = stripTags(formData.get("name") as string);
  const phone = stripTags(formData.get("phone") as string);
  const email = stripTags(formData.get("email") as string);
  const message = stripTags(formData.get("message") as string);

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
    tls: {
      rejectUnauthorized: false,
    },
  });

  await transporter.sendMail({
    from: process.env.SMTP_USER,
    to: "Fluxifyitcompany@gmail.com",
    subject: "Нова заявка з форми FLUXIFY",
    text: `Ім'я користувача: ${name}\nТелефон користувача: ${phone}\nEmail користувача: ${email}\nПитання користувача: ${message}`,
  });
}