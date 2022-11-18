const otpGenerator = require("otp-generator");
import type { NextApiRequest, NextApiResponse } from "next";
import { Testimonial } from "../../../../../../models/company";
import { AppError } from "../../../../../helpers/appError";
import {
  getCompany,
  attachCodeToCompany,
  attachTestimonialToCompany,
} from "../../../../../helpers/company";
import { webUrl } from "../../../../../helpers/getURL";
import { transporter } from "../../../../../helpers/mail";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const slug = req.query.companyId;
  try {
    switch (req.method) {
      case "POST":
        if (slug) {
          const { country, email, name, otp } = await req.body;

          const company = await getCompany(slug as string);

          if (company.otp && company.otp === otp) {
            const testimonialSlug = otpGenerator.generate(16, {
              upperCaseAlphabets: false,
              specialChars: false,
            });

            const testimonial: Testimonial = {
              name,
              email,
              country,
              message: "",
              isPublic: false,
              slug: testimonialSlug,
            };

            await attachTestimonialToCompany(slug as string, testimonial);

            const mailOptions = {
              to: email,
              from: process.env.NEXT_NODE_MAILER_USER,
              subject: `${company.name} has requested a testimonial from you!`,
              html: "Hello "
                .concat(name)
                .concat(
                  `, <p> Please visit <a href="${webUrl(
                    `company/${slug}/testimonial/${testimonial.slug}`
                  )}"> ${webUrl(
                    `company/${slug}/testimonial/${testimonial.slug}`
                  )}</a> to give your testimonial.</p>`
                ),
            };

            transporter.sendMail(mailOptions, function (error, info) {
              if (error) {
                console.log(error);
              } else {
                console.log("Email sent: " + info.response);
              }
            });

            // erase otp
            await attachCodeToCompany(slug as string, "");
            res.status(200).json({ message: "Email sent!" });
          } else {
            throw new AppError("invalid otp", [], 409);
          }
        }
        break;
      case "GET":
        console.log("get trigeed");
        if (slug) {
          const data = await getCompany(slug as string);

          const otp = otpGenerator.generate(4, {
            upperCaseAlphabets: false,
            specialChars: false,
          });

          await attachCodeToCompany(slug as string, otp);

          const mailOptions = {
            to: data.email,
            text: `This is your unique OTP - ${otp}`,
            subject: "OTP - please do not share",
            from: process.env.NEXT_NODE_MAILER_USER,
          };

          transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
              console.log(error);
            } else {
              console.log("Email sent: " + info.response);
            }
          });

          res.status(200).json({ message: "Email sent!" });
        }
    }
  } catch (e) {
    if (e instanceof AppError) {
      return res.status(e.statusCode).json({ message: e.message });
    }
    return res.status(400).json("Failed to process request");
  }
};
