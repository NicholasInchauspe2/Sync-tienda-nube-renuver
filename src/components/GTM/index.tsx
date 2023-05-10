import Script from 'next/script';
import { type FC } from 'react';

const NEXT_PUBLIC_GOOGLE_TAGS_MANAGER = 'GTM-MHVT7G5';

export const GTMscript: FC = () => (
	<>
		<Script id="google-tag-manager-window">{`window.dataLayer = window.dataLayer || [];`}</Script>
		<Script id="google-tag-manager" strategy="afterInteractive">{`
    (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
    'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
    })(window,document,'script','dataLayer', '${NEXT_PUBLIC_GOOGLE_TAGS_MANAGER}')
    `}</Script>
	</>
);

export const GTMnoscript: FC = () => (
	<noscript
		dangerouslySetInnerHTML={{
			__html: `
      <iframe src="https://www.googletagmanager.com/ns.html?id=${NEXT_PUBLIC_GOOGLE_TAGS_MANAGER}"
      height="0" width="0" style="display:none;visibility:hidden"></iframe>
    `,
		}}
	/>
);
