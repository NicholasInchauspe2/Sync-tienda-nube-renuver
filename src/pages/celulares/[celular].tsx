import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useAppSelector, useAppDispatch } from '@/store';
import {
	selectOrder,
	selectProducts,
	setOrder,
	fetchProducts,
	selectLoading,
} from '@/store/modules/productsSlice';
import { currencyFormatter } from '@/utils';
import Breadcrumbs from '@/commons/Breadcrumbs';
import Button from '@/commons/Button';
import ProductCard from '@/components/ProductCard';
import ProductCardSkeleton from '@/components/ProductCardSkeleton';
import Filters from '@/components/Filters';
import styles from './celulares.module.scss';

const Celulares = (): JSX.Element => {
	const {
		query: { celular },
	} = useRouter();

	const dispatch = useAppDispatch();
	const orderState = useAppSelector(selectOrder);
	const products = useAppSelector(selectProducts);
	const isLoading = useAppSelector(selectLoading);
	const moackSkeleton = [1, 2, 3, 4, 5, 6, 7, 8, 9];

	const fetchAsync = async (): Promise<void> => {
		try {
			await dispatch(fetchProducts());
		} catch (error) {
			console.error(error);
		}
	};

	useEffect(() => {
		void fetchAsync();
	}, []);

	return (
		<div id={styles.pageContainer}>
			<Filters />
			<div className={styles.content}>
				<Breadcrumbs isPlpView />
				<h1>{celular}</h1>
				<div className={styles.orderContainer} id="orderContainer">
					{orderState.options.map((item) => (
						<Button
							key={item.label}
							type="orderFilter"
							isActiveClass={orderState.key === item.id ? 'activeOrder' : ''}
							onClick={() => dispatch(setOrder(item.id))}
						>
							<h6>{item.label}</h6>
							<p>
								Desde{' '}
								{currencyFormatter({
									currency: 'ARS',
									value: item.amount,
									minimumFractionDigits: 0,
								})}
							</p>
						</Button>
					))}
				</div>
				<div className={styles.list}>
					{isLoading &&
						moackSkeleton.map((item, index) => (
							<ProductCardSkeleton key={`skeleton card ${index}`} />
						))}
					{products.map((item, index) => (
						<ProductCard product={item} key={`product card ${index}`} />
					))}
				</div>
			</div>
		</div>
	);
};

export default Celulares;
