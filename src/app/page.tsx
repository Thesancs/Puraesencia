import { Suspense } from 'react';
import LandingBanoPage from './landing-bano/page';

export default function HomePage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <LandingBanoPage />
    </Suspense>
  );
}
