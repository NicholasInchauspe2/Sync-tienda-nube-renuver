import type { AppProps } from 'next/app';
import { NextSeo } from 'next-seo';
import { Provider } from 'react-redux';
import { store } from '@/store';
import Layout from '@/components/Layout';
import { Icons } from '@/constants/assets.constants';
import '@/styles/globals.scss';
import 'swiper/css';
import 'swiper/css/pagination';

export default function App({ Component, pageProps }: AppProps): JSX.Element {
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
			<Provider store={store}>
				<Layout>
					<Component {...pageProps} />
				</Layout>
			</Provider>
		</>
	);
}
