import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./footer.module.scss";
import { Icons } from "@/constants/assets.constants";

const Footer = ({}) => {
  const links = [
    {
      label: "Quienes somos",
      to: "/#",
    },
    {
      label: "Garantía Renuver",
      to: "/#",
    },
    {
      label: "¿Qué es un iphone refurbished?",
      to: "/#",
    },
    {
      label: "Preguntas Frecuentes",
      to: "/#",
    },
  ];

  const medias = [
    {
      media: "Facebook",
      icon: Icons.FACEBOOK,
      to: "https://www.facebook.com/",
    },
    {
      media: "Twitter",
      icon: Icons.TWITTER,
      to: "https://twitter.com/",
    },
    {
      media: "Instagram",
      icon: Icons.INSTAGRAM,
      to: "https://www.instagram.com/",
    },
  ];

  return (
    <footer id={styles.footer}>
      <div className={styles.container}>
        <div className={styles.linksContainer}>
          {links.map(({ label, to }, idx) => (
            <Link href={to} key={idx}>
              {label}
            </Link>
          ))}
        </div>
        <div className={styles.mediaContainer}>
          {medias.map(({ media, to, icon }, idx) => (
            <Link href={to} className={styles.media} key={idx}>
              <Image src={icon} alt={`${media} logo`} layout="fill" />
            </Link>
          ))}
        </div>
      </div>

      <p>©2022 Furbi. Todos los derechos reservados.</p>
    </footer>
  );
};

export default Footer;
