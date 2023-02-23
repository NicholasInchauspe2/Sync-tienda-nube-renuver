/* eslint-disable react/no-unescaped-entities */
import React, { FC, useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper";
import styles from "./banner.module.scss";
import { Icons, Images } from "@/constants/assets.constants";

const opinions = [
  {
    content:
      "No estaba muy decidida a comprar reacondicionado pero después de contactarlos y resolver todas las dudas ( gracias por la paciencia!!) me pareció una excelente opción costo-beneficio. Por ahora feliz con la compra de mi iPhone 11 128GB.",
    author: "Carolina Fila",
    job: "",
    img: Images.CLIENT3,
  },
  {
    content:
      "Compré un iPhone refurbished con garantía por la página y retiré por la sucursal en Recoleta. Funciona y se ve como nuevo. Los recomiendo!",
    author: "Gustavo E. Velesquen Saenz",
    job: "",
    img: Images.CLIENT1,
  },
  {
    content:
      "Excelente atención online y en el local. La garantía de 6 meses me dio tranquilidad para comprar un iPhone X 64GB que por ahora, funciona excelente. Me gustó también ayudar a reducir el descarte tecnológico, comprando usado en lugar de nuevo.",
    author: "Susana Perez Marquez",
    job: "",
    img: Images.CLIENT3,
  },
];

const NextButton: FC = () => {
  return (
    <button
      className={`swiper-button image-swiper-button-next ${styles.nextButton}`}
    >
      <figure className={styles.arrow}>
        <Image src={Icons.NEXT} alt="arrow next" layout="fill" />
      </figure>
    </button>
  );
};

const PrevButton: FC = () => {
  return (
    <button
      className={`swiper-button image-swiper-button-prev ${styles.prevButton}`}
    >
      <figure className={styles.arrow}>
        <Image src={Icons.NEXT} alt="arrow next" layout="fill" />
      </figure>
    </button>
  );
};

const BannerOpinions = () => {
  return (
    <section id={styles.container}>
      <h2>
        Mirá lo que dicen <br /> nuestros clientes:
      </h2>
      <PrevButton />
      <NextButton />
      <Swiper
        autoplay={true}
        loop={true}
        navigation={{
          nextEl: ".image-swiper-button-next",
          prevEl: ".image-swiper-button-prev",
        }}
        modules={[Navigation, Pagination, Autoplay]}
        pagination={{ clickable: true, dynamicBullets: true }}
        className={styles.mySwipper}
      >
        {opinions.map((item) => (
          <SwiperSlide key={`slide ${item.author}`}>
            <div className={styles.content}>
              <figure className={styles.image}>
                <Image src={item.img} alt="Foto del cliente" layout="fill" />
              </figure>
              <div className={styles.info}>
                <p className={styles.quote}>“</p>
                <h3>
                  {item.content}
                  <span>"</span>
                </h3>
                <p>{item.author}</p>
                <p>{item.job}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default BannerOpinions;
