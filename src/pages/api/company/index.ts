import { Company } from "../../../../models/company";
import Joi from "joi";
import type { NextApiRequest, NextApiResponse } from "next";
import schemaValidator from "../../../helpers/validator";
import { createCompany } from "../../../helpers/company";
import { AppError } from "../../../helpers/appError";

interface ExtendedNextApiRequest extends NextApiRequest {
  body: Company;
}

const companySchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().email().required(),
  address: Joi.object({
    city: Joi.string().required(),
    country: Joi.string().required(),
  }),
  logo: Joi.string().required(),
  category: Joi.string().required(),
  description: Joi.string().required(),
  website: Joi.string().required(),
});

async function handler(req: ExtendedNextApiRequest, res: NextApiResponse) {
  try {
    switch (req.method) {
      case "POST":
        const company = await createCompany(req.body);
        res
          .status(200)
          .json({ message: "Company added!", company: { slug: company?.id } });
    }
  } catch (e) {
    if (e instanceof AppError) {
      return res.status(e.statusCode).json({ message: e.message });
    }

    return res.status(400).json("Failed to process request");
  }
}

export default schemaValidator({ body: companySchema }, handler);
