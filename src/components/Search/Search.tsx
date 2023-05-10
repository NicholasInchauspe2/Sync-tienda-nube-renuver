import type React from 'react';
import { type FC, useEffect, useState } from 'react';
import Image from 'next/image';
import { type ICategory, type ISearch } from '@/types';
import { Icons } from '@/constants/assets.constants';
import Dropdown from '@/commons/Dropdown/Dropdown';
import getCategories from 'lib/Categories/getCategories';
import styles from './search.module.scss';

const Search: FC<ISearch> = ({
	handleSearch = () => {},
	hadleChange = () => {},
	name,
	variant,
	placeholder,
}) => {
	const [value, setValue] = useState('');
	const [filter, setFilter] = useState('');
	const [categories, setCategories] = useState<ICategory[]>([]);
	const [inputFocus, setInputFocus] = useState(false);

	function handleFocus(): void {
		setInputFocus(true);
	}

	function handleBlur(): void {
		setInputFocus(false);
	}

	const onChange = ({ target: { value } }: any): any => {
		setValue(value);
		hadleChange(value);
	};

	const onClick = (): any => handleSearch(value, filter, setValue, setFilter);

	const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>): void => {
		if (e.key === 'Enter') {
			handleSearch(value, filter, setValue, setFilter);
		}
	};

	useEffect(() => {
		getCategories()
			.then((data) => {
				setCategories(data);
			})
			.catch((error) => {
				console.error(error);
			});
	}, []);

	return (
		<div
			className={`${styles.container} ${styles[variant]} ${
				inputFocus ? styles.focus : styles.focusOut
			}`}
		>
			<div className={styles.dropdown}>
				<Dropdown items={categories} placeholder="Categorías" type="link" />
			</div>

			<input
				type="search"
				name={name}
				id="name"
				value={value}
				onChange={onChange}
				placeholder={placeholder}
				onKeyDown={handleKeyPress}
				onFocus={handleFocus}
				onBlur={handleBlur}
			/>
			<button onClick={onClick} className={styles.searchButton}>
				<div className={styles.logoContainer}>
					<Image src={Icons.SEARCH} alt="search Logo" fill sizes="100vw" />
				</div>
			</button>
		</div>
	);
};

export default Search;
