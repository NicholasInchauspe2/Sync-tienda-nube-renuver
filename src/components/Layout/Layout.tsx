import React, { FC, PropsWithChildren } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import styles from "./layout.module.scss";

const Layout: FC<PropsWithChildren> = ({ children }: PropsWithChildren) => {
  return (
    <main id={styles.main}>
      <Navbar />
      <div>{children}</div>
      <Footer />
    </main>
  );
};

export default Layout;
