import { useState } from 'react';
import Image from 'next/image';
import { Icons } from '@/constants/assets.constants';
import FloatingPicker from './FloatingPicker';
import styles from './filters.module.scss';

const Filters = (): JSX.Element => {
	const [isOpenFilter, setIsOpenFilter] = useState(false);
	const toggleOpenFilter = (): void => setIsOpenFilter(!isOpenFilter);
	const animationMobile = isOpenFilter ? styles.openFilter : styles.closeFilter;
	const showBackground = isOpenFilter ? styles.showBackground : '';

	return (
		<>
			<FloatingPicker openFilters={toggleOpenFilter} />
			<aside className={`${styles.container} ${animationMobile}`}>
				<div className={styles.header}>
					<div className={styles.arrowLeftIcon} onClick={toggleOpenFilter}>
						<Image src={Icons.LEFT} alt="left arrow" fill />
					</div>
					<h3>Filtros</h3>
				</div>
			</aside>
			<div className={`${styles.background} ${showBackground}`} />
		</>
	);
};

export default Filters;
