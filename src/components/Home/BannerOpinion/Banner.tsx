import { type FC } from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper';
import { Icons, Images } from '@/constants/assets.constants';
import styles from './banner.module.scss';

const opinions = [
	{
		content:
			'No estaba muy decidida a comprar reacondicionado pero después de resolver todas las dudas con ustedes me pareció una excelente opción costo-beneficio.',
		author: 'Carolina Fila',
		job: '',
		img: Images.CLIENT2,
	},
	{
		content:
			'Compré un iPhone usado con garantía por la página y retiré por la sucursal. Funciona y se ve como nuevo. ¡Los recomiendo!',
		author: 'Gustavo E. Velesquen Saenz',
		job: '',
		img: Images.CLIENT1,
	},
	{
		content:
			'Excelente atención. La garantía de 12 meses me dio tranquilidad para comprar. Me gustó también ayudar a reducir el descarte tecnológico comprando usado.',
		author: 'Susana Perez Marquez',
		job: '',
		img: Images.CLIENT3,
	},
];

const NextButton: FC = () => {
	return (
		<button className={`swiper-button image-swiper-button-next ${styles.nextButton}`}>
			<figure className={styles.arrow}>
				<Image
					src={Icons.NEXT}
					alt="arrow next"
					fill
					sizes="(max-width: 768px) 100vw,
                (max-width: 1200px) 50vw,
                33vw"
				/>
			</figure>
		</button>
	);
};

const PrevButton: FC = () => {
	return (
		<button className={`swiper-button image-swiper-button-prev ${styles.prevButton}`}>
			<figure className={styles.arrow}>
				<Image
					src={Icons.NEXT}
					alt="arrow next"
					fill
					sizes="(max-width: 768px) 100vw,
                (max-width: 1200px) 50vw,
                33vw"
				/>
			</figure>
		</button>
	);
};

const BannerOpinions: FC = () => {
	return (
		<section id={styles.container}>
			<h2>
				Nuestra comunidad <br /> anda diciendo:
			</h2>
			<PrevButton />
			<NextButton />
			<Swiper
				autoplay={true}
				loop={true}
				navigation={{
					nextEl: '.image-swiper-button-next',
					prevEl: '.image-swiper-button-prev',
				}}
				modules={[Navigation, Pagination, Autoplay]}
				pagination={{ clickable: true, dynamicBullets: true }}
				className={styles.mySwipper}
			>
				{opinions.map((item) => (
					<SwiperSlide key={`slide ${item.author}`}>
						<div className={styles.content}>
							<figure className={styles.image}>
								<Image
									src={item.img}
									alt="Foto del cliente"
									fill
									sizes="(max-width: 768px) 100vw,
                  (max-width: 1200px) 50vw,
                  33vw"
								/>
							</figure>
							<div className={styles.info}>
								<p className={styles.quote}>“</p>
								<p className={styles.description}>
									{item.content}
									<span>”</span>
								</p>
								<p>
									<b>{item.author}</b>
								</p>
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
