import { GTMnoscript } from '@/components/GTM';
import Document, { Html, Head, Main, NextScript } from 'next/document';

const NEXT_PUBLIC_FACEBOOK_VERIFICATION = 'cvg0cklpk47c9sdy1c2mvv9lyzx0q7';

export default class WebDocument extends Document {
	render(): JSX.Element {
		return (
			<Html lang="en">
				<Head>
					<meta
						name="facebook-domain-verification"
						content={`${NEXT_PUBLIC_FACEBOOK_VERIFICATION}`}
					/>
					<link rel="preconnect" href="https://fonts.googleapis.com" />
					<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
				</Head>
				<body>
					<GTMnoscript />
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}
