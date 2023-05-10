import { type FC } from 'react';
import Link from 'next/link';
import Image from 'next/image';
// import { currencyFormatter } from "@/utils";
import { type ICategoriesProps } from '@/types';
import styles from './section.module.scss';

const SectionReasons: FC<ICategoriesProps> = ({ categories }) => {
	const message = (minPrice: string): string => {
		return minPrice !== '#N/A' ? `a partir de ${minPrice}` : 'Próximamente disponible';
	};

	const categoryClass = (blocked?: boolean): string => {
		return blocked === true ? `${styles.card} ${styles.blocked}` : `${styles.card}`;
	};

	return (
		<section id={styles.container}>
			<h2>Encontrá el celu ideal para vos</h2>
			<div className={styles.content}>
				{categories?.map((category) => (
					<Link
						key={category.id}
						className={categoryClass(category.blocked)}
						href={`${category.url}`}
					>
						<figure className={styles.imageContainer}>
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
