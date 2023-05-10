import { type FC } from 'react';
import Typewriter from 'typewriter-effect';
// import Image from "next/image";
import Button from '@/commons/Button';
// import { Images } from "@/constants/assets.constants";
import styles from './banner.module.scss';

const BannerPrimary: FC = () => {
	const text1 = 'usada y verificada';
	const text2 = 'reacondicionada';
	const text3 = 'furbished';

	const typewriterFunction = (typewriter: any): void => {
		const delay = 500;

		typewriter
			.changeDelay(60)
			.typeString(text1)
			.pauseFor(delay)
			.changeDeleteSpeed(30)
			.deleteChars(text1.length)
			.changeDelay(50)
			.typeString(text2)
			.pauseFor(delay)
			.changeDeleteSpeed(20)
			.deleteChars(text2.length - 2)
			.pauseFor(delay / 5)
			.typeString(text3)
			.pauseFor(delay)
			.start();
	};

	return (
		<section id={styles.container}>
			<h1>
				Donde la electrónica
				<div>
					<Typewriter
						onInit={typewriterFunction}
						options={{
							loop: true,
							cursorClassName: styles.cursor,
							wrapperClassName: styles.letters,
						}}
					/>
				</div>
				tiene una mejor vida.
			</h1>
			<p>
				Encontrá la mejor cotización para comprar, vender o canjear tu celular en la red más grande
				de tiendas de electrónica verificada.
			</p>
			{/* <figure className={styles.image}>
      <Image src={Images.WOMAN} alt="Foto de mujer" fill sizes="100vw" />
    </figure> */}
			<Button type="primary" href={'https://tienda.renuver.com/productos/'}>
				Tienda
			</Button>
		</section>
	);
};

export default BannerPrimary;
