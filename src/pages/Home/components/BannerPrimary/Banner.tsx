import React from 'react';
import Image from 'next/image';
import Button from '@/components/Button';
import styles from './banner.module.scss';

const BannerPrimary = () => (
  <section id={styles.container}>
    <h1>
      La mejor tecnología <br/> Reacondicionada con garantía <br/> de 12 meses.
    </h1>
    <p>Somos el primer marketplace de Latinoamérica, dedicado a la tecnología reacondicionada.</p>
    <figure className={styles.image}>
      <Image
        src="/images/ilustration1.png"
        alt="ilustration1"
        layout="fill"
      />
    </figure>
    <Button type='primary'>
      Tienda
    </Button>
  </section>
);

export default BannerPrimary;