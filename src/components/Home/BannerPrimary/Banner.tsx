import React from "react";
import Image from "next/image";
import Button from "@/commons/Button";
import styles from "./banner.module.scss";
import { Images } from "@/constants/assets.constants";

const BannerPrimary = () => (
  <section id={styles.container}>
    <h1>
      La mejor tecnología <br /> Reacondicionada con garantía <br /> de 12
      meses.
    </h1>
    <p>
      Somos el primer marketplace de Latinoamérica, dedicado a la tecnología
      reacondicionada.
    </p>
    <figure className={styles.image}>
      <Image src={Images.WOMAN} alt="Foto de mujer" layout="fill" />
    </figure>
    <Button type="primary" href={"https://tienda.renuver.com/productos/"}>
      Tienda
    </Button>
  </section>
);

export default BannerPrimary;
