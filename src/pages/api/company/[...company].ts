import type { NextApiRequest, NextApiResponse } from "next";
import { AppError } from "../../../helpers/appError";
import { getCompany } from "../../../helpers/company";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    switch (req.method) {
      case "GET":
        const slug = req.query.company![0];
        if (slug) {
          const data = await getCompany(slug);
          res.status(200).json(data);
        }
    }
  } catch (e) {
    if (e instanceof AppError) {
      return res.status(e.statusCode).json({ message: e.message });
    }

    return res.status(400).json("Failed to process request");
  }
};

export default handler;
