import Image from 'next/image';
import { Icons } from '@/constants/assets.constants';
import type { IFloatingPicker } from '@/types';
import styles from './floatingPicker.module.scss';

const FloatingPicker = ({ openFilters }: IFloatingPicker): JSX.Element => {
	const scrollTo = (): void => {
		window.scrollTo({ top: 0, behavior: 'smooth' });
	};
	return (
		<div className={`${styles.container}`}>
			<button onClick={openFilters}>
				<div className={styles.filterIcon}>
					<Image src={Icons.FILTERICON} alt="filter Logo" fill />
				</div>
				<p>Filtros</p>
			</button>
			<span />
			<button onClick={scrollTo}>
				<div className={styles.orderIcon}>
					<Image src={Icons.ORDERICON} alt="order Logo" fill />
				</div>
				<p>Ordenar</p>
			</button>
		</div>
	);
};

export default FloatingPicker;
