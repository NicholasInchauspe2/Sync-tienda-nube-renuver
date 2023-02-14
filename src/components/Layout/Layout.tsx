import React from 'react';
import { Props } from '@/types';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import styles from './layout.module.scss';

const Layout = ({ children } : Props) => {

  return (
    <main id={styles.main}>
      <Navbar />
      <div>
        {children}
      </div>
      <Footer />    
    </main>
  );
};

export default Layout;