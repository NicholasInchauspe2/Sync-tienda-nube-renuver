import Image from 'next/image';
import Button from '@/commons/Button';
import { Icons } from '@/constants/assets.constants';
import styles from './section.module.scss';
const reasons = [
	{
		icon: Icons.VERIFIED,
		title: 'Calidad verificada',
		description: 'Vendedores seleccionados por su control de calidad riguroso y continuo.',
	},
	{
		icon: Icons.LABEL,
		title: 'La mejor oferta disponible',
		description: 'Nuestro algoritmo te brinda la mejor calidad al menor precio posible.',
	},
	{
		icon: Icons.SHIELD,
		title: 'Un servicio excelente',
		description: 'Compra segura y atención al cliente.',
	},
	{
		icon: Icons.ENERGY1,
		title: 'Impacto positivo',
		description: 'La alternativa a lo nuevo: reacondicionado y feliz.',
	},
];

const SectionReasons = (): JSX.Element => {
	return (
		<section id={styles.container}>
			<h2>¿Por qué comprar en Renúver?</h2>
			<div className={styles.content}>
				{reasons.map(({ icon, title, description }, idx) => (
					<div className={styles.card} key={idx}>
						<figure className={styles.image}>
							<figure className={styles.image}>
								<Image src={icon} alt={icon} fill />
							</figure>
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
