import React from "react";
import Image from "next/image";
import styles from "./section.module.scss";
import { Images } from "@/constants/assets.constants";

const SectionReasons = () => {
  const reasons = [
    {
      icon: Images.STEP1,
      title: "Encontrá el iPhone ideal para vos",
      description:
        "Todos los vendedores están certificados y tienen tiendas físicas verificadas.",
    },
    {
      icon: Images.STEP2,
      title: "Retiralo o recibilo a domicilio",
      description:
        "Podes retirar tu iPhone por el local del vendedor o recbirlo en tu domicilio.",
    },
    {
      icon: Images.STEP3,
      title: "Probalo por 7 días",
      description: "Si te arrepentís lo podes devolver sin cargo.",
    },
  ];

  return (
    <section id={styles.container}>
      <h2>Comprar un iPhone reacondicionado, nunca fue tan fácil y seguro.</h2>
      <div className={styles.content}>
        {reasons.map(({ icon, title, description }, idx) => (
          <div className={styles.card} key={idx}>
            <figure className={styles.image}>
              <Image src={icon} alt={icon} layout="fill" />
            </figure>
            <h3>{title}</h3>
            <p>{description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SectionReasons;
