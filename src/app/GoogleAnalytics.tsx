'use client';

import Script from 'next/script';

export default function GoogleAnalytics() {
  return (
    <>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'GA_MEASUREMENT_ID', {
            page_title: 'Lighthouse Atlanta - African Church in Atlanta, GA',
            page_location: window.location.href,
            custom_map: {
              'custom_parameter_1': 'african_church',
              'custom_parameter_2': 'atlanta_georgia',
              'custom_parameter_3': 'rccg_church'
            }
          });
        `}
      </Script>
    </>
  );
} 