import React, { FC } from "react";
import Div100vh from "react-div-100vh";
import styles from './menu.module.scss';

interface IMenu {
  isOpen: boolean;
  handleClick: () => void;
}

const Menu: FC<IMenu> = ({ isOpen, handleClick }: IMenu) => {
  return (
    <Div100vh className={`${isOpen ? styles.slideIn : styles.slideOut} ${styles.menu}`} >
      
      
    </Div100vh>
  );
};

export default Menu;
