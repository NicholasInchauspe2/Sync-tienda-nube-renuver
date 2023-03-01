import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./footer.module.scss";
import { Icons } from "@/constants/assets.constants";
import { Routing } from "@/constants/routing.constants";

const Footer = ({}) => {
  const links = [
    {
      label: "Quienes somos",
      to: Routing.US,
    },
    {
      label: "Garantía Renuver",
      to: Routing.WARRANTY,
    },
    {
      label: "¿Qué es un iphone reacondicionado?",
      to: Routing.IPHONE_REFURBISHED,
    },
    {
      label: "Preguntas Frecuentes",
      to: Routing.FQ,
    },
  ];

  const medias = [
    {
      media: "Facebook",
      icon: Icons.FACEBOOK,
      to: Routing.FACEBOOK,
    },
    {
      media: "Twitter",
      icon: Icons.TWITTER,
      to: Routing.TWITTER,
    },
    {
      media: "Instagram",
      icon: Icons.INSTAGRAM,
      to: Routing.INSTAGRAM,
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
