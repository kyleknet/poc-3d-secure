import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  console.log(req.body);
  res.status(200).json({ message: "Received by DT Backend", ...req.body });
}
