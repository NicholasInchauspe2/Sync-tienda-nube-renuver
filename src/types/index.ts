import { type Dispatch, type SetStateAction } from 'react';
import type React from 'react';
import { type IProduct } from './slices';

export interface IButton extends React.PropsWithChildren {
	type?: string;
	href?: string;
	isActiveClass?: string;
	onClick?: () => void;
}

export type HandleSearch = (
	value: string,
	filter: string,
	setValue: Dispatch<SetStateAction<string>>,
	setFilter: Dispatch<SetStateAction<string>>
) => any;

export type HadleChangeSearch = (value: string) => void;

export interface ISearch {
	handleSearch?: HandleSearch;
	hadleChange?: HadleChangeSearch;
	name: string;
	variant: string;
	placeholder: string;
}

export interface IMenu {
	isOpen: boolean;
	handleClick: () => void;
}

export interface IBreadcrumbs {
	isPlpView?: boolean;
}

export interface IProductCard {
	product: IProduct;
}

export interface Icolor {
	color: string;
	onClick?: () => void;
}

export interface IFloatingPicker {
	openFilters: () => void;
}

export interface ICategory {
	id: string;
	name: string;
	image: string;
	minPrice: string;
	url: string;
	blocked: boolean;
}

export interface ICategoriesProps {
	categories: ICategory[];
}
