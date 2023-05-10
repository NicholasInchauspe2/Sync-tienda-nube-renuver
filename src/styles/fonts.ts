import { Permanent_Marker, Raleway, Quicksand } from '@next/font/google';

export const permanentMarker = Permanent_Marker({
	subsets: ['latin'],
	weight: ['400'],
	variable: '--permanent-marker',
	display: 'swap',
});

export const raleway = Raleway({
	subsets: ['latin'],
	weight: ['400', '500', '600', '700'],
	style: ['normal'],
	variable: '--raleway',
	display: 'swap',
});

export const quicksand = Quicksand({
	subsets: ['latin'],
	weight: ['400', '500', '600', '700'],
	style: ['normal'],
	variable: '--quicksand',
	display: 'swap',
});
