import styles from './productCardSkeleton.module.scss';

const ProductcardSkeleton = (): JSX.Element => {
	return (
		<article className={`${styles.card}`}>
			<div className={styles.imageContainer} />
			<div className={styles.lineText} />
			<div className={styles.lineText} />
			<div className={styles.lineText} />
		</article>
	);
};

export default ProductcardSkeleton;
