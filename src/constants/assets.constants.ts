const addPath = (e: Record<string, string>, path: string): void => {
	Object.keys(e).forEach((key: string) => {
		e[key] = `${path}/${e[key]}`;
	});
};

export enum Icons {
	APPLE = 'apple.svg',
	APPLE_ICON = 'apple-touch-icon.svg',
	BATTERY = 'battery.svg',
	ENERGY1 = 'energy.svg',
	ENERGY2 = 'energy-filled.svg',
	FACEBOOK = 'facebook.svg',
	FILTERICON = 'filterIcon.svg',
	INSTAGRAM = 'instagram.svg',
	LABEL = 'offer.svg',
	LEFT = 'arrow-left.svg',
	LOGIN = 'login.svg',
	LOGO = 'logo.png',
	FAVICON = 'favicon.png',
	HEADSET = 'headset-help.svg',
	ORDERICON = 'orderIcon.svg',
	PROFILE = 'profile-circled.svg',
	HOME = 'home.svg',
	NEXT = 'arrow-right.svg',
	NEXTGREY = 'arrow-right-grey.svg',
	SELECTION = 'selection.svg',
	SHARE = 'share.svg',
	SHIELD = 'shield.svg',
	SEARCH = 'search.svg',
	STARS = 'stars.svg',
	TWITTER = 'twitter.svg',
	VERIFIED = 'verified.svg',
}

addPath(Icons, '/icons');

export enum Images {
	STEP1 = 'step1.svg',
	STEP2 = 'step2.svg',
	STEP3 = 'step3.svg',
	IPHONE7 = 'iphone7.jpg',
	IPHONE8 = 'iphone8.jpg',
	IPHONEX = 'iphoneX.jpg',
	IPHONESE = 'iphoneSE.jpg',
	IPHONE11 = 'iphone11.jpg',
	IPHONE12 = 'iphone12.jpg',
	IPHONE13 = 'iphone13.png',
	IPHONE14 = 'iphone14.jpg',
	CLIENT1 = 'client1.png',
	CLIENT2 = 'client2.png',
	CLIENT3 = 'client3.png',
	CELLPHONE = 'cellphone.png',
	WOMAN = 'woman.png',
}
addPath(Images, '/images');

export enum Sounds {
	NOTIFICATION = 'joyous-chime-notification.ogg',
}
addPath(Sounds, '/sounds');
