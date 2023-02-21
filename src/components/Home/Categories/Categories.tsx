import React from "react";
import Link from "next/link";
import Image from "next/image";
import {formatPrice} from "@/utils";
import Moack from "./moackProducts.json";
import styles from "./section.module.scss";

const SectionReasons = () => {

  return (
    <section id={styles.container}>
      <h2>Encontrá el iPhone ideal para vos</h2>
      <div className={styles.content}>
        {Moack.map(category => (
          <Link key={category.id} className={styles.card} href={`/${category.name}`}>
            <figure className={styles.image}>
              <Image src={category.image} alt="cellphone image" layout="fill" />
            </figure>
            <h4>{category.name}</h4>
            <p>a partir de {formatPrice(category.minPrice)}</p>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default SectionReasons;
