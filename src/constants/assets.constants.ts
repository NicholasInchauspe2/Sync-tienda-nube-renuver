const addPath = (e: { [key: string]: string }, path: string) => {
  Object.keys(e).forEach((key: string) => {
    e[key] = `${path}/${e[key]}` as string;
  });
};

export enum Icons {
  APPLE_ICON = "apple-touch-icon.svg",
  ENERGY1 = "energy1.svg",
  ENERGY2 = "energy2.svg",
  FACEBOOK = "facebook.svg",
  INSTAGRAM = "instagram.svg",
  LABEL = "label.svg",
  LOGIN = "login.svg",
  LOGO = "logo.svg",
  SEARCH = "search.svg",
  SHIELD = "shield.svg",
  TWITTER = "twitter.svg",
  VERIFIED = "verified.svg",
  FAVICON = "favicon.svg",
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
  CLIENT1 = "client1.png",
  CLIENT2 = "client2.webp",
  CLIENT3 = "client3.png",
  CELLPHONE = "cellphone.png",
  WOMAN = "woman.png",
}
addPath(Images, "/images");
