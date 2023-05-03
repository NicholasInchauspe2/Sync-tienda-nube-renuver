import { type FC, useState } from 'react';
import Image from 'next/image';
import { Icons } from '@/constants/assets.constants';
import type { ISearch } from '../../types';
import styles from './search.module.scss';

const Search: FC<ISearch> = ({
	handleSearch = () => {},
	hadleChange = () => {},
	name,
	variant,
	placeholder,
}): JSX.Element => {
	const [value, setValue] = useState('');
	const [filter, setFilter] = useState('');

	const onChange = ({ target: { value } }: any): any => {
		setValue(value);
		hadleChange(value);
	};

	const onClick = (): any => handleSearch(value, filter, setValue, setFilter);

	return (
		<div className={`${styles.container} ${styles[variant]}`}>
			<select name="" id="filter">
				<option value="1">Todos los Iphones</option>
			</select>
			<input
				type="search"
				name={name}
				id="name"
				value={value}
				onChange={onChange}
				placeholder={placeholder}
			/>
			<button onClick={onClick}>
				<div className={styles.logoContainer}>
					<Image src={Icons.SEARCH} alt="search Logo" fill />
				</div>
			</button>
		</div>
	);
};

export default Search;
