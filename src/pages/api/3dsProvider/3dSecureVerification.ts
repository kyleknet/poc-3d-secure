import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  // Will need to get populated from an API -> DT BE (Global Startup Params**)
  const processingCode = '010';
  const merchantType = 'UN';
  const posConditionCode = '59';
  const aftServiceFee = 'D2';
  const acquiringInstitutionIdentificationCode = '200';
  const accountIdentifierTypeCode = '03';

  setTimeout(() => {
    res.status(200).json({
      iframe: `/iFrame3DS.html?cardholderName=${req.body.cardholderName}&creditCardNumber=${req.body.creditCardNumber}&expiryDate=${req.body.expiryDate}&cvv=${req.body.cvv}&amount=${req.body.amount}&processingCode=${processingCode}&merchantType=${merchantType}&posConditionCode=${posConditionCode}&aftServiceFee=${aftServiceFee}&acquiringInstitutionIdentificationCode=${acquiringInstitutionIdentificationCode}&accountIdentifierTypeCode=${accountIdentifierTypeCode}
      `,
    });
  }, 2000);
}
