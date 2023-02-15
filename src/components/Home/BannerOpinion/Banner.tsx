/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Image from "next/image";
import styles from "./banner.module.scss";
import { Images } from "@/constants/assets.constants";

const BannerOpinions = () => (
  <section id={styles.container}>
    <h2>
      Mirá lo que dicen <br /> nuestros clientes:
    </h2>
    <div className={styles.content}>
      <figure className={styles.image}>
        <Image src={Images.CLIENT} alt="Foto del cliente" layout="fill" />
      </figure>
      <div className={styles.info}>
        <p className={styles.quote}>“</p>
        <h3>
          El servicio es práctico y funcional. Te da varias opciones de compra a
          muy buenos precios
          <span>"</span>
        </h3>
        <p>Francisco Cabello</p>
        <p>Presidente de Ualá</p>
      </div>
    </div>
  </section>
);

export default BannerOpinions;
