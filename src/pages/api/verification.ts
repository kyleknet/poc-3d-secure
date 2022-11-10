import { type NextApiRequest, type NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.body.status === "SUCCESS") {
    res.status(200).json({ success: true, msg: "token is valid" });
    return;
  }
  res.status(200).json({ success: false, msg: "token is not valid" });
}
