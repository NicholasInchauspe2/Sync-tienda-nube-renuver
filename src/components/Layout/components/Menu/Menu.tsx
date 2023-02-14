import React from 'react';
import Div100vh from "react-div-100vh";
import styles from './menu.module.scss';

const Menu = ({ isOpen, handleClick }) => {

  return (
    <Div100vh className={`${isOpen ? styles.slideIn : styles.slideOut} ${styles.menu}`} >
      
      
    </Div100vh>
  );
};

export default Menu;
