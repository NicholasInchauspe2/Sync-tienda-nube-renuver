import { type FC } from 'react';
import Script from 'next/script';

const NEXT_PUBLIC_GOOGLE_ANALYTICS = 'G-LRCDNEJPW5';

const GAScript: FC = () => {
	return (
		<>
			<Script
				async
				strategy="afterInteractive"
				id="google-analytics-tag-manager"
				src={`https://www.googletagmanager.com/gtag/js?id=${NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
			/>
			<Script id="google-tag-manager-window">{`window.dataLayer = window.dataLayer || [];`}</Script>
			<Script id="google-analytics" strategy="afterInteractive">
				{`function gtag(){dataLayer.push(arguments);}
         gtag('js', new Date());
         gtag('config', '${NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
          page_path: window.location.pathname,});
        `}
			</Script>
		</>
	);
};

export default GAScript;
