import React from 'react';
import Image from 'next/image';
import styles from './banner.module.scss';

const BannerEco = () => (
  <section id={styles.container}>
    <div className={styles.content}>
      <figure className={styles.image}>
        <Image
          src="/images/ilustration3.png"
          alt="ilustration3"
          layout="fill"
        />
      </figure>
      <div className={styles.info}>
        <figure className={styles.imageEnergy}>
          <Image
            src="/images/energy.svg"
            alt="energy Logo"
            layout="fill"
          />
        </figure>
        <h3>
          Cuando comprás refurbished le hacés un bien a tu bolsillo y al planeta: <br/>
          <span>Ahorrás 77.000 litros de agua</span> 
        </h3>
      </div>
    </div>
  </section>
);

export default BannerEco;