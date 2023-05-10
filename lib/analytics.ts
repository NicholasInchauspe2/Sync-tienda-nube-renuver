declare global {
	interface Window {
		gtag: any;
	}
}

export const pageview = (url: string): void => {
	if (window?.gtag !== null) {
		window.gtag('config', process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS, {
			page_path: url,
		});
	}
};

export const event = ({ action, params }: { action: string; params: string }): void => {
	window.gtag('event', action, params);
};
