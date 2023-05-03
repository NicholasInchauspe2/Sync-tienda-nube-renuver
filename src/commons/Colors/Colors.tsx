import type { Icolor } from '@/types';
import styles from './colors.module.scss';

const Colors = ({ color = '', onClick = () => {} }: Icolor): JSX.Element => {
	return (
		<div className={`${styles.container}`} onClick={onClick}>
			<div className={styles.color} style={{ backgroundColor: color }} />
		</div>
	);
};

export default Colors;
