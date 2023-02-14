import React, { useState } from 'react';
import Image from 'next/image';
import Menu from '../Menu';
import Search from '../../../Search';
import styles from './navbar.module.scss';

const Navbar = ({ }) => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);  

  const handleClick = ()=> setIsOpenMenu(!isOpenMenu);

  return (
    <header id={styles.header} >
      <div className={styles.section1}>
        <figure className={styles.logo}>
          <Image
            src="/images/logo.svg"
            alt="Renuver Logo"
            layout="fill"
          />
        </figure> 
        <Search name='searchDestock' variant='secundary' placeholder='Buscá por modelos' />
        <figure className={styles.login}>
          <Image
            src="/images/login.svg"
            alt="login Logo"
            layout="fill"
          />
        </figure> 
        <button
          onClick={handleClick}
          className={`${styles.burger} ${isOpenMenu ? styles.openMenu : ''}`}
        >
          <div></div>
          <div></div>
          <div></div>
        </button>
        <Menu isOpen={isOpenMenu} handleClick={handleClick}/>
      </div>
      <nav className={styles.section2}>
        <Search name='searchMobile' variant='primary' placeholder='Buscá por modelos'/>
      </nav>
    </header>
  );
};

export default Navbar;