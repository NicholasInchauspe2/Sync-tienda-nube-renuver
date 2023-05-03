import Link from 'next/link';
import Image from 'next/image';
import { currencyFormatter } from '@/utils';
import Mock from './mockProducts.json';
import styles from './section.module.scss';

const SectionReasons = (): JSX.Element => {
	const message = (minPrice: number): string => {
		return minPrice > 0
			? `a partir de ${currencyFormatter({
					currency: 'ARS',
					value: minPrice,
					minimumFractionDigits: 0,
			  })}`
			: 'Próximamente disponible';
	};

	const categoryClass = (blocked?: boolean): string => {
		return blocked === true ? `${styles.card} ${styles.blocked}` : `${styles.card}`;
	};

	return (
		<section id={styles.container}>
			<h2>Encontrá el iPhone ideal para vos</h2>
			<div className={styles.content}>
				{Mock.map((category) => (
					<Link
						key={category.id}
						className={categoryClass(category.blocked)}
						href={`${category.url}`}
					>
						<figure className={styles.image}>
							<Image
								src={category.image}
								alt="cellphone image"
								fill
								sizes="(max-width: 768px) 100vw,
                (max-width: 1200px) 50vw,
                33vw"
							/>
						</figure>
						<h4>{category.name}</h4>
						<p>{message(category.minPrice)}</p>
					</Link>
				))}
			</div>
		</section>
	);
};

export default SectionReasons;
