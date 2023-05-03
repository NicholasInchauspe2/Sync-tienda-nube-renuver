import { useRouter } from 'next/navigation';
import type { IButton } from '@/types';
import styles from './button.module.scss';

const Button = ({
	children,
	type = '',
	href = '',
	onClick,
	isActiveClass = '',
	...rest
}: IButton): JSX.Element => {
	const hasHref = href !== '';
	const router = useRouter();
	const goTo = (): void => router.push(href);
	const handleButton = hasHref ? goTo : onClick;

	return (
		<button
			className={`${styles.button} ${styles[type]} ${styles[isActiveClass]}`}
			onClick={handleButton}
			{...rest}
		>
			{children}
		</button>
	);
};

export default Button;
