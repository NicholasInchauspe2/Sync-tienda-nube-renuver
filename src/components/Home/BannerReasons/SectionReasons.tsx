import React from "react";
import Image from "next/image";
import Button from "@/commons/Button";
import styles from "./section.module.scss";
import { Icons } from "@/constants/assets.constants";

const SectionReasons = () => {
  const reasons = [
    {
      icon: Icons.VERIFIED,
      title: "Calidad verificada",
      description:
        "Vendedores evaluados a un control de calidad exigente y continuo.",
    },
    {
      icon: Icons.LABEL,
      title: "La mejor oferta disponible",
      description: "El algoritmo de la web te da la mejor calidad-precio.",
    },
    {
      icon: Icons.SHIELD,
      title: "Un servicio excelente",
      description: "Compra segura y atención al cliente",
    },
    {
      icon: Icons.ENERGY1,
      title: "Impacto positivo",
      description: "La alternativa a lo nuevo: reacondicionado y feliz.",
    },
  ];

  return (
    <section id={styles.container}>
      <h2>Por qué comprar en Furbi</h2>
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
      <Button type="secundary">Conocé más sobre tus beneficios</Button>
    </section>
  );
};

export default SectionReasons;
