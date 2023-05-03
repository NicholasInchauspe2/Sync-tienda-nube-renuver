import Image from 'next/image';
import { Icons } from '@/constants/assets.constants';
import type { IProductCard } from '@/types';
import { currencyFormatter } from '@/utils';
import Color from '@/commons/Colors';
import styles from './productCard.module.scss';

const Productcard = ({ product, ...res }: IProductCard): JSX.Element => {
	const {
		name,
		image,
		price,
		specifications: { usefulLife, storage, color, quality },
	} = product;
	return (
		<article className={`${styles.card}`} {...res} onClick={() => console.log('card')}>
			<div className={styles.imageContainer}>
				<Image src={image} alt="search Logo" fill />
			</div>
			<h5>
				{name}{' '}
				<div className={styles.brandContainer}>
					<Image src={Icons.APPLE} alt="brand Logo" fill />
				</div>
			</h5>
			<div className={styles.specifications}>
				<div className={styles.batteryContainer}>
					<Image src={Icons.BATTERY} alt="battery" fill />
					<span>{usefulLife}%</span>
				</div>
				<div className={styles.storage}>{storage}Gb</div>
				<Color color={color} />
				<div className={styles.starsContainer}>
					<Image src={Icons.STARS} alt="stars" fill />
					<span>{quality}</span>
				</div>
			</div>
			<h5>
				{currencyFormatter({
					currency: 'ARS',
					value: price,
					minimumFractionDigits: 0,
				})}
			</h5>
			<div
				className={styles.shareContainer}
				onClick={(e) => {
					e.stopPropagation();
					console.log('share');
				}}
			>
				<Image src={Icons.SHARE} alt="share Logo" fill />
			</div>
		</article>
	);
};

export default Productcard;
