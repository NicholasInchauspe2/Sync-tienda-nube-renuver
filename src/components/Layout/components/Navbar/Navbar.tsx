import React, { useState } from 'react';
import Menu from '../Menu';
import styles from './navbar.module.scss';

const Navbar = ({ }) => {
  const [isCollapse, setIsCollapse] = useState(false);  

  const handleClick = ()=> setIsCollapse(!isCollapse);

  return (
    <header id={styles.header}>
      <div className={styles.logo}>
        
      </div> 
      <Menu isOpen={isCollapse} handleClick={handleClick}/>
    </header>
  );
};

export default Navbar;