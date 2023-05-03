import { type FC } from 'react';
import Image from 'next/image';
import { Icons, Images } from '@/constants/assets.constants';
import styles from './banner.module.scss';

const BannerEco: FC = (): JSX.Element => (
	<section id={styles.container}>
		<div className={styles.content}>
			<figure className={styles.image}>
				<Image
					src={Images.CELLPHONE}
					alt="cellphone image"
					fill
					sizes="(max-width: 768px) 100vw,
                (max-width: 1200px) 50vw,
                33vw"
				/>
			</figure>
			<div className={styles.info}>
				<figure className={styles.imageEnergy}>
					<Image
						src={Icons.ENERGY2}
						alt="energy Logo"
						fill
						sizes="(max-width: 768px) 100vw,
                (max-width: 1200px) 50vw,
                33vw"
					/>
				</figure>
				<h3>
					Cuando comprás reacondicionado le hacés un bien a tu bolsillo y al planeta: <br />
					<span>Ahorrás 77.000 litros de agua</span>
				</h3>
			</div>
		</div>
	</section>
);

export default BannerEco;
