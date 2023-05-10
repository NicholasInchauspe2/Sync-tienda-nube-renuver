import { type FC } from 'react';
import Quoter from '@/components/Quoter/Quoter';
import styles from './section.module.scss';

const BannerQuoter: FC = () => {
	return (
		<section id={styles.container}>
			<h2>¿Querés vender o canjear tu celular?</h2>
			<Quoter />
		</section>
	);
};

export default BannerQuoter;
