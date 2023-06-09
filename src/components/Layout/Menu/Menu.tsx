import { type FC } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Button from '@/commons/Button';
import { Icons } from '@/constants/assets.constants';
import type { IMenu } from '@/types';
import styles from './menu.module.scss';

const Menu: FC<IMenu> = ({ isOpen, handleClick }: IMenu): JSX.Element => {
	return (
		<div className={`${isOpen ? styles.slideIn : styles.slideOut} ${styles.menu}`}>
			<div className={styles.header}>
				<figure className={styles.profile}>
					<Image src={Icons.PROFILE} alt="Renuver Logo" fill />
				</figure>
				<div>
					<h2>¡Hola!</h2>
					<p>Disfrutá de los mejores precios acá</p>
				</div>
			</div>

			<div className={styles.buttonsContainer}>
				<Button type="square-green" href="/#">
					Ingresá
				</Button>
				<Button type="square-white" href="/#">
					Creá tu cuenta
				</Button>
			</div>

			<Link href="/#" className={styles.link}>
				<figure className={styles.home}>
					<Image src={Icons.HOME} alt={`home logo`} fill />
				</figure>
				<p>Inicio</p>
			</Link>

			<Link href="/#" className={styles.link}>
				<figure className={styles.help}>
					<Image src={Icons.HEADSET} alt={`help logo`} fill />
				</figure>
				<p>Ayuda</p>
			</Link>
		</div>
	);
};

export default Menu;
