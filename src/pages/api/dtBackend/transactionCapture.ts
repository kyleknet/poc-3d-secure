import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.body.status === 'SUCCESS') {
    res.status(200).json({ success: true, message: 'Received by DT Backend', ...req.body });
  } else {
    res.status(200).json({ success: false, message: 'Received by DT Backend', ...req.body });
  }
}
