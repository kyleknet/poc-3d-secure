import type { NextApiRequest, NextApiResponse } from 'next';
import { hostname } from 'os';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  // Will need to get populated from an API -> DT BE (Global Startup Params**)
  const ex = await fetch(`https://poc-3d-secure.vercel.app/api/dtBackend/globalStartupParams`, {
    headers: {
      'Cache-control': 'no-cache',
      'Content-type': 'application/json',
    },
    method: 'GET',
  });
  const data = await ex.json();

  setTimeout(() => {
    res.status(200).json({
      iframe: `/iFrame3DS.html?cardholderName=${req.body.cardholderName}&creditCardNumber=${req.body.creditCardNumber}&expiryDate=${req.body.expiryDate}&cvv=${req.body.cvv}&amount=${req.body.amount}&processingCode=${data.processingCode}&merchantType=${data.merchantType}&posConditionCode=${data.posConditionCode}&aftServiceFee=${data.aftServiceFee}&acquiringInstitutionIdentificationCode=${data.acquiringInstitutionIdentificationCode}&accountIdentifierTypeCode=${data.accountIdentifierTypeCode}
      `,
    });
  }, 2000);
}
