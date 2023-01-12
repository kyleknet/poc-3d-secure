'use-client';

import Link from 'next/link';
import Layout from '../components/Layout';

export default function SuccessVerification() {
  return (
    <Layout>
      <h1>SUCCESS</h1>
      <Link href="/">Back to start</Link>
    </Layout>
  );
}
