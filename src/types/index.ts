import type { Dispatch, SetStateAction, PropsWithChildren } from 'react';
import type { IProduct } from '@/types/slices';

export interface IButton extends PropsWithChildren {
	type?: string;
	href?: string;
	isActiveClass?: string;
	onClick?: () => {};
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
	handleClick: () => {};
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
