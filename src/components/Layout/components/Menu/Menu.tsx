import React, { FC } from "react";
import styles from "./menu.module.scss";

interface IMenu {
  isOpen: boolean;
  handleClick: () => void;
}

const Menu: FC<IMenu> = ({ isOpen, handleClick }: IMenu) => {
  return (
    <div className={`${isOpen ? "slideIn" : "slideOut"} ${styles.menu}`}>
      <div onClick={handleClick}>x</div>
    </div>
  );
};

export default Menu;
