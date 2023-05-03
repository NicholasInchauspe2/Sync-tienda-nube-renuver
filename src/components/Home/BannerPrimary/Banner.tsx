// TODO: Agregar imagen al banner
// import Image from 'next/image';
import Button from '@/commons/Button';
// import { Images } from '@/constants/assets.constants';
import styles from './banner.module.scss';

const BannerPrimary = (): JSX.Element => (
	<section id={styles.container}>
		<h1>
			La mejor tecnología <br /> reacondicionada con garantía <br /> de 12 meses.
		</h1>
		<p>Somos el primer marketplace de Latinoamérica, dedicado a la tecnología reacondicionada.</p>
		{/* <figure className={styles.image}>
      <Image src={Images.WOMAN} alt="Foto de mujer" fill />
    </figure> */}
		<Button type="primary">Tienda</Button>
	</section>
);

export default BannerPrimary;
