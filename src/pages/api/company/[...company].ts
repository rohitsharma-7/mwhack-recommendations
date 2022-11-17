import type { NextApiRequest, NextApiResponse } from "next";
import { AppError } from "../../../helpers/appError";
import { getCompany } from "../../../helpers/company";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    switch (req.method) {
      case "GET":
        const slug = req.query.company[0];
        if (slug) {
          const { name, description, logo, endorsements } = await getCompany(
            slug
          );
          res.status(200).json({ name, description, logo, endorsements });
        }
    }
  } catch (e) {
    if (e instanceof AppError) {
      return res.status(e.statusCode).json({ message: e.message });
    }

    return res.status(400).json("Failed to process request");
  }
};
