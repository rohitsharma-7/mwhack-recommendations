import type { NextApiRequest, NextApiResponse } from "next";
import { AppError } from "../../../../../helpers/appError";
import { addTestimonial } from "../../../../../helpers/company";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    switch (req.method) {
      case "PUT":
        const testimonialSlug = req.query.testimonialId as string;
        const companySlug = req.query.companyId as string;
        if (testimonialSlug && companySlug) {
          const { picture, message } = req.body;

          addTestimonial(companySlug, testimonialSlug, message, picture);

          res.status(200).json({ message: "testimonial added!" });
        }
    }
  } catch (e) {
    if (e instanceof AppError) {
      return res.status(e.statusCode).json({ message: e.message });
    }
    return res.status(400).json("Failed to process request");
  }
};
