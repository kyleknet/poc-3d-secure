import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  console.log('==================blag');
  res.status(200).json({
    processingCode: '010',
    merchantType: 'UN',
    posConditionCode: '59',
    aftServiceFee: 'D2',
    acquiringInstitutionIdentificationCode: '200',
    accountIdentifierTypeCode: '03',
  });
}
