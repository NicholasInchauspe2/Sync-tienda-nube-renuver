import "@/styles/globals.scss";
import type { AppProps } from "next/app";
import Layout from "@/components/Layout";
import { NextSeo } from "next-seo";
import { Icons } from "@/constants/assets.constants";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <NextSeo
        title="Renúver"
        description="Tecnología renovada. Al alcance de tus manos y beneficiando al planeta."
        themeColor="black"
        additionalLinkTags={[
          {
            rel: "icon",
            href: Icons.FAVICON,
          },
          {
            rel: "apple-touch-icon",
            href: Icons.ENERGY1,
            sizes: "76x76",
          },
        ]}
      />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
