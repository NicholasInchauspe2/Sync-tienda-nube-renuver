import { type FC } from 'react';
import Image from 'next/image';
// import Button from "@/commons/Button";
import { Icons } from '@/constants/assets.constants';
import styles from './section.module.scss';

const REASONS = [
	{
		icon: Icons.SELECTION,
		title: 'Vendedores calificados',
		description: 'Seleccionamos expertos en reacondicionamiento de electrónica.',
	},
	{
		icon: Icons.VERIFIED,
		title: 'Productos verificados',
		description: 'Cada vendedor certifica el correcto funcionamiento de los equipos.',
	},
	{
		icon: Icons.SHIELD,
		title: 'Garantía posventa',
		description: 'Todos los productos tienen garantía de 12 meses.',
	},
	{
		icon: Icons.ENERGY1,
		title: 'Reducción de descarte',
		description: 'El consumo de productos reacondicionados disminuye el impacto ambiental.',
	},
];
const SectionReasons: FC = () => {
	const classNameCreator = (iconName: string): string => {
		if (iconName === Icons.SELECTION) {
			return `${styles.image} ${styles.vendorsSelection}`;
		}

		return styles.image;
	};

	return (
		<section id={styles.container}>
			<h2>
				Renová tu tecnología
				<br />
				de forma <span>segura</span> y <span>sustentable</span>
			</h2>
			<div className={styles.content}>
				{REASONS.map(({ icon, title, description }, idx) => (
					<div className={styles.card} key={idx}>
						<figure className={classNameCreator(icon)}>
							<Image src={icon} alt={icon} fill />
						</figure>
						<h3>{title}</h3>
						<p>{description}</p>
					</div>
				))}
			</div>
			{/* <Button type="secundary">Conocé más sobre tus beneficios</Button> */}
		</section>
	);
};

export default SectionReasons;
