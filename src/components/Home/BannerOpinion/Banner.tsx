/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import styles from "./banner.module.scss";
import { Icons, Images } from "@/constants/assets.constants";

const opinions = [
  {
    content: "El servicio es práctico y funcional. Te da varias opciones de compra a muy buenos precios",
    author: "Francisco Cabello",
    job: "Presidente de Ualá"
  },
  {
    content: "El servicio es práctico y funcional. Te da varias opciones de compra a muy buenos precios",
    author: "Francisco Segundo",
    job: "Presidente de Uber"
  },
  {
    content: "El servicio es práctico y funcional. Te da varias opciones de compra a muy buenos precios",
    author: "Francisco Quinto",
    job: "Presidente de spotify"
  }
];

const BannerOpinions = () => (
  <section id={styles.container}>
    <h2>
      Mirá lo que dicen <br /> nuestros clientes:
    </h2>
    <div className={styles.content}>
      <figure className={styles.image}>
        <Image src={Images.CLIENT} alt="Foto del cliente" layout="fill" />
      </figure>
      <div className={styles.swiperContainer}>
        <div className={`swiper-button image-swiper-button-next ${styles.nextButton}`}>
          <figure className={styles.arrow}>
            <Image src={Icons.NEXT} alt="arrow next" layout="fill" />
          </figure>
        </div>
        <Swiper
          pagination={true}
          navigation={{
            nextEl: ".image-swiper-button-next",
            prevEl: ".image-swiper-button-prev",
            disabledClass: "swiper-button-disabled"
          }}
          modules={[Navigation, Pagination]}
          className="mySwiper"
        >
          {
            opinions.map(item => (
              <SwiperSlide key={`slide ${item.author}`}>
                <div className={styles.info}>
                  <p className={styles.quote}>“</p>
                  <h3>
                    {item.content}
                    <span>"</span>
                  </h3>
                  <p>{item.author}</p>
                  <p>{item.job}</p>
                </div>
              </SwiperSlide>
            ))
          }
        </Swiper>
      </div>
    </div>
  </section>
);

export default BannerOpinions;
