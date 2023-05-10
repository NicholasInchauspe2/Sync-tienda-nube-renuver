import { type FC, useEffect, useState } from 'react';
import Link from 'next/link';
import style from './dropdown.module.scss';

export interface Item {
	icon?: string;
	name: string;
	url?: string;
}

interface DropdownProps {
	items: Item[];
	placeholder: string;
	type: 'link' | 'select';
	onClick?: (item?: Item) => void;
	selectedItem?: Item | null;
	label?: string;
	parentOnClick?: boolean;
	setParentOnClick?: (value: boolean) => void;
}

const Dropdown: FC<DropdownProps> = ({
	items,
	placeholder,
	type,
	onClick,
	selectedItem,
	label,
	parentOnClick,
	setParentOnClick,
}) => {
	const [isOpen, setIsOpen] = useState(false);
	const isSelect = type === 'select';

	const toggleDropdown = (e?: React.MouseEvent<HTMLElement>): void => {
		e?.preventDefault();
		e?.stopPropagation();
		setIsOpen(!isOpen);
	};

	const handleClick = (item: Item): void => {
		onClick?.(item);
		toggleDropdown();
	};

	const typeItem: FC<Item> = (item: Item, index: number) => {
		switch (type) {
			case 'link':
				return (
					<li key={index} className={style.cursorDefault}>
						<Link href={item.url != null ? item.url : '/#'}>{item.name}</Link>
					</li>
				);

			case 'select':
				return (
					<li key={index} onClick={() => handleClick(item)}>
						{/* <svg href={item.icon}></svg> */}
						{item.name}
					</li>
				);

			default:
				return (
					<li key={index} onClick={() => handleClick(item)}>
						{item.name}
					</li>
				);
		}
	};

	useEffect(() => {
		if (parentOnClick ?? false) {
			setIsOpen(false);
			setParentOnClick?.(false);
		}
	}, [parentOnClick, setParentOnClick]);

	const isLabel = label !== undefined;

	return (
		<div className={`${style.container} ${isLabel ? style.containerWithLabel : ''}`}>
			{isLabel && <label>{label}:</label>}
			<div className={`${style.dropdown} ${style[type]}`}>
				<button className={style.dropdownToggle} onClick={toggleDropdown}>
					{selectedItem != null ? selectedItem.name : placeholder}
				</button>
				<ul className={`${style.dropdownMenu} ${isSelect && isOpen ? style.displayBlock : ''}`}>
					{items?.map((item, index) => typeItem(item, index))}
				</ul>
			</div>
		</div>
	);
};

export default Dropdown;
