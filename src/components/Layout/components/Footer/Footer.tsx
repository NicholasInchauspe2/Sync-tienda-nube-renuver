import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './footer.module.scss';

const Footer = ({ }) => {

  const links = [
    {
      label: 'Quienes somos',
      to: '/#'
    },
    {
      label: 'Garantía Furbi',
      to: '/#'
    },
    {
      label: '¿Qué es un iphone refurbished?',
      to: '/#'
    },
    {
      label: 'Preguntas Frecuentes',
      to: '/#'
    }
  ];

  const medias = [
    {
      media: 'Facebook',
      to: 'https://www.facebook.com/'
    },
    {
      media: 'Twitter',
      to: 'https://twitter.com/'
    },
    {
      media: 'Instagram',
      to: 'https://www.instagram.com/'
    }
  ];

  return (
    <footer id={styles.footer}>
      <div className={styles.container}>
        <div className={styles.linksContainer}>
          {links.map(({label, to}) => <Link href={to}>{label}</Link> )}
        </div>
        <div className={styles.mediaContainer}>
          {medias.map(({media, to}) => (
            <Link href={to} className={styles.media}>
              <Image
                src={`/images/${media}.svg`}
                alt={`${media} logo`}
                layout="fill"
              />
          </Link> 
          ))}
        </div>
      </div>
      
      <p>©2022 Furbi. Todos los derechos reservados.</p>
    </footer>
  );
};

export default Footer;
