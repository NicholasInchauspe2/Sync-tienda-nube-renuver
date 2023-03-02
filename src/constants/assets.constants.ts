const addPath = (e: { [key: string]: string }, path: string) => {
  Object.keys(e).forEach((key: string) => {
    e[key] = `${path}/${e[key]}` as string;
  });
};

export enum Icons {
  APPLE_ICON = "apple-touch-icon.svg",
  ENERGY1 = "energy.svg",
  ENERGY2 = "energy-filled.svg",
  FACEBOOK = "facebook.svg",
  INSTAGRAM = "instagram.svg",
  LABEL = "offer.svg",
  LOGIN = "login.svg",
  LOGO = "logo.png",
  SEARCH = "search.svg",
  SHIELD = "shield.svg",
  TWITTER = "twitter.svg",
  VERIFIED = "verified.svg",
  FAVICON = "favicon.png",
  HEADSET = "headset-help.svg",
  PROFILE = "profile-circled.svg",
  HOME = "home.svg",
  NEXT = "arrow-right.svg",
}
addPath(Icons, "/icons");

export enum Images {
  STEP1 = "step1.svg",
  STEP2 = "step2.svg",
  STEP3 = "step3.svg",
  IPHONE7 = "iphone7.jpg",
  IPHONE8 = "iphone8.jpg",
  IPHONEX = "iphoneX.jpg",
  IPHONESE = "iphoneSE.jpg",
  IPHONE11 = "iphone11.jpg",
  IPHONE12 = "iphone12.jpg",
  IPHONE13 = "iphone13.jpg",
  IPHONE14 = "iphone14.jpg",
  CLIENT1 = "client1.png",
  CLIENT2 = "client2.png",
  CLIENT3 = "client3.png",
  CELLPHONE = "cellphone.png",
  WOMAN = "woman.png",
}
addPath(Images, "/images");
