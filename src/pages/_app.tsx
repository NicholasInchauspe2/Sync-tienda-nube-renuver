import 'swiper/css';
import 'swiper/css/pagination';
import { useEffect } from 'react';
import { NextSeo } from 'next-seo';
import { Provider } from 'react-redux';
import { store } from '@/store';
import { useRouter } from 'next/router';
import type { AppProps } from 'next/app';
import '@/styles/globals.scss';
import Layout from '@/components/Layout';
import { Icons } from '@/constants/assets.constants';
import { raleway, permanentMarker, quicksand } from '@/styles/fonts';
import { GTMscript } from '@/components/GTM';
import GAScript from '@/components/GA';
import * as ga from '../../lib/analytics';

export default function App({ Component, pageProps }: AppProps): JSX.Element {
	const router = useRouter();

	useEffect(() => {
		const handleRouteChange = (url: string): void => {
			ga.pageview(url);
		};
		router.events.on('routeChangeComplete', handleRouteChange);
		return () => {
			router.events.off('routeChangeComplete', handleRouteChange);
		};
	}, [router.events]);

	return (
		<>
			<NextSeo
				title="Renúver"
				description="Tecnología renovada. Al alcance de tus manos y beneficiando al planeta."
				themeColor="black"
				additionalLinkTags={[
					{
						rel: 'icon',
						href: Icons.FAVICON,
					},
					{
						rel: 'apple-touch-icon',
						href: Icons.APPLE_ICON,
					},
				]}
			/>
			<main className={`${permanentMarker.variable} ${raleway.variable} ${quicksand.variable}`}>
				<GTMscript />
				<GAScript />
				<Provider store={store}>
					<Layout>
						<Component {...pageProps} />
					</Layout>
				</Provider>
			</main>
		</>
	);
}
