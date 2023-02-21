import React, { FC, PropsWithChildren } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import styles from "./layout.module.scss";
import "swiper/css";
import "swiper/css/pagination";

const Layout: FC<PropsWithChildren> = ({ children }: PropsWithChildren) => {
  return (
    <>
      <Navbar />
      <main id={styles.main}>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
