import { useRouter } from 'next/router';
import Image from 'next/image';
import Link from 'next/link';
import { Icons } from '@/constants/assets.constants';
import { Routing } from '@/constants/routing.constants';
import { getBreadcrumbs } from '@/utils';
import type { IBreadcrumbs } from '@/types';
import styles from './breadcrumbs.module.scss';

const Breadcrumbs = ({ isPlpView = false }: IBreadcrumbs): JSX.Element => {
	const id = isPlpView ? 'breadcrumbsInPlp' : 'breadcrumbs';
	const { asPath } = useRouter();
	const crumbs = getBreadcrumbs(asPath);

	return (
		<div id={styles[id]}>
			<Link href={Routing.HOME} className={styles.arrowLeftContainer}>
				<Image src={Icons.LEFT} alt="left arrow" fill />
			</Link>
			{crumbs.map((item) => (
				<div key={item} className={styles.crumb}>
					<p>{item}</p>

					<div className={styles.arrowContainer}>
						<Image src={Icons.NEXTGREY} alt="next arrow" fill />
					</div>
				</div>
			))}
		</div>
	);
};

export default Breadcrumbs;
