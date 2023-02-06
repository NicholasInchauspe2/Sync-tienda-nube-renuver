import React from 'react';
import styles from './menu.module.scss';

const Menu = ({ isOpen, handleClick }) => {

  return (
    <div className={`${isOpen ? "slideIn" : "slideOut"} ${styles.menu}`} >
      <div onClick={handleClick}>x</div>
      
    </div>
  );
};

export default Menu;
